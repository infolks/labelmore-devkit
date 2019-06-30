import { Encoder } from "../base/Encoder";
import { LabelType } from "../base/LabelType";
import { Panel } from "../base/Panels";
import { Source } from "../base/Source";
import { AnnotationTool } from "../base/AnnotationTool";
import { Wizard } from "../base/Wizard";
export interface PluginOptions<T> {
    name: string;
    provides: new (...args: any[]) => T;
    uses: any[];
    component?: any;
}
export interface PackagePluginOptions {
    plugins: Plugin[];
    preInstall(vue: any): void;
    postInstall(vue: any): void;
}
export declare abstract class Plugin {
    install: (vue: any, options: any) => void;
    /**
     * Register encoder plugin
     * @param options options of the plugin
     */
    static Encoder<T extends Encoder>(options: PluginOptions<T>): Plugin;
    /**
     * Register label plugin
     * @param options options of the plugin
     */
    static Label<P>(options: PluginOptions<LabelType<P>>): Plugin;
    /**
     * Register panel plugin
     * @param options options of the plugin
     */
    static Panel<T extends Panel>(options: PluginOptions<T>): Plugin;
    /**
     * Register source plugin
     * @param options options of the plugin
     */
    static Source<T extends Source>(options: PluginOptions<T>): Plugin;
    /**
     * Register tool plugin
     * @param options options of the plugin
     */
    static Tool<T extends AnnotationTool>(options: PluginOptions<T>): Plugin;
    /**
     * Register wizard plugin
     * @param options options of the plugin
     */
    static Wizard<T extends Wizard>(options: PluginOptions<T>): Plugin;
    /**
     * Register plugin package
     * @param plugins array of plugins to package
     */
    static Package(plugins: Plugin[]): Plugin;
}
