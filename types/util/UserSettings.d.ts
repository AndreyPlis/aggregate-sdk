import JObject from './java/JObject';
import EntityRelatedActionDescriptor from '../action/EntityRelatedActionDescriptor';
import ContextManager from '../context/ContextManager';
import CallerController from '../context/CallerController';
export default class UserSettings extends JObject {
    private datePattern;
    private timePattern;
    private timeZone;
    private weekStartDay;
    private variableActions;
    private eventActions;
    constructor(cm?: ContextManager<any> | null, callerController?: CallerController | null);
    getDatePattern(): string;
    setDatePattern(datePattern: string): void;
    getTimePattern(): string;
    setTimePattern(timePattern: string): void;
    getDateTimePattern(): string;
    getTimeZone(): string | null;
    setTimeZone(timeZone: string): void;
    getWeekStartDay(): number;
    setWeekStartDay(weekStartDay: number): void;
    getVariableActions(): Array<EntityRelatedActionDescriptor> | null;
    setVariableActions(variableActions: Array<EntityRelatedActionDescriptor>): void;
    getEventActions(): Array<EntityRelatedActionDescriptor> | null;
    setEventActions(eventActions: Array<EntityRelatedActionDescriptor>): void;
    clone(): UserSettings;
    fill(cm: ContextManager<any>, callerController: CallerController | null): void;
    fillBasicProperties(cm: ContextManager<any>, callerController: CallerController | null): void;
    fillActions(cm: ContextManager<any>, callerController: CallerController | null): void;
}
