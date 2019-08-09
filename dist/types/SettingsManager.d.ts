import { Interface, InterfaceInfo } from "../modules/base/Interface";
import { GeneralSettings } from "../modules/extras/settings";
/**
 * The blueprint of the app's settings manager. Injectible name **settings**.
 */
export interface SettingsManager {
    /**
     * The general settings
     */
    general: GeneralSettings;
    /**
     * entire settings
     */
    all: any;
    /**
     * register settings
     * @param name name to be used to register
     * @param defaults default settings to be used
     */
    registerSettings<T>(name: string, defaults: T): void;
    /**
     * Register a settings interface
     * @param name name to be used to register
     * @param interface interface item
     */
    registerInterface(name: string, interf: Interface): void;
    /**
     * Get a corresponding settings
     * @param name name of the settings
     */
    getSettings(name: string): any;
    /**
     * Get an interface from name
     * @param name name used to register
     */
    getInterface(name: string): Interface;
    getInterface(name: string, infoOnly: boolean): Interface | InterfaceInfo;
    /**
     * Whether a settings with the name is registered or not
     * @param name name of the settings
     */
    hasSettings(name: string): boolean;
    /**
     * Whether an interface with the name is registered or not
     * @param name name of the interface
     */
    hasInterface(name: string): boolean;
    /**
     * get the list of interfaces
     */
    interfaceList(): InterfaceInfo[];
    /**
     * load settings from disk
     * @param window window used
     */
    loadSettings(window?: 'main' | 'settings'): Promise<void>;
    /**
     * Apply a settings
     * @param name name of the settings
     * @param settings
     */
    apply(name: string, settings: any): void;
    /**
     * Save settings
     */
    save(): void;
}
