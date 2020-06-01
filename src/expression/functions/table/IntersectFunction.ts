import AbstractFunction from '../AbstractFunction';
import Functions from '../Functions';
import Cres from '../../../Cres';
import Evaluator from '../../Evaluator';
import EvaluationEnvironment from '../../EvaluationEnvironment';
import DataTable from '../../../datatable/DataTable';
import DataTableFactory from '../../../datatable/DataTableFactory';
import DataTableReplication from '../../../datatable/DataTableReplication';

export default class IntersectFunction extends AbstractFunction {
  constructor() {
    super(Functions.GROUP_DATA_TABLE_PROCESSING, 'DataTable sourceTable, String fieldInSourceTable,' + ' DataTable sampleTable, String fieldInSampleTable [, Boolean filterType]', 'DataTable', Cres.get().getString('fDescIntersect'));
  }

  execute(evaluator: Evaluator | null = null, environment: EvaluationEnvironment, parameters: Array<any>): any {
    this.checkParameters(4, false, parameters);

    const sourceTable = this.convertToDataTable(0, parameters[0]);
    const fieldInSourceTable = this.convertToString(1, parameters[1]);
    const sampleTable = this.convertToDataTable(2, parameters[2]);
    const fieldInSampleTable = this.convertToString(3, parameters[3]);

    var filterType = false;
    if (parameters.length > 4) {
      filterType = this.convertToBoolean(4, parameters[4]);
    }

    const result: DataTable = DataTableFactory.of(sourceTable.getFormat());
    DataTableReplication.copy(sourceTable, result);

    for (const rec of sourceTable) {
      if ((!filterType && sampleTable.findIndex(fieldInSampleTable, rec.getValue(fieldInSourceTable)) == null) || (filterType && sampleTable.findIndex(fieldInSampleTable, rec.getValue(fieldInSourceTable)) != null)) {
        result.removeRecords(rec);
      }
    }

    return result;
  }
}
