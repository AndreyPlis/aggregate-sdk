import GenericActionCommand from '../GenericActionCommand';
import TableFormat from '../../datatable/TableFormat';
import DashboardsHierarchyInfo from '../../util/DashboardsHierarchyInfo';
import WindowLocation from '../../util/WindowLocation';
import DashboardProperties from '../../util/DashboardProperties';
import ByteBuffer from 'bytebuffer';
import DataTable from '../../datatable/DataTable';
export default class ShowReport extends GenericActionCommand {
    static readonly CF_REPORT_DATA: string;
    static readonly CF_LOCATION: string;
    static readonly CF_DASHBOARD: string;
    static readonly CF_KEY: string;
    static readonly CF_DASHBOARDS_HIERARCHY_INFO: string;
    static readonly CF_REPORT_FORMAT: string;
    static readonly CFT_SHOW_REPORT: TableFormat;
    static __static_initializer_0(): void;
    private reportData;
    private location;
    private dashboard;
    private key;
    private dhInfo;
    private reportFormat;
    private static _init;
    static initialize(): void;
    constructor(titleOrFormat?: string | TableFormat, reportData?: ByteBuffer, location?: WindowLocation, dashboard?: DashboardProperties, reportFormat?: string);
    static createShowReportWithDataTable(title: string, parameters: DataTable): ShowReport;
    protected constructParameters(): DataTable;
    getReportData(): ByteBuffer | null;
    setReportData(reportData: ByteBuffer): void;
    getLocation(): WindowLocation | null;
    setLocation(location: WindowLocation): void;
    getDashboard(): DashboardProperties | null;
    setDashboard(dashboard: DashboardProperties): void;
    getKey(): string | null;
    setKey(key: string): void;
    getDashboardsHierarchyInfo(): DashboardsHierarchyInfo | null;
    setDashboardsHierarchyInfo(dhInfo: DashboardsHierarchyInfo): void;
    getReportFormat(): string | null;
    setReportFormat(reportFormat: string | null): void;
}
