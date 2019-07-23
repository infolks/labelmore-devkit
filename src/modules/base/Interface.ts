import Vue, { VueConstructor } from "vue";

/**
 * An abstract class form a base for creating Interface plugins.
 * Interface are used for installing user interface for settings plugin.
 */
export abstract class Interface {

    public readonly name: string;
    public readonly title: string;
    public readonly icon: string;

    public readonly component: string;

}

/**
 * Short info about the interface
 */
export interface InterfaceInfo {
    name: string
    title: string
    icon: string
    component: string
}