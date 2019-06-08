import Vue, { VueConstructor } from "vue";

export abstract class Interface {

    public readonly name: string;
    public readonly title: string;
    public readonly icon: string;

    public readonly component: VueConstructor<Vue>;

    get key(): string {

        return 'app-' + this.name.toLowerCase().replace(/[^a-b]+/, '-')
    }
}

export interface InterfaceInfo {
    name: string
    title: string
    icon: string
    key: string
}