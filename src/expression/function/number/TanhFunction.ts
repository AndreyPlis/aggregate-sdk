import AbstractFunction from '../AbstractFunction';
import Functions from '../Functions';
import Cres from '../../../Cres';
import Evaluator from '../../Evaluator';
import EvaluationEnvironment from '../../EvaluationEnvironment';

export default class TanhFunction extends AbstractFunction {
  constructor() {
    super(Functions.GROUP_NUMBER_PROCESSING, 'Double value', 'Double', Cres.get().getString('fDescTanh'));
  }

  execute(evaluator: Evaluator, environment: EvaluationEnvironment, parameters: Array<any>): number {
    this.checkParameters(1, false, parameters);
    return Math.tanh(parameters[0]);
  }
}
