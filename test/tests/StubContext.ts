import AbstractContext from '../../src/context/AbstractContext';
import Context from '../../src/context/Context';
import ContextManager from '../../src/context/ContextManager';
import TableFormat from '../../src/datatable/TableFormat';
import VariableDefinition from '../../src/context/VariableDefinition';
import DataTableFactory from '../../src/datatable/DataTableFactory';
import EventDefinition from '../../src/context/EventDefinition';
import FunctionDefinition from '../../src/context/FunctionDefinition';
import ContextUtilsConstants from '../../src/context/ContextUtilsConstants';

export default class StubContext extends AbstractContext<Context<any, any>, ContextManager<any>> {
  public static readonly V_TEST: string = 'test';
  public static readonly E_TEST: string = 'test';
  public static readonly F_TEST: string = 'test';

  public static readonly VF_TEST_INT: string = 'int';

  public static readonly EF_TEST_STR: string = 'str';
  public static readonly EF_TEST_INT: string = 'int';
  public static readonly EF_TEST_FLOAT: string = 'float';

  public static readonly VFT_TEST: TableFormat = new TableFormat(1, 1);

  private static _initStubContext = false;

  static init_0() {
    StubContext.VFT_TEST.addField('<' + StubContext.VF_TEST_INT + '><I>');
  }

  public static readonly EFT_TEST: TableFormat = new TableFormat(1, 1);

  static init_1() {
    StubContext.EFT_TEST.addField('<' + StubContext.EF_TEST_STR + '><S>');
    StubContext.EFT_TEST.addField('<' + StubContext.EF_TEST_INT + '><I>');
    StubContext.EFT_TEST.addField('<' + StubContext.EF_TEST_FLOAT + '><F>');
  }

  static initStubContext() {
    if (StubContext._initStubContext) return;

    StubContext.init_0();
    StubContext.init_1();
    StubContext._initStubContext = true;
  }

  public static readonly FIF_PARAMETER: string = 'parameter';
  public static readonly F_FUNCTION: string = 'function';

  public static readonly FIFT_FUNCTION: TableFormat = new TableFormat(1, 1, '<' + StubContext.FIF_PARAMETER + '><I>');
  public static readonly FOFT_FUNCTION: TableFormat = StubContext.FIFT_FUNCTION.clone();

  private count = 0;

  public getCount(): number {
    return this.count;
  }

  setupMyself(): void {
    super.setupMyself();

    let vd = new VariableDefinition(
      StubContext.V_TEST,
      StubContext.VFT_TEST,
      true,
      true,
      'Test',
      ContextUtilsConstants.GROUP_DEFAULT
    );
    let _this = this;

    vd.setSetter((con, def, caller, request, value) => {
      _this.count = value.rec().getInt(0);
      return true;
    });

    vd.setGetter((con, def, caller, request) => {
      let dt = DataTableFactory.of(StubContext.VFT_TEST, true);
      dt.rec().setValue(StubContext.VF_TEST_INT, _this.count);
      return dt;
    });

    this.addVariableDefinition(vd);

    this.addEventDefinition(
      new EventDefinition(StubContext.E_TEST, StubContext.EFT_TEST, 'Test Event', ContextUtilsConstants.GROUP_DEFAULT)
    );

    let fd = new FunctionDefinition(StubContext.F_FUNCTION, StubContext.FIFT_FUNCTION, StubContext.FOFT_FUNCTION);
    fd.setImplementation((con, def, caller, request, parameters) => {
      _this.count = parameters.rec().getInt(0);
      return DataTableFactory.createWithFirstRecord(
        StubContext.FOFT_FUNCTION,
        parameters.rec().getString(StubContext.FIF_PARAMETER)
      );
    });
    this.addFunctionDefinition(fd);

    let emptyFd = new FunctionDefinition(
      StubContext.F_TEST,
      TableFormat.EMPTY_FORMAT,
      TableFormat.EMPTY_FORMAT,
      'Test Function',
      ContextUtilsConstants.GROUP_DEFAULT
    );
    this.addFunctionDefinition(emptyFd);
  }
}

StubContext.initStubContext();