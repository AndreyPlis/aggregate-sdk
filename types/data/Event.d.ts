import EventDefinition from '../context/EventDefinition';
import DataTable from '../datatable/DataTable';
import Permissions from '../security/Permissions';
import Enrichment from '../event/Enrichment';
import Acknowledgement from '../event/Acknowledgement';
import JObject from '../util/java/JObject';
export default class Event extends JObject {
    static readonly DEFAULT_EVENT_EXPIRATION_PERIOD: number;
    private id;
    private readonly instantiationtime;
    private creationtime;
    private expirationtime;
    private context;
    private name;
    private acknowledgements;
    private data;
    private listener;
    private level;
    private permissions;
    private count;
    private enrichments;
    private originator;
    private deduplicationId;
    private sessionID;
    constructor();
    static createEventWithPermission(context: string, def: EventDefinition, level: number, data: DataTable, id: number, creationtime: Date | null, permissions: Permissions | null): Event;
    static createEvent(context: string, name: string, level: number, data: DataTable, id: number): Event;
    private init;
    getId(): number;
    getInstantiationtime(): Date;
    getCreationtime(): Date | null;
    getContext(): string | null;
    getName(): string | null;
    getExpirationtime(): Date | null;
    getAcknowledgementsTable(): DataTable;
    getEnrichmentsTable(): DataTable;
    setAcknowledgementsTable(data: DataTable): void;
    setEnrichmentsTable(data: DataTable): void;
    addAcknowledgement(ack: Acknowledgement): void;
    getAcknowledgements(): Array<Acknowledgement>;
    addEnrichment(enrichment: Enrichment): void;
    getEnrichments(): Array<Enrichment>;
    setId(id: number): void;
    setCreationtime(creationtime: Date): void;
    setName(name: string): void;
    setContext(context: string): void;
    setExpirationtime(expirationtime: Date): void;
    setData(data: DataTable): void;
    setListener(listener: number | null): void;
    setLevel(level: number): void;
    setOriginator(originator: any): void;
    getData(): DataTable | null;
    getListener(): number | null;
    getLevel(): number;
    getPermissions(): Permissions | null;
    setPermissions(permissions: Permissions): void;
    getOriginator(): any;
    getCount(): number;
    setCount(count: number): void;
    getDeduplicationId(): string | null;
    setDeduplicationId(deduplicationId: string): void;
    getSessionID(): number | null;
    setSessionID(sessionID: number | null): void;
    clone(): JObject;
    equals(obj: JObject | null): boolean;
    toString(): string;
}