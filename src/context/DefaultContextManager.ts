import Context from './Context';
import ContextManager from './ContextManager';
import JObject from '../util/java/JObject';
import CallerController from './CallerController';
import UncheckedCallerController from './UncheckedCallerController';
import EventDispatcher from './EventDispatcher';
import ContextEventListenerSet from '../event/ContextEventListenerSet';
import JConstants from '../util/java/JConstants';
import EventDefinition from './EventDefinition';
import FunctionDefinition from './FunctionDefinition';
import EventData from './EventData';
import FireEventRequestController from '../event/FireEventRequestController';
import VariableDefinition from './VariableDefinition';
import EventUtils from '../event/EventUtils';
import DefaultContextEventListener from './DefaultContextEventListener';
import ContextUtils from './ContextUtils';
import Event from '../data/Event';
import DefaultContextVisitor from './DefaultContextVisitor';
import QueuedEvent from './QueuedEvent';
import Log from '../Log';

export default class DefaultContextManager<T extends Context<any, any>> extends JObject implements ContextManager<T> {
  private async = false;

  private rootContext: T | null = null;

  private readonly callerController: CallerController = new UncheckedCallerController();

  private eventDispatcher: EventDispatcher | null = null;
  private eventDispatcherOwner = true;

  private readonly eventListeners: Map<string, Map<string, ContextEventListenerSet>> = new Map<string, Map<string, ContextEventListenerSet>>();

  private readonly maskListeners: Map<string, Map<string, ContextEventListenerSet>> = new Map<string, Map<string, ContextEventListenerSet>>();

  private started = false;

  constructor(async: boolean, eventQueueLength: number = JConstants.INTEGER_MAX_VALUE, concurrentDispatcherCount: number | null = null, eventDispatcher: EventDispatcher | null = null) {
    super();
    this.async = async;
    if (eventDispatcher != null) {
      this.eventDispatcher = eventDispatcher;
      this.eventDispatcherOwner = false;
    }

    if (async) {
      this.ensureDispatcher(eventQueueLength, concurrentDispatcherCount);
    }
  }

  isStarted(): boolean {
    return this.started;
  }

  start(): void {
    if (this.async && this.eventDispatcherOwner) {
      this.ensureDispatcher(JConstants.INTEGER_MAX_VALUE, null);
      // this.eventDispatcher.start();
    }
    if (this.rootContext != null) {
      this.rootContext.start();
    }
    this.started = true;
  }

  restart(): void {
    this.stop();
    this.start();
  }

  stop(): void {
    this.started = false;
    if (this.eventDispatcher != null && this.eventDispatcherOwner) {
      //     this.eventDispatcher.interrupt();
      this.eventDispatcher = null;
    }
    if (this.rootContext != null) {
      this.rootContext.stop();
    }
  }

  getRoot(): T | null {
    return this.rootContext;
  }

  public setRoot(newRoot: T): void {
    this.rootContext = newRoot;
    this.rootContext.setup(this);
    this.contextAdded(newRoot);
  }

  async get(contextName: string, caller?: CallerController): Promise<T | null> {
    const root: T | null = this.getRoot();
    return root != null ? ((await root.get(contextName, caller)) as T) : null;
  }

  private async addEventListener(context: string, event: string, listener: DefaultContextEventListener, mask: boolean, weak: boolean): Promise<void> {
    // Distributed: ok, because remote events will be redirected to this server
    const con = await this.get(context, listener.getCallerController());

    if (con != null) {
      const events: Array<EventDefinition> = EventUtils.getEvents(con, event, listener.getCallerController());

      for (const ed of events) {
        this.addListenerToContext(con, ed.getName(), listener, mask, weak);
      }
    } else {
      if (!mask) {
        const eel: ContextEventListenerSet = this.getListeners(context, event);

        if (!eel.contains(listener)) {
          eel.addListener(listener, weak);
        }
      }
    }
  }

  protected addListenerToContext(con: T, event: string, listener: DefaultContextEventListener, mask: boolean, weak: boolean): void {
    const ed: EventDefinition | null = con.getEventDefinition(event, listener.getCallerController());
    if (ed != null) {
      con.addEventListener(event, listener, weak);
    }
  }

