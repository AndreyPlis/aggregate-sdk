import Comparable from '../util/java/Comparable';
import EventDefinition from './EventDefinition';
import ContextManager from './ContextManager';
import AbstractContext from './AbstractContext';
import ContextEventListener from '../event/ContextEventListener';
import Event from '../data/Event';
import QueuedEvent from './QueuedEvent';
import ContextEventListenerInfo from '../event/ContextEventListenerInfo';
import JObject from '../util/java/JObject';
import EventDispatcher from './EventDispatcher';
import DefaultContextEventListener from './DefaultContextEventListener';
export default class EventData extends JObject implements Comparable<EventData> {
    static readonly UNDISPATCHED_EVENTS_QUEUE_LENGTH = 10000;
    private readonly listeners;
    private definition;
    private history;
    private fireCount;
    private undispatchedEvents;
    private dispatching;
    private handleOffers;
    private handleExecutions;
    constructor(definition: EventDefinition, source: ContextManager<any> | AbstractContext<any, any>);
    registerFiredEvent(): void;
    registerHandleOffer(): void;
    registerHandleExecution(): void;
    getDefinition(): EventDefinition;
    getListeners(): Set<DefaultContextEventListener>;
    getListenersInfo(): Set<ContextEventListenerInfo>;
    getFireCount(): number;
    addListener(listener: ContextEventListener, weak: boolean): boolean;
    removeListener(listener: ContextEventListener): boolean;
    clearListeners(): void;
    hasListeners(): boolean;
    dispatch(event: Event): void;
    store(event: Event, customMemoryStorageSize: number | null): Event | null;
    getHistory(): Array<Event>;
    toString(): string;
    compareTo(o: EventData): number;
    queue(ev: QueuedEvent): void;
    dispatchAll(ed: EventDispatcher): void;
    isDispatching(): boolean;
    setDispatching(dispatching: boolean): void;
    setDefinition(eventDefinition: EventDefinition): void;
    getHandleOffers(): number;
    getHandleExecutions(): number;
    getListenersCount(): number;
    getQueueLength(): number;
}
