export interface PanelOptions {
    showTitle: boolean;
}
export declare abstract class Panel {
    readonly title: string;
    readonly icon: string;
    readonly component: string;
    readonly options: PanelOptions;
}
export interface PanelInfo {
    name: string;
    component: string;
    title: string;
    icon: string;
    options: PanelOptions;
}
