import AbstractTableValidator from './AbstractTableValidator';
import DataTable from '../DataTable';
import Expression from '../../expression/Expression';
import TableFormat from '../TableFormat';

export default class TableExpressionValidator extends AbstractTableValidator {
  private readonly expression: Expression;

  constructor(expression: string) {
    super();
    this.expression = new Expression(expression);
  }

  public static valueOf(encodedBase64: string): TableExpressionValidator {
    return new TableExpressionValidator(atob(encodedBase64));
  }

  public encode(): string {
    return btoa(this.expression.getText());
  }

  public getType(): string {
    return TableFormat.TABLE_VALIDATOR_EXPRESSION;
  }

  public validate(table: DataTable): void {
    //TODO FIXME:
    /* const Evaluator = require('../../expression/Expression').default;
    const evaluator = new Evaluator(null, null, table);

    try {
      const result: JObject = evaluator.evaluate(this.expression);
      if (result != null) {
        throw new Error(result.toString());
      }
    } catch (ex) {
      Log.DATATABLE.warn("Error evaluating data table validator's expression '" + this.expression + "': " + ex.message, ex);
    }*/
  }
}
