import TableFormat from '../datatable/TableFormat';
import FunctionDefinition from '../context/FunctionDefinition';
import Context from '../context/Context';
import CallerController from '../context/CallerController';
import ContextManager from '../context/ContextManager';
export default class StorageHelper {
    static readonly CLASS_FIELD_INSTANCE_ID: string;
    static readonly CLASS_FIELD_AUTHOR: string;
    static readonly CLASS_FIELD_CREATION_TIME: string;
    static readonly CLASS_FIELD_UPDATE_TIME: string;
    static readonly MANY_TO_MANY_FIELD_RELATION_ID: string;
    static readonly MANY_TO_MANY_FIELD_LEFT_ID: string;
    static readonly MANY_TO_MANY_FIELD_RIGTH_ID: string;
    static readonly MANY_TO_MANY_TABLE_PREFIX: string;
    static readonly SORT_ASCENDING: number;
    static readonly SORT_DESCENDING: number;
    static readonly VISIBILITY_DISABLED: number;
    static readonly VISIBILITY_VISIBLE: number;
    static readonly VISIBILITY_HIDDEN: number;
    static readonly F_STORAGE_OPEN: string;
    static readonly F_STORAGE_CLOSE: string;
    static readonly F_STORAGE_GET: string;
    static readonly F_STORAGE_UPDATE: string;
    static readonly F_STORAGE_DELETE: string;
    static readonly F_STORAGE_INSERT: string;
    static readonly F_STORAGE_VIEWS: string;
    static readonly F_STORAGE_TABLES: string;
    static readonly F_STORAGE_COLUMNS: string;
    static readonly F_STORAGE_RELATIONS: string;
    static readonly F_STORAGE_FILTER: string;
    static readonly F_STORAGE_SORTING: string;
    static readonly F_STORAGE_CONSTRUCT: string;
    static readonly F_STORAGE_OPERATIONS: string;
    static readonly F_STORAGE_CONSTRUCT_RELATION: string;
    static readonly F_STORAGE_DELETE_RELATION: string;
    static readonly F_STORAGE_LINK_INSTANCES: string;
    static readonly F_STORAGE_UNLINK_INSTANCES: string;
    static readonly F_STORAGE_LINKED_INSTANCES_FILTER: string;
    static readonly F_STORAGE_GET_FORMAT: string;
    static readonly FIF_STORAGE_OPEN_ID: string;
    static readonly FIF_STORAGE_OPEN_VIEW: string;
    static readonly FIF_STORAGE_OPEN_QUERY: string;
    static readonly FIF_STORAGE_OPEN_TABLE: string;
    static readonly FIF_STORAGE_OPEN_COLUMNS: string;
    static readonly FIF_STORAGE_OPEN_FILTER: string;
    static readonly FIF_STORAGE_OPEN_SORTING: string;
    static readonly FIF_STORAGE_OPEN_GET_DATA: string;
    static readonly FIF_STORAGE_OPEN_LIMIT: string;
    static readonly FIF_STORAGE_OPEN_OFFSET: string;
    static readonly FOF_STORAGE_OPEN_ID: string;
    static readonly FOF_STORAGE_OPEN_COUNT: string;
    static readonly FOF_STORAGE_OPEN_DATA: string;
    static readonly FIF_STORAGE_CLOSE_ID: string;
    static readonly FIF_STORAGE_GET_ID: string;
    static readonly FIF_STORAGE_GET_FIRST: string;
    static readonly FIF_STORAGE_GET_COUNT: string;
    static readonly FOF_STORAGE_GET_SIZE: string;
    static readonly FOF_STORAGE_GET_DATA: string;
    static readonly FIF_STORAGE_UPDATE_ID: string;
    static readonly FIF_STORAGE_UPDATE_ROW: string;
    static readonly FIF_STORAGE_UPDATE_COLUMN: string;
    static readonly FIF_STORAGE_UPDATE_VALUE: string;
    static readonly FIF_STORAGE_UPDATE_TABLE: string;
    static readonly FIF_STORAGE_UPDATE_FILTER: string;
    static readonly FOF_STORAGE_UPDATE_COUNT: string;
    static readonly FIF_STORAGE_DELETE_ID: string;
    static readonly FIF_STORAGE_DELETE_ROWLIST: string;
    static readonly FIF_STORAGE_DELETE_TABLE: string;
    static readonly FIF_STORAGE_DELETE_FILTER: string;
    static readonly FOF_STORAGE_DELETE_COUNT: string;
    static readonly FIF_STORAGE_INSERT_ID: string;
    static readonly FIF_STORAGE_INSERT_VALUES: string;
    static readonly FIF_STORAGE_INSERT_TABLE: string;
    static readonly FOF_STORAGE_INSERT_ROW: string;
    static readonly FOF_STORAGE_INSERT_INSTANCE_ID: string;
    static readonly FIF_STORAGE_COLUMNS_TABLE: string;
    static readonly FIF_STORAGE_COLUMNS_COLUMNS: string;
    static readonly FIF_STORAGE_COLUMNS_LIFE_CYCLES: string;
    static readonly FIF_STORAGE_RELATIONS_TABLE: string;
    static readonly FIF_STORAGE_RELATIONS_DASHBOARD_CLASS: string;
    static readonly FIF_STORAGE_FILTER_TABLE: string;
    static readonly FIF_STORAGE_FILTER_FILTER: string;
    static readonly FIF_STORAGE_SORTING_TABLE: string;
    static readonly FIF_STORAGE_SORTING_SORTING: string;
    static readonly FIF_STORAGE_CONSTRUCT_TABLE: string;
    static readonly FIF_STORAGE_CONSTRUCT_FIELDS: string;
    static readonly FIF_STORAGE_CONSTRUCT_LIFE_CYCLES: string;
    static readonly FIF_STORAGE_MANY_TO_MANY_RELATIONS: string;
    static readonly FIF_STORAGE_CONSTRUCT_RELATION_TABLE: string;
    static readonly FIF_STORAGE_CONSTRUCT_RELATION_PRIMARY_KEY_TYPE: string;
    static readonly FIF_STORAGE_CONSTRUCT_RELATION_RELATED_TABLE: string;
    static readonly FIF_STORAGE_CONSTRUCT_RELATION_RELATED_PRIMARY_KEY_TYPE: string;
    static readonly FIF_STORAGE_CONSTRUCT_RELATION_NAME: string;
    static readonly FIF_STORAGE_CONSTRUCT_RELATION_CASCADE_DELETE: string;
    static readonly FIF_STORAGE_DELETE_RELATION_TABLE: string;
    static readonly FIF_STORAGE_DELETE_RELATION_PRIMARY_KEY_TYPE: string;
    static readonly FIF_STORAGE_DELETE_RELATION_RELATED_TABLE: string;
    static readonly FIF_STORAGE_DELETE_RELATION_RELATED_PRIMARY_KEY_TYPE: string;
    static readonly FIF_STORAGE_DELETE_RELATION_NAME: string;
    static readonly FIF_STORAGE_OPERATIONS_TABLE: string;
    static readonly FIF_STORAGE_OPERATIONS_COLUMN: string;
    static readonly FIF_STORAGE_LINK_INSTANCES_TABLE: string;
    static readonly FIF_STORAGE_LINK_INSTANCES_RELATED_TABLE: string;
    static readonly FIF_STORAGE_LINK_INSTANCES_RELATION_NAME: string;
    static readonly FIF_STORAGE_LINK_INSTANCES_RELATED_IDS: string;
    static readonly FIF_STORAGE_LINK_INSTANCES_INSTANCE_ID: string;
    static readonly FIF_STORAGE_LINK_INSTANCES_RELATED_ID: string;
    static readonly FIF_STORAGE_LINKED_INSTANCES_FILTER_INSTANCE_ID: string;
    static readonly FIF_STORAGE_LINKED_INSTANCES_FILTER_TABLE: string;
    static readonly FIF_STORAGE_LINKED_INSTANCES_FILTER_RELATED_TABLE: string;
    static readonly FIF_STORAGE_LINKED_INSTANCES_FILTER_RELATION_NAME: string;
    static readonly FIF_STORAGE_LINKED_INSTANCES_FILTER_RELATION_OWNER: string;
    static readonly FIF_STORAGE_LINKED_INSTANCES_FILTER_GET_RELATED: string;
    static readonly FIF_STORAGE_GET_FORMAT_TABLE: string;
    static readonly FIF_STORAGE_GET_FORMAT_VIEW: string;
    static FIELD_COLUMNS_NAME: string;
    static readonly FIELD_COLUMNS_DESCRIPTION: string;
    static readonly FIELD_COLUMNS_GROUP: string;
    static readonly FIELD_COLUMNS_VISIBILITY: string;
    static readonly FIELD_COLUMNS_READONLY: string;
    static readonly FIELD_COLUMNS_PRIMARY_KEY: string;
    static readonly FIELD_COLUMNS_IS_CALCULATED_FIELD: string;
    static readonly FIELD_COLUMNS_FIELD_DATATABLE: string;
    static readonly FIELD_SORTING_COLUMN: string;
    static readonly FIELD_SORTING_ORDER: string;
    static readonly FIFT_STORAGE_OPEN: TableFormat;
    protected constructor();
    static __static_initializer_0(): void;
    static readonly FOFT_STORAGE_OPEN: TableFormat;
    static __static_initializer_1(): void;
    static readonly FIFT_STORAGE_CLOSE: TableFormat;
    static __static_initializer_2(): void;
    static readonly FIFT_STORAGE_GET: TableFormat;
    static __static_initializer_3(): void;
    static readonly FOFT_STORAGE_GET: TableFormat;
    static __static_initializer_4(): void;
    static readonly FIFT_STORAGE_UPDATE: TableFormat;
    static __static_initializer_5(): void;
    static readonly FOFT_STORAGE_UPDATE: TableFormat;
    static __static_initializer_6(): void;
    static readonly FIFT_STORAGE_DELETE: TableFormat;
    static __static_initializer_7(): void;
    static readonly FOFT_STORAGE_DELETE: TableFormat;
    static __static_initializer_8(): void;
    static readonly FIFT_STORAGE_INSERT: TableFormat;
    static __static_initializer_9(): void;
    static readonly FOFT_STORAGE_INSERT: TableFormat;
    static __static_initializer_10(): void;
    static readonly FIFT_STORAGE_COLUMNS: TableFormat;
    static __static_initializer_11(): void;
    static readonly FIFT_STORAGE_RELATIONS: TableFormat;
    static __static_initializer_12(): void;
    static readonly FIFT_STORAGE_FILTER: TableFormat;
    static __static_initializer_13(): void;
    static readonly FIFT_STORAGE_SORTING: TableFormat;
    static __static_initializer_14(): void;
    static readonly FIFT_STORAGE_CONSTRUCT: TableFormat;
    static __static_initializer_15(): void;
    static readonly FIFT_STORAGE_OPERATIONS: TableFormat;
    static __static_initializer_16(): void;
    static readonly FIFT_STORAGE_CONSTRUCT_RELATION: TableFormat;
    static __static_initializer_17(): void;
    static readonly FIFT_STORAGE_DELETE_RELATION: TableFormat;
    static __static_initializer_18(): void;
    static readonly FORMAT_RELATED_IDS: TableFormat;
    static __static_initializer_19(): void;
    static readonly FIFT_STORAGE_LINK_INSTANCES: TableFormat;
    static __static_initializer_20(): void;
    static readonly FIFT_STORAGE_UNLINK_INSTANCES: TableFormat;
    static readonly FIFT_STORAGE_LINKED_INSTANCES_FILTER: TableFormat;
    static __static_initializer_21(): void;
    static readonly FOFT_STORAGE_LINKED_INSTANCES_FILTER: TableFormat;
    static readonly FIFT_STORAGE_GET_FORMAT: TableFormat;
    static __static_initializer_22(): void;
    static readonly FORMAT_COLUMNS: TableFormat;
    static __static_initializer_23(): void;
    private static getTableForCalculatedField;
    static readonly FORMAT_SORTING: TableFormat;
    static __static_initializer_24(): void;
    static readonly FORMAT_ROWLIST: TableFormat;
    static __static_initializer_25(): void;
    static readonly FOFT_ADD_ROW_ACTION: TableFormat;
    static __static_initializer_26(): void;
    static readonly FOFT_REMOVE_OR_UPDATE_ROW_ACTION: TableFormat;
    static __static_initializer_27(): void;
    private static readonly GROUP_STORAGE;
    static FD_STORAGE_OPEN: FunctionDefinition;
    static __static_initializer_28(): void;
    static FD_STORAGE_CLOSE: FunctionDefinition;
    static __static_initializer_29(): void;
    static FD_STORAGE_GET: FunctionDefinition;
    static __static_initializer_30(): void;
    static FD_STORAGE_UPDATE: FunctionDefinition;
    static __static_initializer_31(): void;
    static FD_STORAGE_DELETE: FunctionDefinition;
    static __static_initializer_32(): void;
    static FD_STORAGE_INSERT: FunctionDefinition;
    static __static_initializer_33(): void;
    static FD_STORAGE_VIEWS: FunctionDefinition;
    static __static_initializer_34(): void;
    static FD_STORAGE_TABLES: FunctionDefinition;
    static __static_initializer_35(): void;
    static FD_STORAGE_COLUMNS: FunctionDefinition;
    static __static_initializer_36(): void;
    static FD_STORAGE_RELATIONS: FunctionDefinition;
    static __static_initializer_37(): void;
    static FD_STORAGE_FILTER: FunctionDefinition;
    static __static_initializer_38(): void;
    static FD_STORAGE_SORTING: FunctionDefinition;
    static __static_initializer_39(): void;
    static FD_STORAGE_CONSTRUCT: FunctionDefinition;
    static __static_initializer_40(): void;
    static FD_STORAGE_OPERATIONS: FunctionDefinition;
    static __static_initializer_41(): void;
    static FD_STORAGE_CONSTRUCT_RELATION: FunctionDefinition;
    static __static_initializer_42(): void;
    static FD_STORAGE_DELETE_RELATION: FunctionDefinition;
    static __static_initializer_43(): void;
    static FD_STORAGE_LINK_INSTANCES: FunctionDefinition;
    static __static_initializer_44(): void;
    static FD_STORAGE_UNLINK_INSTANCES: FunctionDefinition;
    static __static_initializer_45(): void;
    static FD_STORAGE_LINKED_INSTANCES_FILTER: FunctionDefinition;
    static __static_initializer_46(): void;
    static FD_STORAGE_GET_FORMAT: FunctionDefinition;
    static __static_initializer_47(): void;
    private static readonly STORAGE_SESSION_ID_GENERATOR;
    static generateViewSessionId(): number;
    static readonly E_CLASS_INSTANCE_CREATED: string;
    static readonly E_CLASS_INSTANCE_CHANGED: string;
    static readonly E_CLASS_INSTANCE_DELETED: string;
    static readonly E_CLASS_INSTANCE_COMMENTED: string;
    static readonly FIELD_EVENT_INSTANCE_ID: string;
    static readonly FIELD_EVENT_INSTANCE_DESCRIPTION: string;
    static readonly FIELD_EVENT_INSTANCE: string;
    static readonly FIELD_EVENT_FIELD_NAME: string;
    static readonly FIELD_EVENT_FIELD_DESCRIPTION: string;
    static readonly FIELD_EVENT_OLD_VALUE: string;
    static readonly FIELD_EVENT_NEW_VALUE: string;
    static readonly FIELD_EVENT_MODIFICATION_AUTHOR: string;
    static readonly FIELD_EVENT_AUTHOR: string;
    static readonly FIELD_EVENT_COMMENT: string;
    static readonly KEY_EVENT_INSTANCE_ID: string;
    static readonly KEY_EVENT_CLASS_NAME: string;
    static readonly EFT_CLASS_INSTANCE_CREATED: TableFormat;
    static __static_initializer_48(): void;
    static readonly EFT_CLASS_INSTANCE_DELETED: TableFormat;
    static __static_initializer_49(): void;
    static readonly EFT_CLASS_INSTANCE_CHANGED: TableFormat;
    static __static_initializer_50(): void;
    static readonly EFT_CLASS_INSTANCE_COMMENT: TableFormat;
    static __static_initializer_51(): void;
    static makeExpression(field: string): string;
    static getPrimaryKeyName(storageContext: Context<Context<any, any>, ContextManager<any>>, caller: CallerController, storageTable: string): Promise<string | null>;
    private static _init;
    static initialize(): void;
}