  private async removeEventListener(context: string, event: string, listener: DefaultContextEventListener, mask: boolean): Promise<void> {
    const con: T | null = await this.get(context, listener.getCallerController());

    if (con != null) {
      if (con.getEventDefinition(event) != null) {
        this.removeListenerFromContext(con, event, listener, mask);
      }
    } else {
      if (!mask) {
        const eel: ContextEventListenerSet = this.getListeners(context, event);

        if (eel != null) {
          eel.removeListener(listener);
        }
      }
    }
  }

  protected removeListenerFromContext(con: T, event: string, listener: DefaultContextEventListener, mask: boolean): void {
    con.removeEventListener(event, listener);
  }

  async addMaskEventListener(mask: string, event: string, listener: DefaultContextEventListener, weak = false): Promise<void> {
    const contexts: Array<string> = await ContextUtils.expandMaskToPaths(mask, this, false, listener.getCallerController());

    for (const con of contexts) {
      this.addEventListener(con, event, listener, true, weak);
    }

    const listeners: ContextEventListenerSet = this.getMaskListeners(mask, event);

    listeners.addListener(listener, weak);
  }

  async removeMaskEventListener(mask: string, event: string, listener: DefaultContextEventListener): Promise<void> {
    const contexts: Array<Context<any, any>> = await ContextUtils.expandMaskToContexts(mask, this, false, listener.getCallerController());

    for (const con of contexts) {
      if (!con.isInitializedEvents()) {
        continue;
      }

      const events: Array<EventDefinition> = EventUtils.getEvents(con, event, listener.getCallerController());

      for (const ed of events) {
        this.removeEventListener(con.getPath(), ed.getName(), listener, true);
      }
    }

    const listeners: ContextEventListenerSet = this.getMaskListeners(mask, event);

    listeners.removeListener(listener);
  }

  protected getListeners(context: string, event: string): ContextEventListenerSet {
    const cel: Map<string, ContextEventListenerSet> = this.getContextListeners(context);

    let cels = cel.get(event);

    if (!cels) {
      cels = ContextEventListenerSet.fromContextManager(this);
      cel.set(event, cels);
    }
    return cels;
  }

  private getContextListeners(context: string): Map<string, ContextEventListenerSet> {
    let cel = this.eventListeners.get(context);

    if (!cel) {
      cel = new Map<string, ContextEventListenerSet>();
      this.eventListeners.set(context, cel);
    }

    return cel;
  }

  private getMaskListeners(mask: string, event: string): ContextEventListenerSet {
    const cel: Map<string, ContextEventListenerSet> = this.getContextMaskListeners(mask);

    let eel = cel.get(event);

    if (!eel) {
      eel = ContextEventListenerSet.fromContextManager(this);
      cel.set(event, eel);
    }
    return eel;
  }

  private getContextMaskListeners(mask: string): Map<string, ContextEventListenerSet> {
    let cel = this.maskListeners.get(mask);
    if (!cel) {
      cel = new Map<string, ContextEventListenerSet>();
      this.maskListeners.set(mask, cel);
    }
    return cel;
  }

  contextAdded(con: T): void {
    const cel = this.eventListeners.get(con.getPath());

    if (cel) {
      for (const event of cel.keys()) {
        const cels: ContextEventListenerSet = cel.get(event) as ContextEventListenerSet;
        for (const celi of cels.getListenersInfo()) {
          if (con.getEventData(event) != null) {
            con.addEventListener(event, celi.getListener(), celi.isWeak());
          }
        }
      }
    }
    for (const mask of this.maskListeners.keys()) {
      if (ContextUtils.matchesToMask(mask, con.getPath())) {
        this.addMaskListenerToContext(mask, con);
      }
    }
  }

  public getMaskListenersMasks(): Set<string> {
    return new Set<string>(this.maskListeners.keys());
  }

  public addMaskListenerToContext(mask: string, con: T): void {
    const mcel: Map<string, ContextEventListenerSet> = this.getContextMaskListeners(mask);

    if (ContextUtils.matchesToMask(mask, con.getPath())) {
      for (const event of mcel.keys()) {
        const listeners: ContextEventListenerSet = mcel.get(event) as ContextEventListenerSet;

        for (const li of listeners.getListenersInfo()) {
          const events: Array<EventDefinition> = EventUtils.getEvents(con, event, li.getListener().getCallerController());

          for (const ed of events) {
            this.addListenerToContext(con, ed.getName(), li.getListener(), true, li.isWeak());
          }
        }
      }
    }
  }

