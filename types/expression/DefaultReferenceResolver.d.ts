import DataTable from '../datatable/DataTable';
import AbstractReferenceResolver from './AbstractReferenceResolver';
import Reference from './Reference';
import EvaluationEnvironment from './EvaluationEnvironment';
import Context from '../context/Context';
import DefaultRequestController from '../context/DefaultRequestController';
import Evaluator from './Evaluator';
export default class DefaultReferenceResolver extends AbstractReferenceResolver {
    static readonly DESCRIPTION = "description";
    static readonly ROW = "row";
    static readonly NAME = "name";
    static readonly ICON = "icon";
    static readonly TYPE = "type";
    static readonly READABLE = "readable";
    static readonly WRITABLE = "writable";
    static readonly RECORDS = "records";
    static readonly QUALITY = "quality";
    static readonly TIMESTAMP = "timestamp";
    static readonly FORMAT = "format";
    static readonly HELP = "help";
    static readonly OPTIONS = "options";
    static readonly SELECTION_VALUE_DESCRIPTION = "svdesc";
    constructor(defaultTable?: DataTable);
    resolveReference(ref: Reference, environment: EvaluationEnvironment): any;
    private handleTable;
    protected getDefaultTableAggregate(table: DataTable): any;
    protected getRow(ref: Reference, environment: EvaluationEnvironment): number;
    private resolveEntityDescription;
    getContexts(ref: Reference): Array<Context<any, any>>;
    getContext(ref: Reference): Context<any, any> | null;
    resolveEntity(ref: Reference, con: Context<any, any>, environment: EvaluationEnvironment): Promise<DataTable>;
    protected composeRequestController(evaluator: Evaluator | null): DefaultRequestController;
}
