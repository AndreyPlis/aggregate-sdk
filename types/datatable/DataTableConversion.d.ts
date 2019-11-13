import DataTable from './DataTable';
import TableFormat from './TableFormat';
import DataRecord from './DataRecord';
import FieldFormat from './FieldFormat';
import FormatConverter from './converter/FormatConverter';
export default class DataTableConversion {
    private static initDataTableConversion;
    static readonly FORMAT_CONVERTERS: Array<FormatConverter<any>>;
    private static initializeDataTableConversion0;
    static initializeDataTableConversion(): void;
    static registerFormatConverter(converter: FormatConverter<any>): void;
    static beanFromTable(table: DataTable, beanClass: any, format: TableFormat, setReadOnlyFields: boolean): any;
    static beansFromTable(table: DataTable, valueClass: any, format: TableFormat, setReadOnlyFields?: boolean): Array<any>;
    static fillFromTable(table: DataTable, valueClass: any, format: TableFormat, setReadOnlyFields?: boolean): Array<any>;
    static fillFromRecord(rec: DataRecord, beanClass: any, format: TableFormat, setReadOnlyFields: boolean): any;
    static beanFromRecord(rec: DataRecord, beanClass: any, format: TableFormat, setReadOnlyFields: boolean): any;
    static getFormatConverter(valueClass: any, fieldType?: string | null): FormatConverter<Object> | null;
    static populateBeanFromRecord(bean: any, rec: DataRecord, format: TableFormat, setReadOnlyFields: boolean, fieldsToSkip?: Array<string>): void;
    private static createList;
    static beanToTable(bean: any, format: TableFormat, setReadOnlyFields?: boolean, ignoreErrors?: boolean): DataTable;
    static beanToRecord(bean: any, format: TableFormat, setReadOnlyFields: boolean, ignoreErrors: boolean, fieldsToSkip?: Array<string>): DataRecord;
    static beansToTable(beans: Array<any>, format: TableFormat, setReadOnlyFields?: boolean): DataTable;
    static createTableField(name: string, format: TableFormat | null): FieldFormat<any>;
    private static getFormatFromDefaultValue;
    static createAggreGateBean(value: any): DataTable;
    private static convertList;
    private static setValue;
    private static getValue;
}