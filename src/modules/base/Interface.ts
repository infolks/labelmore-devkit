import Vue, { VueConstructor } from "vue";

export abstract class Interface {

    public readonly name: string;
    public readonly title: string;
    public readonly icon: string;

    public readonly component: string;

}

export interface InterfaceInfo {
    name: string
    title: string
    icon: string
    component: string
}