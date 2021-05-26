import ContextManager from './ContextManager';
import Context from './Context';
import TableFormat from '../datatable/TableFormat';
import VariableDefinition from './VariableDefinition';
import EventDefinition from './EventDefinition';
import FunctionDefinition from './FunctionDefinition';
import VariableData from './VariableData';
import EventData from './EventData';
import FunctionData from './FunctionData';
import ActionDefinition from '../action/ActionDefinition';
import PermissionChecker from '../security/PermissionChecker';
import ContextStatus from './ContextStatus';
import DataTable from '../datatable/DataTable';
import VariableStatus from './VariableStatus';
import CallerController from './CallerController';
import DataRecord from '../datatable/DataRecord';
import RequestController from './RequestController';
import JObject from '../util/java/JObject';
import FireEventRequestController from '../event/FireEventRequestController';
import Event from '../data/Event';
import EntityDefinition from './EntityDefinition';
import DefaultContextVisitor from './DefaultContextVisitor';
import Permissions from '../security/Permissions';
import BasicActionDefinition from '../action/BasicActionDefinition';
import EventProcessingRule from '../event/EventProcessingRule';
import DefaultContextEventListener from './DefaultContextEventListener';
export default abstract class AbstractContext<C extends Context<C, M>, M extends ContextManager<any>> extends Context<C, M> {
    static readonly IMPLEMENTATION_METHOD_PREFIX: string;
    static readonly SETTER_METHOD_PREFIX: string;
    static readonly GETTER_METHOD_PREFIX: string;
    static readonly EXECUTOR_THREADS_PERCENT_FOR_VISITORS: number;
    static readonly V_INFO: string;
    static readonly V_CHILDREN: string;
    static readonly V_VARIABLES: string;
    static readonly V_FUNCTIONS: string;
    static readonly V_EVENTS: string;
    static readonly V_ACTIONS: string;
    static readonly V_VARIABLE_STATUSES: string;
    static readonly F_GET_COPY_DATA: string;
    static readonly F_COPY: string;
    static readonly F_COPY_TO_CHILDREN: string;
    static readonly F_UPDATE_VARIABLE: string;
    static readonly F_LOCKED_BY: string;
    static readonly F_LOCK: string;
    static readonly F_UNLOCK: string;
    static readonly F_BREAK_LOCK: string;
    static readonly E_INFO: string;
    static readonly E_UPDATED: string;
    static readonly E_CHANGE: string;
    static readonly E_DESTROYED: string;
    static readonly E_INFO_CHANGED: string;
    static readonly E_VARIABLE_ADDED: string;
    static readonly E_VARIABLE_REMOVED: string;
    static readonly E_FUNCTION_ADDED: string;
    static readonly E_FUNCTION_REMOVED: string;
    static readonly E_EVENT_ADDED: string;
    static readonly E_EVENT_REMOVED: string;
    static readonly E_ACTION_ADDED: string;
    static readonly E_ACTION_REMOVED: string;
    static readonly E_ACTION_STATE_CHANGED: string;
    static readonly E_CHILD_REMOVED: string;
    static readonly E_CHILD_ADDED: string;
    static readonly E_VARIABLE_STATUS_CHANGED: string;
    static readonly VF_INFO_DESCRIPTION: string;
    static readonly VF_INFO_TYPE: string;
    static readonly VF_INFO_GROUP: string;
    static readonly VF_INFO_ICON: string;
    static readonly VF_INFO_LOCAL_ROOT: string;
    static readonly VF_INFO_PEER_ROOT: string;
    static readonly VF_INFO_PEER_PRIMARY_ROOT: string;
    static readonly VF_INFO_REMOTE_ROOT: string;
    static readonly VF_INFO_REMOTE_PATH: string;
    static readonly VF_INFO_MAPPED: string;
    static readonly VF_CHILDREN_NAME: string;
    static readonly VF_VARIABLE_STATUSES_COMMENT: string;
    static readonly VF_VARIABLE_STATUSES_STATUS: string;
    static readonly VF_VARIABLE_STATUSES_NAME: string;
    static readonly FIF_COPY_DATA_RECIPIENTS: string;
    static readonly FIF_COPY_DATA_GROUP: string;
    static readonly FOF_COPY_DATA_NAME: string;
    static readonly FOF_COPY_DATA_DESCRIPTION: string;
    static readonly FOF_COPY_DATA_REPLICATE: string;
    static readonly FOF_COPY_DATA_FIELDS: string;
    static readonly FOF_COPY_DATA_VALUE: string;
    static readonly FIF_REPLICATE_FIELDS_NAME: string;
    static readonly FIF_REPLICATE_FIELDS_DESCRIPTION: string;
    static readonly FIF_REPLICATE_FIELDS_REPLICATE: string;
    static readonly FIF_COPY_DATA_RECIPIENTS_RECIPIENT: string;
    static readonly FIF_LOCK_PROPERTIES_EDITOR_UUID: string;
    static readonly FIF_UNLOCK_PROPERTIES_EDITOR_UUID: string;
    static readonly FOF_LOCKED_BY_OWNER_NAME: string;
    static readonly FOF_LOCK_OWNER_NAME: string;
    static readonly FOF_UNLOCK_UNLOCKED: string;
    static readonly EF_INFO_INFO: string;
    static readonly EF_EVENT_REMOVED_NAME: string;
    static readonly EF_FUNCTION_REMOVED_NAME: string;
    static readonly EF_VARIABLE_REMOVED_NAME: string;
    static readonly EF_ACTION_REMOVED_NAME: string;
    static readonly EF_CHILD_REMOVED_CHILD: string;
    static readonly EF_CHILD_ADDED_CHILD: string;
    static readonly FIELD_REPLICATE_CONTEXT: string;
    static readonly FIELD_REPLICATE_VARIABLE: string;
    static readonly FIELD_REPLICATE_SUCCESSFUL: string;
    static readonly FIELD_REPLICATE_ERRORS: string;
    static readonly V_UPDATE_VARIABLE: string;
    static readonly V_UPDATE_VARIABLE_EXPRESSION: string;
    static readonly FIELD_UPDATE_VARIABLE_SUCCESSFUL: string;
    static readonly FIELD_UPDATE_VARIABLE_ERRORS: string;
    static readonly EF_UPDATED_VARIABLE: string;
    static readonly EF_UPDATED_VALUE: string;
    static readonly EF_UPDATED_USER: string;
    static readonly EF_UPDATED_UPDATE_ORIGINATOR: string;
    static readonly EF_CHANGE_VARIABLE: string;
    static readonly EF_CHANGE_VALUE: string;
    static readonly EF_CHANGE_DATA: string;
    static readonly FIELD_VD_NAME: string;
    static readonly FIELD_VD_FORMAT: string;
    static readonly FIELD_VD_DESCRIPTION: string;
    static readonly FIELD_VD_READABLE: string;
    static readonly FIELD_VD_WRITABLE: string;
    static readonly FIELD_VD_HELP: string;
    static readonly FIELD_VD_GROUP: string;
    static readonly FIELD_VD_ICON_ID: string;
    static readonly FIELD_VD_HELP_ID: string;
    static readonly FIELD_VD_CACHE_TIME: string;
    static readonly FIELD_VD_SERVER_CACHING_MODE: string;
    static readonly FIELD_FD_NAME: string;
    static readonly FIELD_FD_INPUTFORMAT: string;
    static readonly FIELD_FD_OUTPUTFORMAT: string;
    static readonly FIELD_FD_DESCRIPTION: string;
    static readonly FIELD_FD_HELP: string;
    static readonly FIELD_FD_GROUP: string;
    static readonly FIELD_FD_ICON_ID: string;
    static readonly FIELD_FD_CONCURRENT: string;
    static readonly FIELD_FD_PERMISSIONS: string;
    static readonly FIELD_ED_NAME: string;
    static readonly FIELD_ED_FORMAT: string;
    static readonly FIELD_ED_DESCRIPTION: string;
    static readonly FIELD_ED_HELP: string;
    static readonly FIELD_ED_LEVEL: string;
    static readonly FIELD_ED_GROUP: string;
    static readonly FIELD_ED_ICON_ID: string;
    private static _init;
    static VARIABLE_DEFINITION_FORMAT: TableFormat;
    private static __static_initializer_0;
    static readonly EF_VARIABLE_ADDED: TableFormat;
    private static __static_initializer_1;
    static readonly FUNCTION_DEFINITION_FORMAT: TableFormat;
    private static __static_initializer_2;
    static EF_FUNCTION_ADDED: TableFormat;
    private static __static_initializer_3;
    static readonly EVENT_DEFINITION_FORMAT: TableFormat;
    private static __static_initializer_4;
    static readonly EF_EVENT_ADDED: TableFormat;
    private static __static_initializer_5;
    static readonly VFT_CHILDREN: TableFormat;
    static readonly INFO_DEFINITION_FORMAT: TableFormat;
    private static __static_initializer_6;
    static ACTION_DEF_FORMAT: TableFormat;
    private static __static_initializer_7;
    static RESOURCE_MASKS_FORMAT: TableFormat;
    static FIFT_GET_COPY_DATA: TableFormat;
    private static __static_initializer_8;
    static FIFT_GET_COPY_DATA_RECIPIENTS: TableFormat;
    static REPLICATE_INPUT_FORMAT: TableFormat;
    private static __static_initializer_9;
    static FIFT_REPLICATE_FIELDS: TableFormat;
    private static __static_initializer_10;
    static REPLICATE_OUTPUT_FORMAT: TableFormat;
    private static __static_initializer_11;
    static REPLICATE_TO_CHILDREN_OUTPUT_FORMAT: TableFormat;
    private static __static_initializer_12;
    static FIFT_UPDATE_VARIABLE: TableFormat;
    private static __static_initializer_13;
    static readonly FIFT_LOCK: TableFormat;
    private static __static_initializer_14;
    static readonly FIFT_UNLOCK: TableFormat;
    private static __static_initializer_15;
    static readonly FOFT_LOCKED_BY: TableFormat;
    private static __static_initializer_16;
    static readonly FOFT_LOCK: TableFormat;
    private static __static_initializer_17;
    static readonly FOFT_UNLOCK: TableFormat;
    private static __static_initializer_18;
    static EF_UPDATED: TableFormat;
    private static __static_initializer_19;
    static EF_CHANGE: TableFormat;
    private static __static_initializer_20;
    static EFT_INFO: TableFormat;
    static EFT_VARIABLE_REMOVED: TableFormat;
    static EFT_EVENT_REMOVED: TableFormat;
    static EFT_FUNCTION_REMOVED: TableFormat;
    static EFT_CHILD_REMOVED: TableFormat;
    static EFT_CHILD_ADDED: TableFormat;
    static EFT_ACTION_REMOVED: TableFormat;
    static VD_INFO: VariableDefinition;
    private static __static_initializer_21;
    static VD_VARIABLES: VariableDefinition;
    private static __static_initializer_22;
    static VD_FUNCTIONS: VariableDefinition;
    private static __static_initializer_23;
    static VD_EVENTS: VariableDefinition;
    private static __static_initializer_24;
    static VD_ACTIONS: VariableDefinition;
    private static __static_initializer_25;
    static VD_CHILDREN: VariableDefinition;
    private static __static_initializer_26;
    static FD_GET_COPY_DATA: FunctionDefinition;
    private static __static_initializer_27;
    static FD_COPY: FunctionDefinition;
    private static __static_initializer_28;
    static FD_COPY_TO_CHILDREN: FunctionDefinition;
    private static __static_initializer_29;
    static FD_UPDATE_VARIABLE: FunctionDefinition;
    private static __static_initializer_30;
    static ED_INFO: EventDefinition;
    private static __static_initializer_31;
    static ED_CHILD_ADDED: EventDefinition;
    private static __static_initializer_32;
    static ED_CHILD_REMOVED: EventDefinition;
    private static __static_initializer_33;
    static ED_VARIABLE_ADDED: EventDefinition;
    private static __static_initializer_34;
    static ED_VARIABLE_REMOVED: EventDefinition;
    private static __static_initializer_35;
    static ED_FUNCTION_ADDED: EventDefinition;
    private static __static_initializer_36;
    static ED_FUNCTION_REMOVED: EventDefinition;
    private static __static_initializer_37;
    static ED_EVENT_ADDED: EventDefinition;
    private static __static_initializer_38;
    static ED_EVENT_REMOVED: EventDefinition;
    private static __static_initializer_39;
    static ED_ACTION_ADDED: EventDefinition;
    private static __static_initializer_40;
    static ED_ACTION_REMOVED: EventDefinition;
    private static __static_initializer_41;
    static ED_ACTION_STATE_CHANGED: EventDefinition;
    private static __static_initializer_42;
    static ED_INFO_CHANGED: EventDefinition;
    private static __static_initializer_43;
    static ED_UPDATED: EventDefinition;
    private static __static_initializer_44;
    static ED_CHANGE: EventDefinition;
    private static __static_initializer_45;
    static ED_DESTROYED: EventDefinition;
    private static __static_initializer_46;
    static VFT_VARIABLE_STATUSES: TableFormat;
    private static __static_initializer_47;
    static initialize(): void;
    static readonly DEFAULT_EVENT_LEVEL: number;
    static readonly DEFAULT_PERMISSIONS: Permissions;
    static readonly CALLER_CONTROLLER_PROPERTY_DEBUG: string;
    static readonly CALLER_CONTROLLER_PROPERTY_NO_UPDATED_EVENTS: string;
    static readonly CALLER_CONTROLLER_PROPERTY_NO_CHANGE_EVENTS: string;
    static readonly CALLER_CONTROLLER_PROPERTY_NO_STATISTICS: string;
    static readonly CALLER_CONTROLLER_PROPERTY_NO_VALIDATION: string;
    static readonly INDEX_HIGHEST: number;
    static readonly INDEX_VERY_HIGH: number;
    static readonly INDEX_HIGH: number;
    static readonly INDEX_HIGHER: number;
    static readonly INDEX_NORMAL: number;
    static readonly INDEX_LOWER: number;
    static readonly INDEX_LOW: number;
    static readonly INDEX_VERY_LOW: number;
    static readonly INDEX_LOWEST: number;
    static readonly DELTA_HIGHEST: number;
    static readonly DELTA_VERY_HIGH: number;
    static readonly DELTA_HIGH: number;
    static readonly DELTA_HIGHER: number;
    static readonly DELTA_LOWER: number;
    static readonly DELTA_LOW: number;
    static readonly DELTA_VERY_LOW: number;
    static readonly DELTA_LOWEST: number;
    static readonly VERY_LOW_PERFORMANCE_THRESHOLD: number;
    static readonly LOW_PERFORMANCE_THRESHOLD: number;
    static readonly SORT_THRESHOLD: number;
    static readonly MOVE_LOCK_TIMEOUT: number;
    private contextManager;
    private variableData;
    private functionData;
    private eventData;
    private actionDefinitions;
    private readonly propertiesLock;
    private name;
    private description;
    private type;
    private group;
    private iconId;
    private parent;
    private setupComplete;
    private started;
    private stopped;
    private index;
    private permissionCheckingEnabled;
    private permissions;
    private childrenViewPermissions;
    private permissionChecker;
    private children;
    private childrenMap;
    private valueCheckingEnabled;
    private childrenConcurrencyEnabled;
    private childrenSortingEnabled;
    private fireUpdateEvents;
    private status;
    private variableStatuses;
    private variableStatusesTable;
    private variableStatusesUpdated;
    private path;
    constructor(name: string);
    setup(contextManager: M | null): void;
    protected setupContext(): void;
    setupPermissions(): void;
    setupMyself(): void;
    private addPropertiesLockFunctionDefinitions;
    setupChildren(): void;
    teardown(): void;
    start(): void;
    stop(): void;
    getChildren(caller?: CallerController): Promise<Array<Context<C, M>>>;
    private shouldSeeChild;
    private canSee;
    getVisibleChildren(caller?: CallerController): Promise<Array<Context<C, M>>>;
    isMapped(): boolean;
    getMappedChildren(caller?: CallerController): Promise<Array<Context<C, M>>>;
    getName(): string;
    getDescription(): string | null;
    setDescription(description: string): void;
    getParent(): Context<C, M> | null;
    hasParent(parentContext: Context<C, M>): boolean;
    getRoot(): C;
    get(contextPath: string, caller?: CallerController): Promise<Context<C, M> | null>;
    getPermissions(): Permissions;
    protected setName(name: string): void;
    private getRootWithLookup;
    setParent(parent: Context<C, M> | null): void;
    protected setPermissions(permissions: Permissions): void;
    protected setPermissionChecker(permissionChecker: PermissionChecker): void;
    protected setFireUpdateEvents(fireUpdateEvents: boolean): void;
    protected isFireUpdateEvents(): boolean;
    private setContextManager;
    protected setChildrenViewPermissions(childrenViewPermissions: Permissions): void;
    setChildrenSortingEnabled(childrenSortingEnabled: boolean): void;
    isChildrenSortingEnabled(): boolean;
    protected setValueCheckingEnabled(valueCheckingEnabled: boolean): void;
    isChildrenConcurrencyEnabled(): boolean;
    protected setChildrenConcurrencyEnabled(childrenConcurrencyEnabled: boolean): void;
    protected checkThisPermissions(needPermissions: Permissions | null, accessedEntityDefinition: EntityDefinition, caller?: CallerController): void;
    protected checkPermissions(needPermissions: Permissions | null, accessedContext: Context<C, M>, accessedEntityDefinition: EntityDefinition | null, caller?: CallerController): boolean;
    addChild(child: Context<C, M>, index?: number | null): void;
    removeFromParent(): void;
    destroy(moving: boolean): void;
    protected destroyChildren(moving: boolean): void;
    removeChild(child: string | Context<C, M>): void;
    reorderChild(child: C, index: number): void;
    destroyChild(child: Context<C, M>, moving: boolean): void;
    updatePrepare(): void;
    protected movePrepare(oldPath: string, oldName: string, newPath: string, newName: string): void;
    protected moveInternal(oldPath: string, oldName: string, newPath: string, newName: string): void;
    protected moveFinalize(oldPath: string, oldName: string, newPath: string, newName: string): void;
    move(newParent: C, newName: string): void;
    private _move;
    getChild(name: string, caller?: CallerController): Promise<C | null>;
    protected syncGetChild(name: string, caller?: CallerController): C | null;
    private getChildWithoutCheckingPerms;
    getPath(): string;
    private createPath;
    addEventListener(name: string, listener: DefaultContextEventListener, weak?: boolean): boolean;
    removeEventListener(name: string, listener: DefaultContextEventListener): boolean;
    getVariableDefinitions(includeHidden?: boolean, caller?: CallerController): Array<VariableDefinition>;
    getVariableDefinitionsByGroup(group: string, caller?: CallerController): Array<VariableDefinition>;
    getPermissionChecker(): PermissionChecker;
    getChildrenViewPermissions(): Permissions;
    getContextManager(): M | null;
    isSetupComplete(): boolean;
    isStarted(): boolean;
    isStopped(): boolean;
    isInitializedStatus(): boolean;
    isInitializedInfo(): boolean;
    isInitializedChildren(): boolean;
    isInitializedVariables(): boolean;
    isInitializedFunctions(): boolean;
    isInitializedEvents(): boolean;
    getFunctionDefinitions(includeHidden?: boolean, caller?: CallerController): Array<FunctionDefinition>;
    getFunctionDefinitionsByGroup(group: string, caller?: CallerController): Array<FunctionDefinition>;
    getType(): string | null;
    getIconId(): string | null;
    getIndex(): number | null;
    getGroup(): string | null;
    getLocalRoot(withParent: boolean): string | null;
    isProxy(): boolean;
    isDistributed(): boolean;
    getPeerRoot(): string | null;
    getRemoteRoot(): string | null;
    getRemotePath(): string | null;
    getPeerPath(): string;
    getLocalPrimaryRoot(): string | null;
    setType(type: string): void;
    protected setPermissionCheckingEnabled(permissionCheckingEnabled: boolean): void;
    protected setIconId(iconId: string): void;
    private contextInfoChanged;
    setGroup(group: string): void;
    getEventDefinitionsByGroup(group: string, caller?: CallerController): Array<EventDefinition>;
    getEventDefinitions(includeHidden?: boolean, caller?: CallerController): Array<EventDefinition>;
    getActionDefinition(name: string, caller?: CallerController): ActionDefinition | null;
    getDefaultActionDefinition(caller: CallerController): ActionDefinition | null;
    addActionDefinition(def: ActionDefinition): void;
    getActionDefinitions(includeHidden?: boolean, caller?: CallerController): Array<ActionDefinition>;
    removeActionDefinition(name: string): void;
    actDefFromDataRecord(rec: DataRecord): BasicActionDefinition;
    private getVariableByDefinition;
    private checkVariableValue;
    private checkVariableValueFormat;
    private executeGetter;
    private executeGetterMethod;
    executeDefaultGetter(name: string, caller: CallerController, check?: boolean, createDefault?: boolean): DataTable;
    private executeDefaultGetterByDefinition;
    protected executeDefaultGetterImpl(vd: VariableDefinition, caller?: CallerController): DataTable;
    equals(obj: JObject | null): boolean;
    getVariable(name: string, caller?: CallerController, request?: RequestController): Promise<DataTable>;
    getVariableClone(name: string, caller?: CallerController): Promise<DataTable>;
    protected getVariableImpl(def: VariableDefinition, caller?: CallerController, request?: RequestController): Promise<DataTable | null>;
    getVariableObject(name: string, caller?: CallerController): Promise<any>;
    private setVariableByDefinition;
    protected variableUpdated(def: VariableDefinition, value: DataTable, caller?: CallerController): void;
    protected fireUpdatedEvent(def: VariableDefinition, value: DataTable, caller?: CallerController): void;
    fireChangeEvent(def: VariableDefinition, timestamp: Date, value: DataTable, caller?: CallerController): void;
    protected isAllowUpdatedEvents(def: VariableDefinition): boolean;
    protected setupVariables(): void;
    private executeSetter;
    private executeSetterMethod;
    getDefaultValue(def: VariableDefinition): DataTable;
    executeDefaultSetter(def: VariableDefinition, value: DataTable, caller?: CallerController): void;
    protected executeDefaultSetterImpl(vd: VariableDefinition, value: DataTable, caller?: CallerController): void;
    setVariable(name: string, value: DataTable, caller?: CallerController, request?: RequestController): Promise<void>;
    protected setVariableImpl(def: VariableDefinition, value: DataTable, caller?: CallerController, request?: RequestController): Promise<boolean>;
    protected isAllowSetterExecution(data: VariableDefinition, value: DataTable, request?: RequestController): boolean;
    private getAndCheckVariableDefinition;
    setVariableField(variable: string, field: string, record: number | undefined, value: any, cc?: CallerController): Promise<boolean>;
    addVariableRecord(variable: string, record: DataRecord | Array<any>, cc?: CallerController): Promise<void>;
    compareTo(context: Context<C, M>): number;
    removeVariableRecords(variable: string, field: string, value: any, cc?: CallerController): Promise<void>;
    protected callFunctionByDefinition(def: FunctionDefinition, parameters: DataTable, caller?: CallerController, request?: RequestController): Promise<DataTable>;
    private executeImplementation;
    private executeImplementationMethod;
    private getDefaultFunctionOutput;
    protected setupFunctions(): void;
    callFunction(name: string, parameters?: DataTable | Array<any> | null, caller?: CallerController, request?: RequestController): Promise<DataTable>;
    protected callFunctionImpl(def: FunctionDefinition, parameters: DataTable, caller?: CallerController, request?: RequestController): Promise<DataTable | null>;
    private getAndCheckFunctionDefinition;
    addVariableDefinition(def: VariableDefinition): void;
    protected fireVariableAdded(def: VariableDefinition): void;
    removeVariableDefinition(name: string): void;
    addFunctionDefinition(def: FunctionDefinition): void;
    protected fireFunctionAdded(def: FunctionDefinition): void;
    removeFunctionDefinition(name: string): void;
    addEventDefinition(def: EventDefinition): void;
    protected fireEventAdded(def: EventDefinition): void;
    removeEventDefinition(name: string): void;
    getVariableData(name: string): VariableData;
    getVariableDefinition(name: string, caller?: CallerController): VariableDefinition | null;
    getFunctionData(name: string): FunctionData;
    getFunctionDefinition(name: string, caller?: CallerController): FunctionDefinition | null;
    getEventData(name: string): EventData;
    getEventDefinition(name: string, caller?: CallerController): EventDefinition | null;
    private getAndCheckEventDefinition;
    protected setupEvents(): void;
    protected postEvent(ev: Event, ed: EventDefinition, caller?: CallerController, request?: FireEventRequestController): void;
    protected updateEvent(ev: Event, ed: EventDefinition, caller?: CallerController, request?: FireEventRequestController): void;
    protected _fireEvent(ed: EventDefinition, data: DataTable, level: number, id: number | null, creationtime: Date | null, listener: number | null, caller?: CallerController, request?: FireEventRequestController, permissions?: Permissions): Promise<Event | null>;
    protected _fireEventWithEvent(ed: EventDefinition, event: Event, listener: number | null, caller?: CallerController, request?: FireEventRequestController): Promise<Event | null>;
    fireEvent(name: string, data?: DataTable | Array<any> | null, level?: number, id?: number | null, creationtime?: Date | null, listener?: number | null, caller?: CallerController, request?: FireEventRequestController): Promise<Event | null>;
    protected getEventProcessingRule(event: Event): EventProcessingRule | null;
    protected processBindings(event: Event): void;
    private processEnrichments;
    protected getEventProcessingCallerController(): CallerController;
    getEventHistory(name: string): Array<Event>;
    toDetailedString(): string;
    toString(): string;
    accept(visitor: DefaultContextVisitor): void;
    protected getChangeEventDefinition(): EventDefinition;
    getVvariables(def: VariableDefinition, caller: CallerController, request: RequestController): DataTable;
    protected encodeFormat(format: TableFormat | null, caller: CallerController | null): string | null;
    protected decodeFormat(source: string, caller: CallerController | null): TableFormat | null;
    protected varDefToDataRecord(vd: VariableDefinition, caller?: CallerController | null): DataRecord;
    varDefFromDataRecord(rec: DataRecord, caller?: CallerController | null): VariableDefinition;
    getVfunctions(def: VariableDefinition, caller: CallerController, request: RequestController): DataTable;
    protected funcDefToDataRecord(fd: FunctionDefinition, caller?: CallerController | null): DataRecord;
    funcDefFromDataRecord(rec: DataRecord, caller?: CallerController | null): FunctionDefinition;
    init(): Promise<Context<C, M>>;
    getVevents(def: VariableDefinition, caller: CallerController, request: RequestController): DataTable;
    protected evtDefToDataRecord(ed: EventDefinition, caller?: CallerController | null): DataRecord;
    evtDefFromDataRecord(rec: DataRecord, caller?: CallerController | null): EventDefinition;
    getVactions(def: VariableDefinition, caller: CallerController, request: RequestController): DataTable;
    protected actDefToDataRecord(def: ActionDefinition): DataRecord;
    enableStatus(): void;
    getStatus(): Promise<ContextStatus | null>;
    setStatus(status: number, comment: string): void;
    protected fireStatusChanged(status: number, comment: string, oldStatus: number): void;
    enableVariableStatuses(persistent: boolean): void;
    private getVariableStatusesTable;
    private createVariableStatusesTable;
    private getVariableStatuses;
    private ensureVariableStatuses;
    protected fetchVariableStatuses(): DataTable;
    updateVariableStatus(variable: string, status: VariableStatus, persistent: boolean): Promise<void>;
    protected clearVariableStatuses(): void;
    protected saveVariableStatuses(): void;
    protected persistVariableStatuses(statuses: DataTable): void;
    getVariableStatus(name: string): VariableStatus;
    getVchildren(def: VariableDefinition, caller: CallerController, request: RequestController): Promise<DataTable>;
    getVinfo(def: VariableDefinition, caller: CallerController, request: RequestController): DataTable;
    protected createContextInfoTable(): DataTable;
    callFgetCopyData(def: FunctionDefinition, caller: CallerController, request: RequestController, parameters: DataTable): Promise<DataTable>;
    callFcopy(def: FunctionDefinition, caller: CallerController, request: RequestController, parameters: DataTable): Promise<DataTable>;
    callFupdateVariable(def: FunctionDefinition, caller: CallerController, request: RequestController, parameters: DataTable): Promise<DataTable>;
    replicateVariableOnCopy(variableName: string, variableValue: DataTable, targetValue: DataTable, fields: Array<string>, caller: CallerController): Set<string>;
    callFcopyToChildren(def: FunctionDefinition, caller: CallerController, request: RequestController, parameters: DataTable): Promise<DataTable>;
    protected copyTo(def: FunctionDefinition, caller: CallerController, request: RequestController, parameters: DataTable, children: Array<Context<C, M>>): Promise<DataTable>;
}
