import DataTable from '../datatable/DataTable';
import ActionExecutionMode from './ActionExecutionMode';
import CallerController from '../context/CallerController';
import ActionIdentifier from './ActionIdentifier';
import Context from '../context/Context';
import ServerActionInput from './ServerActionInput';
import ErrorCollector from '../util/ErrorCollector';
export default interface ActionInitializer {
    initAction(context: Context<any, any>, actionName: string, initialParameters: ServerActionInput, inputData: DataTable, environment: Map<string, any> | null, mode: ActionExecutionMode, callerController: CallerController, collector: ErrorCollector | null): Promise<ActionIdentifier>;
}