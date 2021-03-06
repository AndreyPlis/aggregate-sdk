export default class UtilitiesContextConstants {
    static readonly SUMMARY_SORT_PRIORITY_PERIODS: number;
    static readonly SUMMARY_SORT_PRIORITY_CONTEXTS: number;
    static readonly SUMMARY_SHOW_DETAILS_NEVER: number;
    static readonly SUMMARY_SHOW_DETAILS_ALWAYS: number;
    static readonly SUMMARY_SHOW_DETAILS_VALUABLE: number;
    static readonly THREAD_INFO_MAX_DEPTH: number;
    static readonly V_GENERATE_THREAD_DUMP_RESULT: string;
    static readonly V_GENERATE_HEAP_DUMP_RESULT_PATH: string;
    static readonly V_THREAD_DUMP_PREFIX: string;
    static readonly F_EXECUTE_BINDINGS = "executeBindings";
    static readonly FIF_EXECUTE_BINDINGS_DATATABLE = "datatable";
    static readonly FIF_FILE_FROM_TABLE_FOR_DOWNLOADING_DATATABLE = "datatable";
    static readonly FIF_FILE_FROM_TABLE_FOR_DOWNLOADING_FILE_NAME = "fileName";
    static readonly FIF_FILE_FROM_TABLE_FOR_DOWNLOADING_FILE_FORMAT = "fileFormat";
    static readonly V_HEAP_DUMP_PREFIX: string;
    static readonly V_HEAP_DUMP_EXTENSION: string;
    static readonly V_HEAP_DUMP_DIR: string;
    static readonly V_AGG_DUMP_EXTENSION_TXT: string;
    static readonly V_GENERATE_THREAD_DUMP_DAEMON: string;
    static readonly V_GENERATE_THREAD_DUMP_PRIORITY: string;
    static readonly V_GENERATE_THREAD_DUMP_THREAD_ID: string;
    static readonly V_GENERATE_THREAD_DUMP_THREAD_STATE: string;
    static readonly V_GENERATE_THREAD_DUMP_THREAD_BLOCKED_ON: string;
    static readonly V_GENERATE_THREAD_DUMP_THREAD_WAITING_ON: string;
    static readonly V_GENERATE_THREAD_DUMP_THREAD_HEX_PREFIX: string;
    static readonly V_GENERATE_THREAD_DUMP_LOCKED_MONITOR: string;
    static readonly V_GET_MODEL_POOLS_CONTEXT_NAME: string;
    static readonly V_GET_MODEL_POOLS_PROPERTY_ENABLED: string;
    static readonly F_DEBUG: string;
    static readonly F_VARIABLE_ACTIONS: string;
    static readonly F_EVENT_ACTIONS: string;
    static readonly F_INIT_ACTIONS: string;
    static readonly F_GET_DATA: string;
    static readonly F_CHART_DATA: string;
    static readonly F_ACTIONS_BY_MASK: string;
    static readonly F_EVENTS_BY_MASK: string;
    static readonly F_VARIABLES_BY_MASK: string;
    static readonly F_FUNCTIONS_BY_MASK: string;
    static readonly F_ENTITIES_BY_MASK: string;
    static readonly F_EVENT_FIELDS: string;
    static readonly F_VARIABLE_FIELDS: string;
    static readonly F_VARIABLE_HISTORY: string;
    static readonly F_STATISTICS: string;
    static readonly F_RAW_STATISTICS: string;
    static readonly F_TOPOLOGY: string;
    static readonly F_DELETE_STATISTICS: string;
    static readonly F_FILL_STATISTICS_FROM_HISTORY: string;
    static readonly F_ACTION_EXECUTION_PARAMETERS: string;
    static readonly F_FUNCTION_EXECUTION_PARAMETERS: string;
    static readonly F_ACTION_EXECUTION_PARAMETERS_REFERENCE: string;
    static readonly F_FUNCTION_ACTION_EXECUTION_PARAMETERS: string;
    static readonly F_USERS: string;
    static readonly F_VARIABLE_INFO: string;
    static readonly F_EVENT_INFO: string;
    static readonly F_EXECUTE: string;
    static readonly F_LIST_VARIABLES: string;
    static readonly F_SELECTION_VALUES: string;
    static readonly F_SUMMARY: string;
    static readonly F_FIRE_BACKDATED_EVENT: string;
    static readonly F_EDITORS: string;
    static readonly F_EDITOR_OPTIONS: string;
    static readonly F_FILE_FROM_TABLE_FOR_DOWNLOADING: string;
    static readonly F_EXPRESSION: string;
    static readonly F_GENERATE_THREAD_DUMP: string;
    static readonly F_GENERATE_HEAP_DUMP: string;
    static readonly F_GET_MODEL_POOLS: string;
    static readonly A_VARIABLE_HISTORY: string;
    static readonly A_VARIABLE_INFO: string;
    static readonly A_EVENT_INFO: string;
    static readonly A_SHOW_DATA: string;
    static readonly A_SHOW_REPORT: string;
    static readonly FIF_INIT_ACTIONS_CONTEXT: string;
    static readonly FIF_INIT_ACTIONS_ACTION_NAME: string;
    static readonly FIF_INIT_ACTIONS_PARAMETERS: string;
    static readonly FIF_GET_DATA_ID: string;
    static readonly FIF_TOPOLOGY_PROVIDER: string;
    static readonly FIF_TOPOLOGY_CONTEXT_MODE: string;
    static readonly FIF_TOPOLOGY_NODE_MASK: string;
    static readonly FIF_TOPOLOGY_TOPOLOGY_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_NODE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LINK_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LINK_ID_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_NODE_ID_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_SOURCE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_TARGET_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_COLOR_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_SELECTION_COLOR_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_TYPE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_INTERFACE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_DIRECTED_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_WIDTH_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LINK_DESCRIPTION_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LINK_COLOR_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LATITUDE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LONGITUDE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_LABELS: string;
    static readonly FIF_TOPOLOGY_IMAGE_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_TOOLTIP_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_AZIMUTH_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_RATIO_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_PREFERRED_ACTION_NAME_EXPRESSION: string;
    static readonly FIF_TOPOLOGY_SHOW_NEIGHBOURING_NODES: string;
    static readonly FIF_DEFAUTLT_CONTEXT: string;
    static readonly FIF_VARIABLES_BY_MASK_MASK: string;
    static readonly FIF_VARIABLES_BY_MASK_GROUP: string;
    static readonly FIF_EXECUTE_COMMAND: string;
    static readonly FIF_EXECUTE_DIRECTORY: string;
    static readonly FIF_EXECUTE_CHARSET: string;
    static readonly FIF_EVENTS_BY_MASK_MASK: string;
    static readonly FIF_EVENTS_BY_MASK_ALLOW_ALL: string;
    static readonly FIF_ACTIONS_BY_MASK_MASK: string;
    static readonly FIF_ACTIONS_BY_MASK_INCLUDE_NON_HEADLESS: string;
    static readonly FIF_FUNCTIONS_BY_MASK_MASK: string;
    static readonly FIF_ENTITIES_BY_MASK_MASK: string;
    static readonly FIF_ENTITIES_BY_MASK_TYPE: string;
    static readonly FIF_ACTION_EXECUTION_PARAMETERS_MASK: string;
    static readonly FIF_ACTION_EXECUTION_PARAMETERS_ACTION: string;
    static readonly FIF_ACTION_EXECUTION_PARAMETERS_ORIGINAL: string;
    static readonly FIF_ACTION_EXECUTION_PARAMETERS_INTERACTIVE: string;
    static readonly FIF_FUNCTION_EXECUTION_PARAMETERS_MASK: string;
    static readonly FIF_FUNCTION_EXECUTION_PARAMETERS_FUNCTION: string;
    static readonly FIF_FUNCTION_EXECUTION_PARAMETERS_ORIGINAL: string;
    static readonly FIF_EVENT_FIELDS_MASK: string;
    static readonly FIF_EVENT_FIELDS_EVENT: string;
    static readonly FIF_VARIABLE_FIELDS_MASK: string;
    static readonly FIF_VARIABLE_FIELDS_VARIABLE: string;
    static readonly FIF_VARIABLE_HISTORY_CONTEXT: string;
    static readonly FIF_VARIABLE_HISTORY_VARIABLE: string;
    static readonly FIF_VARIABLE_HISTORY_FROM_DATE: string;
    static readonly FIF_VARIABLE_HISTORY_TO_DATE: string;
    static readonly FIF_VARIABLE_HISTORY_DATA_AS_TABLE: string;
    static readonly FIF_VARIABLE_HISTORY_LIMIT: string;
    static readonly FIF_VARIABLE_HISTORY_SORT_ASCENDING: string;
    static readonly FIF_VARIABLE_INFO_CONTEXT: string;
    static readonly FIF_VARIABLE_INFO_VARIABLE: string;
    static readonly FIF_RAW_STATISTICS_CONTEXT: string;
    static readonly FIF_RAW_STATISTICS_NAME: string;
    static readonly FIF_EVENT_INFO_CONTEXT: string;
    static readonly FIF_EVENT_INFO_EVENT: string;
    static readonly FIF_LIST_VARIABLES_GROUP: string;
    static readonly FIF_LIST_VARIABLES_MASK: string;
    static readonly FOF_LIST_VARIABLES_CONTEXT: string;
    static readonly FOF_LIST_VARIABLES_VARIABLE: string;
    static readonly FOF_LIST_VARIABLES_VALUE: string;
    static readonly FIF_SELECTION_VALUES_TABLE_EXPRESSION: string;
    static readonly FIF_SELECTION_VALUES_VALUE_EXPRESSION: string;
    static readonly FIF_SELECTION_VALUES_DESCRIPTION_EXPRESSSION: string;
    static readonly FIF_STATISTICS_MASK: string;
    static readonly FIF_STATISTICS_CHANNEL: string;
    static readonly FIF_STATISTICS_KEY: string;
    static readonly FIF_STATISTICS_PERIOD: string;
    static readonly FIF_STATISTICS_FULL: string;
    static readonly FIF_STATISTICS_AVERAGE: string;
    static readonly FIF_STATISTICS_MINIMUM: string;
    static readonly FIF_STATISTICS_MAXIMUM: string;
    static readonly FIF_STATISTICS_SUM: string;
    static readonly FIF_STATISTICS_FIRST: string;
    static readonly FIF_STATISTICS_LAST: string;
    static readonly FOF_STATISTICS_CONTEXT: string;
    static readonly FOF_STATISTICS_START: string;
    static readonly FOF_STATISTICS_END: string;
    static readonly FOF_STATISTICS_KEY: string;
    static readonly FOF_STATISTICS_AVERAGE: string;
    static readonly FOF_STATISTICS_MINIMUM: string;
    static readonly FOF_STATISTICS_MAXIMUM: string;
    static readonly FOF_STATISTICS_SUM: string;
    static readonly FOF_STATISTICS_FIRST: string;
    static readonly FOF_STATISTICS_LAST: string;
    static readonly FOF_INIT_ACTIONS_ACTION_ID: string;
    static readonly FOF_GET_DATA_DATA: string;
    static readonly FIF_SUMMARY_SERIES_NAME: string;
    static readonly FIF_SUMMARY_SERIES_DESCRIPTION: string;
    static readonly FOF_EXECUTE_BINDINGS_DATATABLE = "datatable";
    static readonly FOF_EXECUTE_BINDINGS_ERRORS = "errors";
    static readonly FOF_FILE_FROM_TABLE_FOR_DOWNLOADING_URL = "url";
    static readonly FOF_EXECUTE_BINDINGS_RECORD_FORMATS = "recordFormats";
    static readonly FIF_SUMMARY_START_DATE: string;
    static readonly FIF_SUMMARY_END_DATE: string;
    static readonly FIF_SUMMARY_MASKS: string;
    static readonly FIF_SUMMARY_ENTITY: string;
    static readonly FIF_SUMMARY_ENTITY_TYPE: string;
    static readonly FIF_SUMMARY_EXPRESSION: string;
    static readonly FIF_SUMMARY_DATE_EXPRESSION: string;
    static readonly FIF_SUMMARY_GROUPING: string;
    static readonly FIF_SUMMARY_AGGREGATION: string;
    static readonly FIF_SUMMARY_CHANGE_TYPE: string;
    static readonly FIF_SUMMARY_OUT_OF_RANGE_VALUES_HANDLING: string;
    static readonly FIF_SUMMARY_MIN_VALUE: string;
    static readonly FIF_SUMMARY_MAX_VALUE: string;
    static readonly FIF_SUMMARY_SHOW_DETAILS: string;
    static readonly FIF_SUMMARY_SHOW_TOTALS: string;
    static readonly FIF_SUMMARY_SORT_PRIORITY: string;
    static readonly FIF_SUMMARY_TIME_ZONE: string;
    static readonly FOF_SUMMARY_PERIOD_NAME: string;
    static readonly FOF_SUMMARY_PERIOD_START: string;
    static readonly FOF_SUMMARY_PERIOD_MIDDLE: string;
    static readonly FOF_SUMMARY_PERIOD_END: string;
    static readonly FOF_SUMMARY_CONTEXT: string;
    static readonly FIF_FIRE_BACKDATED_EVENT_CONTEXT: string;
    static readonly FIF_FIRE_BACKDATED_EVENT_EVENT: string;
    static readonly FIF_FIRE_BACKDATED_EVENT_LEVEL: string;
    static readonly FIF_FIRE_BACKDATED_EVENT_CREATION_TIME: string;
    static readonly FIF_FIRE_BACKDATED_EVENT_DATA: string;
    static readonly FIF_EDITORS_TYPE: string;
    static readonly FIF_EDITOR_OPTIONS_TYPE: string;
    static readonly FIF_EDITOR_OPTIONS_EDITOR: string;
    static readonly FIF_EDITOR_OPTIONS_OPTIONS: string;
    static readonly FOF_TOPOLOGY_LINKS: string;
    static readonly FOF_TOPOLOGY_NODES: string;
    static readonly UNKNOWN: string;
}
