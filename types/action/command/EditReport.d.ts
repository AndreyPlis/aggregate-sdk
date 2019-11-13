import GenericActionCommand from '../GenericActionCommand';
import TableFormat from '../../datatable/TableFormat';
import DataTable from '../../datatable/DataTable';
export default class EditReport extends GenericActionCommand {
    static readonly CF_TEMPLATE: string;
    static readonly CF_DATA: string;
    static readonly CF_SUBREPORTS: string;
    static readonly CF_RESOURCES: string;
    static readonly RF_TEMPLATE: string;
    static readonly RF_RESULT: string;
    static readonly CFT_EDIT_REPORT: TableFormat;
    static __static_initializer_0(): void;
    static readonly RFT_EDIT_REPORT: TableFormat;
    static __static_initializer_1(): void;
    static CF_SUBREPORTS_NAME: string;
    static CF_SUBREPORTS_TEMPLATE: string;
    static CF_SUBREPORTS_DATA: string;
    static CFT_SUBREPORTS: TableFormat;
    static __static_initializer_2(): void;
    static CF_RESOURCES_DATA: string;
    static CFT_RESOURCES: TableFormat;
    static __static_initializer_3(): void;
    private static _init;
    static initialize(): void;
    private template;
    private data;
    private subreports;
    private resources;
    constructor();
    static createEditReportWithDataTable(title: string, parameters: DataTable): EditReport;
    static createDefault(): EditReport;
    static createEditReport(title: string, template: string, data: DataTable, subreports: DataTable, resources: DataTable): EditReport;
    constructParameters(): DataTable;
    getTemplate(): string | null;
    setTemplate(template: string): void;
    getData(): DataTable | null;
    setData(data: DataTable): void;
    setSubReports(subreports: DataTable): void;
    setResources(resources: DataTable): void;
}