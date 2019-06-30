import { Encoder } from "../base/Encoder";
import { LabelType } from "../base/LabelType";
import { Panel } from "../base/Panels";
import { Source } from "../base/Source";
import { AnnotationTool } from "../base/AnnotationTool";
import { Wizard } from "../base/Wizard";

export interface PluginOptions<T>{
    name: string
    provides: new (...args: any[]) => T
    uses: any[],
    component?: any,
}

export interface PackagePluginOptions {
    plugins: Plugin[]
    preInstall(vue: any): void
    postInstall(vue: any): void
}

export abstract class Plugin {

    install: (vue: any, options: any) => void
    
    /**
     * Register encoder plugin 
     * @param options options of the plugin
     */
    static Encoder<T extends Encoder>(options: PluginOptions<T>): Plugin {

        return {
            install(Vue: any, opts: any) {

                Vue.mixin({
                    beforeCreate() {

                        if (this.$projects) {

                            const injects = options.uses.map(use => this[`\$${use}`])

                            const enc = new options.provides(...injects)

                            if (!this.$projects.hasEncoder(options.name)) {

                                this.$projects.registerEncoder(options.name, enc)
                            }
                        }   

                    }
                })
            }
        }
    }

    /**
     * Register label plugin
     * @param options options of the plugin
     */
    static Label<P>(options: PluginOptions<LabelType<P>>): Plugin {
        
        return {
            install(Vue: any, opts: any) {

                Vue.mixin({
                    beforeCreate() {

                        if (this.$labeller) {

                            const injects = options.uses.map(use => this[`\$${use}`])

                            const label = new options.provides(...injects)

                            if (!this.$labeller.has(options.name)) {
                                this.$labeller.register(options.name, label)
                            }
                        }
                    }
                })
            }
        }
    }

    /**
     * Register panel plugin
     * @param options options of the plugin
     */
    static Panel<T extends Panel>(options: PluginOptions<T>): Plugin {

        return {
            install(Vue: any, opts: any) {

                Vue.mixin({

                    beforeCreate() {

                        if (this.$workspace) {
                            
                            const injects = options.uses.map(use => this[`\$${use}`])

                            const panel = new options.provides(...injects)

                            if (!this.$workspace.hasPanel(options.name)) {

                                this.$workspace.registerPanel(options.name, panel)
                                Vue.component(panel.component, options.component)
                            }
                        }
                    }
                })
            }
        }
    }

    /**
     * Register source plugin
     * @param options options of the plugin
     */
    static Source<T extends Source>(options: PluginOptions<T>): Plugin {
        return {
            install(Vue: any, opts: any) {
                
                Vue.mixin({
                    beforeCreate() {
        
                        if (this.$projects) {

                            const injects = options.uses.map(use => this[`\$${use}`])
        
                            const source = new options.provides(...injects)
        
                            if (!this.$projects.hasSource(options.name)) {
        
                                this.$projects.registerSource(options.name, source)
                            }
                        }
                    }
                })
            }
        }
    }

    /**
     * Register tool plugin
     * @param options options of the plugin
     */
    static Tool<T extends AnnotationTool>(options: PluginOptions<T>): Plugin {

        return {
            install(Vue: any, opts: any) {

                if (this.$tools) {

                    const injects = options.uses.map(use => this[`\$${use}`])

                    const tool = new options.provides(...injects)

                    if (!this.$tools.hasTool(options.name)) {

                        this.$tools.register(options.name, tool)
                    }
                }
            }
        }
    }

    /**
     * Register wizard plugin
     * @param options options of the plugin
     */
    static Wizard<T extends Wizard>(options: PluginOptions<T>): Plugin {

        return {
            install(Vue: any, opts: any) {

                Vue.mixin({

                    beforeCreate() {

                        if (this.$projects) {

                            const injects = options.uses.map(use => this[`\$${use}`])

                            const wizard = new options.provides(...injects)

                            if (!this.$projects.hasWizard(options.name)) {
                                this.$projects.registerWizard(options.name, wizard)
                            }
                        }
                    }
                })
            }
        }
    }

    /**
     * Register plugin package
     * @param plugins array of plugins to package
     */
    static Package(plugins: Plugin[]): Plugin {
        return {
            install(Vue: any, options: any) {

                options.preInstall(Vue)

                for (let plugin of plugins) {

                    Vue.use(plugin)
                }

                options.preInstall(Vue)
            }
        }
    }
}

