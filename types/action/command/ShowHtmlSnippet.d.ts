import GenericActionCommand from '../GenericActionCommand';
import TableFormat from '../../datatable/TableFormat';
import WindowLocation from '../../util/WindowLocation';
import DashboardProperties from '../../util/DashboardProperties';
import DashboardsHierarchyInfo from '../../util/DashboardsHierarchyInfo';
import DataTable from '../../datatable/DataTable';
export default class ShowHtmlSnippet extends GenericActionCommand {
    static readonly EXPRESSION_PATTERN: RegExp;
    static readonly TYPE_FRAME: number;
    static readonly TYPE_EXPRESSION: number;
    static readonly TYPE_HTML: number;
    static readonly CF_LOCATION: string;
    static readonly CF_DASHBOARD: string;
    static readonly CF_KEY: string;
    static readonly CF_TYPE: string;
    static readonly CF_URL: string;
    static readonly CF_EXPRESSION: string;
    static readonly CF_HTML: string;
    static readonly CF_CHECK_HTML_VALIDITY: string;
    static readonly CF_DASHBOARDS_HIERARCHY_INFO: string;
    static readonly CF_RESOURCE_BUNDLE: string;
    static readonly CFT_SHOW_HTML_SNIPPET: TableFormat;
    static __static_initializer_0(): void;
    private static snippetTypes;
    private location;
    private dashboard;
    private key;
    private url;
    private snippetType;
    private html;
    private checkHtmlValidity;
    private expression;
    private dhInfo;
    private resourceBundle;
    getResourceBundle(): string | null;
    setResourceBundle(resourceBundle: string): void;
    private static _init;
    static initialize(): void;
    constructor();
    static createShowHtmlSnippetWithDataTable(title: string, parameters: DataTable): ShowHtmlSnippet;
    protected constructParameters(): DataTable;
    getLocation(): WindowLocation | null;
    setLocation(location: WindowLocation): void;
    getDashboard(): DashboardProperties | null;
    setDashboard(dashboard: DashboardProperties): void;
    getKey(): string | null;
    setKey(key: string): void;
    getUrl(): string | null;
    setUrl(url: string): void;
    getDashboardsHierarchyInfo(): DashboardsHierarchyInfo | null;
    setDashboardsHierarchyInfo(dhInfo: DashboardsHierarchyInfo): void;
    getSnippetType(): number | null;
    setSnippetType(snippetType: number): void;
    getHtml(): string | null;
    setHtml(html: string): void;
    getExpression(): string | null;
    setExpression(expression: string): void;
    getCheckHtmlValidity(): boolean;
    setCheckHtmlValidity(checkHtmlValidity: boolean): void;
}
