import AbstractDeviceController from '../communication/AbstractDeviceController';
import IncomingAggreGateCommand from './IncomingAggreGateCommand';
import OutgoingAggreGateCommand from './OutgoingAggregateCommand';
import TableFormat from '../datatable/TableFormat';
import DataTable from '../datatable/DataTable';
import AggreGateDeviceController from './AggreGateDeviceController';
import ProtocolVersion from './ProtocolVersion';
import ProtocolCommandBuilder from './ProcotolCommandBuilder';
import FormatCache from '../datatable/encoding/FormatCache';
import ClassicEncodingSettings from '../datatable/encoding/ClassicEncodingSettings';
import AggreGateDevice from './AggreGateDevice';
import ContextManager from '../context/ContextManager';
import CallerController from '../context/CallerController';
import CompressedCommandWriter from './CompressedCommandWriter';
import UserSettings from '../util/UserSettings';
import ProxyContext from './ProxyContext';
import Context from '../context/Context';
import EventDefinition from '../context/EventDefinition';
import Event from '../data/Event';
import LoggerAdapter from '../util/logger/LoggerAdapter';
export default abstract class AbstractAggreGateDeviceController<D extends AggreGateDevice, C extends ContextManager<any>> extends AbstractDeviceController<IncomingAggreGateCommand, OutgoingAggreGateCommand> implements AggreGateDeviceController<IncomingAggreGateCommand, OutgoingAggreGateCommand> {
    static readonly FLAG_NO_REPLY: string;
    private device;
    private _contextManager;
    private callerController;
    private readonly userSettings;
    private avoidSendingFormats;
    private readonly formatCache;
    private readonly maxEventQueueLength;
    private usesCompression;
    protected readonly commandWriter: CompressedCommandWriter<OutgoingAggreGateCommand>;
    private protocolVersion;
    private rejectedEvents;
    private readonly commandBuilder;
    constructor(device: D, logger: LoggerAdapter, maxEventQueueLength: number, json?: boolean);
    getContextManager(): ContextManager<Context<any, any>>;
    setContextManager(contextManager: C): void;
    setDevice(device: D): void;
    getDevice(): D | null;
    getCallerController(): CallerController | null;
    protected setCallerController(callerController: CallerController): void;
    getFormatCache(): FormatCache;
    getSettings(): UserSettings;
    createClassicEncodingSettings(forSending: boolean): ClassicEncodingSettings;
    protected setAvoidSendingFormats(avoidSendingFormats: boolean): void;
    isAvoidSendingFormats(): boolean;
    protected connectImpl(): Promise<boolean>;
    abstract start(): void;
    destroy(): void;
    disconnectImpl(): void;
    protected getProxyContexts(path: string): Array<ProxyContext<any, any>>;
    sendCommandAndCheckReplyCode(cmd: OutgoingAggreGateCommand): Promise<IncomingAggreGateCommand | null>;
    processAsyncCommand(cmd: IncomingAggreGateCommand): void;
    private processEvent;
    protected confirmEvent(con: Context<any, any>, def: EventDefinition, event: Event | null): void;
    toString(): string;
    callRemoteFunction(context: string, name: string, outputFormat: TableFormat | null, parameters: DataTable, queueName: string | null, isReplyRequired?: boolean): Promise<DataTable>;
    private releaseShallowData;
    decodeRemoteDataTable(format: TableFormat | null, encodedReply: string): DataTable;
    private choseAppropriateDataTable;
    isUsesCompression(): boolean;
    setUsesCompression(usesCompression: boolean): void;
    getEventQueueLength(): number;
    getRejectedEvents(): number;
    getProtocolVersion(): ProtocolVersion;
    getCommandBuilder(): ProtocolCommandBuilder;
}
