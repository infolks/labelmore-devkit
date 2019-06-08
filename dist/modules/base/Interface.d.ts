import Vue, { VueConstructor } from "vue";
export declare abstract class Interface {
    readonly name: string;
    readonly title: string;
    readonly icon: string;
    readonly component: VueConstructor<Vue>;
    readonly key: string;
}
export interface InterfaceInfo {
    name: string;
    title: string;
    icon: string;
    key: string;
}
