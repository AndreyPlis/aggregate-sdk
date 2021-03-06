import LevelAdapter from '../util/logger/LevelAdapter';
export default class EventLevel {
    private static readonly LEVELS;
    private static readonly SELECTION_VALUES;
    static readonly NUM_LEVELS: number;
    static readonly NONE: number;
    static readonly NOTICE: number;
    static readonly INFO: number;
    static readonly WARNING: number;
    static readonly ERROR: number;
    static readonly FATAL: number;
    private static _init;
    static _static_init(): void;
    static isValid(level: number): boolean;
    static getName(level: number): string;
    static getSelectionValues(): Map<number, string>;
    static eventLevelToLogLevel(eventLevel: number): LevelAdapter;
}
