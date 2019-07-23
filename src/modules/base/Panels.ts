/**
 * The panel options interface
 */
export interface PanelOptions {
    showTitle: boolean
}

/**
 * An abstract class forming a base for creating panel plugins.
 * Panels are used to add interface to the workspace
 */
export abstract class Panel {

    public readonly title: string;
    public readonly icon: string;
    public readonly component: string;
    public readonly options: PanelOptions = {
        showTitle: true
    }

}

/**
 * Short info about the panel
 */
export interface PanelInfo {
    name: string
    component: string
    title: string
    icon: string
    options: PanelOptions
}