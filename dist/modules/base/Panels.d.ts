import Vue, { VueConstructor } from 'vue';
export interface PanelOptions {
    showTitle: boolean;
}
export declare abstract class Panel {
    readonly title: string;
    readonly icon: string;
    readonly component: VueConstructor<Vue>;
    readonly options: PanelOptions;
    abstract readonly key: string;
}
export interface PanelInfo {
    name: string;
    key: string;
    title: string;
    icon: string;
    options: PanelOptions;
}
