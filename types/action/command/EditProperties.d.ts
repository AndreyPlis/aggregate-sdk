import GenericActionCommand from '../GenericActionCommand';
import TableFormat from '../../datatable/TableFormat';
import DataTable from '../../datatable/DataTable';
import WindowLocation from '../../util/WindowLocation';
import DashboardProperties from '../../util/DashboardProperties';
import DashboardsHierarchyInfo from '../../util/DashboardsHierarchyInfo';
export default class EditProperties extends GenericActionCommand {
    static initEditProperties: boolean;
    static readonly CF_READ_ONLY: string;
    static readonly CF_DYNAMIC: string;
    static readonly CF_ASYNC: string;
    static readonly CF_USE_DOCKABLE_FRAME: string;
    static readonly CF_SINGLE_WINDOW_MODE: string;
    static readonly CF_CONTEXT: string;
    static readonly CF_SLAVES: string;
    static readonly CF_LOCATION: string;
    static readonly CF_DASHBOARD: string;
    static readonly CF_KEY: string;
    static readonly CF_DASHBOARDS_HIERARCHY_INFO: string;
    static readonly CF_PROPERTIES: string;
    static readonly CF_PROPERTIES_GROUP: string;
    static readonly RF_EDIT_PROPERTIES_RESULT: string;
    static readonly RF_EDIT_PROPERTIES_CHANGED_PROPERTIES: string;
    static readonly FIELD_PROPERTIES_PROPERTY: string;
    static readonly CF_SLAVES_CONTEXT: string;
    static readonly CFT_SLAVES: TableFormat;
    static readonly FT_PROPERTIES: TableFormat;
    static readonly CFT_EDIT_PROPERTIES: TableFormat;
    private static initializeEditProperties0;
    static readonly RFT_EDIT_PROPERTIES: TableFormat;
    private static initializeEditProperties1;
    static initializeEditProperties(): void;
    private context;
    private propertiesGroup;
    private properties;
    private slaves;
    private readOnly;
    private dynamic;
    private useDockableFrame;
    private singleWindowMode;
    private async;
    private location;
    private dashboard;
    private dhInfo;
    private key;
    constructor();
    static createEditPropertiesWithDataTable(title: string, parameters: DataTable): EditProperties;
    static createDefault(): EditProperties;
    static createEditProperties(title: string, contextName: string, propertiesValue: string | Array<string>): EditProperties;
    getContext(): string | null;
    setContext(contextName: string): void;
    getPropertiesGroup(): string | null;
    setPropertiesGroup(propertiesGroup: string): void;
    getProperties(): Array<string> | null;
    setProperties(properties: Array<string>): void;
    getSlaves(): Array<string> | null;
    setSlaves(slaves: Array<string>): void;
    isReadOnly(): boolean;
    setReadOnly(readOnly: boolean): void;
    isDynamic(): boolean;
    setDynamic(dynamic: boolean): void;
    isUseDockableFrame(): boolean;
    setUseDockableFrame(useDockableFrame: boolean): void;
    isSingleWindowMode(): boolean;
    setSingleWindowMode(singleWindowMode: boolean): void;
    isAsync(): boolean;
    setAsync(async: boolean): void;
    getLocation(): WindowLocation | null;
    setLocation(location: WindowLocation): void;
    getDashboard(): DashboardProperties | null;
    setDashboard(dashboard: DashboardProperties): void;
    getKey(): string | null;
    setKey(key: string): void;
    getDashboardsHierarchyInfo(): DashboardsHierarchyInfo | null;
    setDashboardsHierarchyInfo(dhInfo: DashboardsHierarchyInfo): void;
    protected constructParameters(): DataTable;
    private createSlavesTable;
}
