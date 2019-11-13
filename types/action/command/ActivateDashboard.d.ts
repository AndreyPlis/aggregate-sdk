import GenericActionCommand from '../GenericActionCommand';
import TableFormat from '../../datatable/TableFormat';
import WindowLocation from '../../util/WindowLocation';
import DashboardProperties from '../../util/DashboardProperties';
import DashboardsHierarchyInfo from '../../util/DashboardsHierarchyInfo';
import DataTable from '../../datatable/DataTable';
export default class ActivateDashboard extends GenericActionCommand {
    static readonly CF_NAME: string;
    static readonly CF_PATH: string;
    static readonly CF_LOCATION: string;
    static readonly CF_DASHBOARD: string;
    static readonly CF_KEY: string;
    static readonly CF_ACTION_PARAMETERS: string;
    static readonly CF_DASHBOARDS_HIERARCHY_INFO: string;
    static readonly CF_DEFAULT_CONTEXT: string;
    static readonly CFT_ACTIVATE_DASHBOARD: TableFormat;
    static __static_initializer_0(): void;
    private static _init;
    static initialize(): void;
    private name;
    private path;
    private location;
    private dashboard;
    private key;
    private actionParameters;
    private dhInfo;
    private defaultContext;
    constructor();
    static createActivateDashboardWithDataTable(title: string, parameters: DataTable): ActivateDashboard;
    protected constructParameters(): DataTable;
    getName(): string | null;
    setName(name: string): void;
    getPath(): string | null;
    setPath(path: string): void;
    getLocation(): WindowLocation | null;
    setLocation(location: WindowLocation): void;
    getDashboard(): DashboardProperties | null;
    setDashboard(dashboard: DashboardProperties): void;
    getKey(): string | null;
    setKey(key: string): void;
    getActionParameters(): DataTable | null;
    setActionParameters(actionParameters: DataTable): void;
    getDashboardsHierarchyInfo(): DashboardsHierarchyInfo | null;
    setDashboardsHierarchyInfo(dhInfo: DashboardsHierarchyInfo): void;
    getDefaultContext(): string | null;
    setDefaultContext(defaultContext: string): void;
}
