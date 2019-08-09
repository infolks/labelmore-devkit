/**
 * An abstract class form a base for creating Interface plugins.
 * Interface are used for installing user interface for settings plugin.
 */
export declare abstract class Interface {
    readonly name: string;
    readonly title: string;
    readonly icon: string;
    readonly component: string;
}
/**
 * Short info about the interface
 */
export interface InterfaceInfo {
    name: string;
    title: string;
    icon: string;
    component: string;
}
