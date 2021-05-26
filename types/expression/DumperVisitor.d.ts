import { ParserRuleContext } from 'antlr4';
import ExpressionVisitorFacade from './ExpressionVisitorFacade';
import AttributedObject from './AttributedObject';
export default class DumperVisitor extends ExpressionVisitorFacade {
    private indent;
    private result;
    private indentString;
    getResult(): string;
    private dumpNode;
    visitCompilationUnit(ctx: ParserRuleContext): AttributedObject;
    visitLogicalAndNode(ctx: ParserRuleContext): AttributedObject;
    visitBitwiseOrNode(ctx: ParserRuleContext): AttributedObject;
    visitBitwiseXorNode(ctx: ParserRuleContext): AttributedObject;
    visitNENode(ctx: ParserRuleContext): AttributedObject;
    visitConditionalNode(ctx: ParserRuleContext): AttributedObject;
    visitModNode(ctx: ParserRuleContext): AttributedObject;
    visitLogicalNotNode(ctx: ParserRuleContext): AttributedObject;
    visitEQNode(ctx: ParserRuleContext): AttributedObject;
    visitBitwiseAndNode(ctx: ParserRuleContext): AttributedObject;
    visitGENode(ctx: ParserRuleContext): AttributedObject;
    visitUnsignedRightShiftNode(ctx: ParserRuleContext): AttributedObject;
    visitAddNode(ctx: ParserRuleContext): AttributedObject;
    visitLTNode(ctx: ParserRuleContext): AttributedObject;
    visitBitwiseNotNode(ctx: ParserRuleContext): AttributedObject;
    visitSubtractNode(ctx: ParserRuleContext): AttributedObject;
    visitGTNode(ctx: ParserRuleContext): AttributedObject;
    visitValueReferenceNode(ctx: ParserRuleContext): AttributedObject;
    visitRegexMatchNode(ctx: ParserRuleContext): AttributedObject;
    visitLiteralExpression(ctx: ParserRuleContext): AttributedObject;
    visitFunctionNode(ctx: ParserRuleContext): AttributedObject;
    visitRightShiftNode(ctx: ParserRuleContext): AttributedObject;
    visitDivNode(ctx: ParserRuleContext): AttributedObject;
    visitLeftShiftNode(ctx: ParserRuleContext): AttributedObject;
    visitExpressionNode(ctx: ParserRuleContext): AttributedObject;
    visitLENode(ctx: ParserRuleContext): AttributedObject;
    visitLogicalOrNode(ctx: ParserRuleContext): AttributedObject;
    visitMulNode(ctx: ParserRuleContext): AttributedObject;
    visitUnaryNode(ctx: ParserRuleContext): AttributedObject;
    visitFunctionExpression(ctx: ParserRuleContext): AttributedObject;
    visitValueReference(ctx: ParserRuleContext): AttributedObject;
    visitLongConstNode(ctx: ParserRuleContext): AttributedObject;
    visitFloatConstNode(ctx: ParserRuleContext): AttributedObject;
    visitStringConstNode(ctx: ParserRuleContext): AttributedObject;
    visitTrueNode(ctx: ParserRuleContext): AttributedObject;
    visitFalseNode(ctx: ParserRuleContext): AttributedObject;
    visitNullNode(ctx: ParserRuleContext): AttributedObject;
}
