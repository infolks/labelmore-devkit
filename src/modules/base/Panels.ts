export interface PanelOptions {
    showTitle: boolean
}

export abstract class Panel {

    public readonly title: string;
    public readonly icon: string;
    public readonly component: string;
    public readonly options: PanelOptions = {
        showTitle: true
    }

}

export interface PanelInfo {
    name: string
    component: string
    title: string
    icon: string
    options: PanelOptions
}