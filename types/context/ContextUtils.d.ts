import Context from './Context';
import ContextManager from './ContextManager';
import CallerController from './CallerController';
export default class ContextUtils {
    static userContextPath(username: string): string;
    static deviceServersContextPath(owner: string): string;
    static dsGroupsContextPath(owner: string): string;
    static deviceGroupsContextPath(owner: string): string;
    static groupContextPath(username: string, containerContextName: string, name: string): string;
    static groupsContextPath(username: string, containerContextName: string): string;
    static groupsContextName(containerContextName: string): string;
    static alertContextPath(owner: string, name: string): string;
    static alertsContextPath(owner: string): string;
    static jobsContextPath(owner: string): string;
    static queriesContextPath(owner: string): string;
    static queryContextPath(owner: string, name: string): string;
    static compliancePoliciesContextPath(owner: string): string;
    static reportsContextPath(owner: string): string;
    static trackersContextPath(owner: string): string;
    static commonDataContextPath(owner: string): string;
    static eventFiltersContextPath(owner: string): string;
    static widgetsContextPath(owner: string): string;
    static machineLearningContextPath(owner: string): string;
    static dashboardsContextPath(owner: string): string;
    static autorunActionsContextPath(owner: string): string;
    static favouritesContextPath(owner: string): string;
    static scriptsContextPath(owner: string): string;
    static modelsContextPath(owner: string): string;
    static eventCorrelatorsContextPath(owner: string): string;
    static eventCorrelatorContextPath(owner: string, name: string): string;
    static classesContextPath(owner: string): string;
    static workflowsContextPath(owner: string): string;
    static pluginGlobalConfigContextPath(pluginId: string): string;
    static pluginUserConfigContextPath(username: string, pluginId: string): string;
    static devicesContextPath(owner: string): string;
    static deviceContextPath(owner: string, device: string): string;
    static applicationsContextPath(owner: string): string;
    static createName(...parts: Array<string>): string;
    static createGroup(...parts: Array<string>): string;
    static pluginIdToContextName(pluginId: string): string;
    static matchesToMask(mask: string, context: string, contextMayExtendMask?: boolean, maskMayExtendContext?: boolean): boolean;
    static isMask(name: string): boolean;
    static expandMaskListToContexts(masks: string, contextManager: ContextManager<any>, caller?: any, useVisibleChildren?: boolean): Array<Context<any, any>>;
    static expandMaskToContexts(mask: string, contextManager: ContextManager<any>, caller?: CallerController | null, useVisibleChildren?: boolean): Array<Context<any, any>>;
    static expandMaskToPaths(mask: string, contextManager: ContextManager<any>, caller: CallerController | null, useVisibleChildren?: boolean): Array<string>;
    static expandMaskPart(head: string, tail: string, contextManager: ContextManager<any>, caller: CallerController | null, useVisibleChildren: boolean): Array<string>;
    static isRelative(name: string): boolean;
    /**
     * Returns base group name. Useful for composite group names that contain several group names delimited with group separator symbol.
     */
    static getBaseGroup(group: string | null): string | null;
    static getVisualGroup(group: string): string | null;
    static getTypeForClassSimpleName(nameString: string): string;
    static isValidContextNameChar(c: string): boolean;
    static getGroupName(entityName: string): string | null;
    static isValidContextName(name: string | null): boolean;
    static isValidContextType(s: string): boolean;
}
