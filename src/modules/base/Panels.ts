import Vue, { VueConstructor } from 'vue'

export interface PanelOptions {
    showTitle: boolean
}

export abstract class Panel {

    public readonly title: string;
    public readonly icon: string;
    public readonly component: VueConstructor<Vue>;
    public readonly options: PanelOptions = {
        showTitle: true
    }

    abstract get key(): string;

}

export interface PanelInfo {
    name: string
    key: string
    title: string
    icon: string
    options: PanelOptions
}