  contextRemoved(con: T): void {
    const _this = this;
    con.accept(
      new (class Visitor extends DefaultContextVisitor {
        visit(vc: Context<any, any>): void {
          for (const mask of _this.maskListeners.keys()) {
            if (ContextUtils.matchesToMask(mask, vc.getPath())) {
              const contextMaskListeners = _this.getContextMaskListeners(mask);

              const contextMaskListenersCopy = new Map<string, ContextEventListenerSet>(contextMaskListeners);

              for (const event of contextMaskListenersCopy.keys()) {
                const cels: ContextEventListenerSet = _this.getMaskListeners(mask, event);
                for (const li of cels.getListenersInfo()) {
                  const events: Array<EventDefinition> = EventUtils.getEvents(vc, event, li.getListener().getCallerController());

                  for (const ed of events) {
                    vc.removeEventListener(ed.getName(), li.getListener());
                  }
                }
              }
            }
          }
        }
      })()
    );

    con.accept(
      new (class Visitor extends DefaultContextVisitor {
        visit(vc: Context<any, any>): void {
          const cel: Map<string, ContextEventListenerSet> = _this.getContextListeners(vc.getPath());
          const eventDefinitions: Array<EventDefinition> = vc.getEventDefinitions(false, _this.callerController);
          for (const ed of eventDefinitions) {
            const edata: EventData = vc.getEventData(ed.getName());
            const listeners = cel.get(ed.getName());
            if (listeners) {
              for (const celi of edata.getListenersInfo()) {
                listeners.addListener(celi.getListener(), celi.isWeak());
              }
            }
          }
        }
      })()
    );
  }

  contextInfoChanged(con: T): void {}

  eventAdded(con: T, ed: EventDefinition): void {
    for (const mask of this.maskListeners.keys()) {
      if (ContextUtils.matchesToMask(mask, con.getPath())) {
        const cel: Map<string, ContextEventListenerSet> = this.getContextMaskListeners(mask);

        for (const event of cel.keys()) {
          if (EventUtils.matchesToMask(event, ed)) {
            const listeners = cel.get(event) as ContextEventListenerSet;

            for (const li of listeners.getListenersInfo()) {
              this.addListenerToContext(con, ed.getName(), li.getListener(), true, li.isWeak());
            }
          }
        }
      }
    }
  }

  eventRemoved(con: T, ed: EventDefinition): void {}

  functionAdded(con: T, fd: FunctionDefinition): void {}

  functionRemoved(con: T, fd: FunctionDefinition): void {}

  getCallerController(): CallerController {
    return this.callerController;
  }

  getEventQueueLength(): number {
    return this.eventDispatcher != null ? this.eventDispatcher.getQueueLength() : 0;
  }

  getEventQueueStatistics(): Map<string, number> {
    return this.eventDispatcher?.getEventQueueStatistics() ?? new Map<string, number>();
  }

  getEventsProcessed(): number {
    return this.eventDispatcher != null ? this.eventDispatcher.getEventsProcessed() : 0;
  }

  getEventsScheduled(): number {
    return 0;
  }

  queue(ed: EventData, ev: Event, request?: FireEventRequestController): void {
    const dispatcher: EventDispatcher | null = this.eventDispatcher;

    if (dispatcher != null) {
      dispatcher.registerIncomingEvent();
    }

    if (!this.async || ed.getDefinition().getConcurrency() == EventDefinition.CONCURRENCY_SYNCHRONOUS) {
      ed.dispatch(ev);
      if (dispatcher != null) {
        dispatcher.registerProcessedEvent();
      }
    } else {
      const qe = new QueuedEvent(ed, ev);

      try {
        dispatcher?.queue(qe, request);
      } catch (ex1) {
        Log.CONTEXT_EVENTS.debug('Interrupted while queueing event: ' + ev);
      }
    }
  }

  variableAdded(con: T, vd: VariableDefinition): void {}

  variableRemoved(con: T, vd: VariableDefinition): void {}

  private ensureDispatcher(eventQueueLength: number, concurrentDispatcherCount: number | null) {
    if (this.eventDispatcher == null) {
      this.eventDispatcher = new EventDispatcher(eventQueueLength, concurrentDispatcherCount);
    }
  }

  initialize(): void {}
}
