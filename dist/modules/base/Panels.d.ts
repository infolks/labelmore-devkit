/**
 * The panel options interface
 */
export interface PanelOptions {
    showTitle: boolean;
}
/**
 * An abstract class forming a base for creating panel plugins.
 * Panels are used to add interface to the workspace
 */
export declare abstract class Panel {
    readonly title: string;
    readonly icon: string;
    readonly component: string;
    readonly options: PanelOptions;
}
/**
 * Short info about the panel
 */
export interface PanelInfo {
    name: string;
    component: string;
    title: string;
    icon: string;
    options: PanelOptions;
}
