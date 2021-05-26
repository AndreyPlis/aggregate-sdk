import { ParserRuleContext } from 'antlr4';
import AttributedObject from './AttributedObject';
import Evaluator from './Evaluator';
import Function from './function/Function';
import EvaluationEnvironment from './EvaluationEnvironment';
import ExpressionVisitorFacade from './ExpressionVisitorFacade';
export default abstract class AbstractEvaluatingVisitor extends ExpressionVisitorFacade {
    static DEFAULT_FUNCTIONS: Map<string, Function>;
    private static __static_init;
    static _static_init(): void;
    private static registerDefaultFunction;
    protected readonly evaluator: Evaluator;
    protected readonly environment: EvaluationEnvironment;
    static initialize(): void;
    protected constructor(evaluator: Evaluator, environment: EvaluationEnvironment);
    visitCompilationUnit(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLogicalAndNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLogicalOrNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    private applyLogicalAndOperator;
    private applyLogicalOrOperator;
    visitBitwiseOrNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitBitwiseXorNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitNENode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitConditionalNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    private applyCondition;
    visitModNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLogicalNotNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitEQNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitBitwiseAndNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitGENode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitUnsignedRightShiftNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitAddNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLTNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitBitwiseNotNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitSubtractNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitGTNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    abstract visitValueReferenceNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitRegexMatchNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLiteralExpression(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitFunctionNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitRightShiftNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitDivNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLeftShiftNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitExpressionNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLENode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitMulNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitUnaryNode(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitArguments(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitFunctionExpression(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    private executeFunction;
    visitValueReference(ctx: ParserRuleContext): Promise<AttributedObject> | AttributedObject;
    visitLongConstNode(ctx: ParserRuleContext): AttributedObject;
    visitFloatConstNode(ctx: ParserRuleContext): AttributedObject;
    visitStringConstNode(ctx: ParserRuleContext): AttributedObject;
    visitTrueNode(ctx: ParserRuleContext): AttributedObject;
    visitFalseNode(ctx: ParserRuleContext): AttributedObject;
    visitNullNode(ctx: ParserRuleContext): AttributedObject;
    visitTerminal(ctx: ParserRuleContext): AttributedObject;
    private visitBinaryOperators;
    private applyBinary;
    private visitEqualityOperators;
    private promisifyUnaryFunction;
    protected isPromise(value: AttributedObject | Promise<AttributedObject>): value is Promise<AttributedObject>;
    private promisifyBinaryFunction;
}
