import { Encoder } from "../base/Encoder";
import { LabelType } from "../base/LabelType";
import { Panel } from "../base/Panels";
import { Source } from "../base/Source";
import { AnnotationTool } from "../base/AnnotationTool";
import { Wizard } from "../base/Wizard";
import { Interface } from "../base/Interface";

export interface PluginOptions<T>{
    name: string
    provides: new (...args: any[]) => T
    uses: any[]
}

export interface SettingsPluginOptions<T extends Interface> extends PluginOptions<T>{
    default: any
}

export interface PackagePluginOptions {
    plugins: Plugin[]
    preInstall?(vue: any, isSettings?:boolean): void
    postInstall?(vue: any, isSettings?:boolean): void
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

                        if (this.$projects && !this.$projects.hasEncoder(options.name)) {

                            const injects = options.uses.map(use => {
                                if (use === 'vue') return this
                                return this[`\$${use}`]
                            })

                            const enc = new options.provides(...injects)

                            this.$projects.registerEncoder(options.name, enc)
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

                        if (this.$labeller && !this.$labeller.has(options.name)) {

                            const injects = options.uses.map(use => {
                                if (use === 'vue') return this
                                return this[`\$${use}`]
                            })

                            const label = new options.provides(...injects)

                            this.$labeller.register(options.name, label)
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

                        if (this.$workspace && !this.$workspace.hasPanel(options.name)) {
                            
                            const injects = options.uses.map(use => {
                                if (use === 'vue') return this
                                return this[`\$${use}`]
                            })

                            const panel = new options.provides(...injects)

                            this.$workspace.registerPanel(options.name, panel)

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
        
                        if (this.$projects && !this.$projects.hasSource(options.name)) {

                            const injects = options.uses.map(use => {
                                if (use === 'vue') return this
                                return this[`\$${use}`]
                            })

                            const source = new options.provides(...injects, this)
    
                            this.$projects.registerSource(options.name, source)
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

                Vue.mixin({
                    beforeCreate() {
                        if (this.$tools && !this.$tools.hasTool(options.name)) {

                            const injects = options.uses.map(use => {
                                if (use === 'vue') return this
                                return this[`\$${use}`]
                            })
        
                            const tool = new options.provides(...injects)
        
                            this.$tools.register(options.name, tool)
                        }
                    }
                })
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

                        if (this.$projects && !this.$projects.hasWizard(options.name)) {

                            const injects = options.uses.map(use => {
                                if (use === 'vue') return this
                                return this[`\$${use}`]
                            })

                            const wizard = new options.provides(...injects)

                            this.$projects.registerWizard(options.name, wizard)
                        }
                    }
                })
            }
        }
    }

    /**
     * Register settings for your plugin
     * @param options options of the plugin
     */
    static Settings<T extends Interface>(options: SettingsPluginOptions<T>) {

        return {
            install(vue: any, optns: any) {
        
                vue.mixin({
                    beforeCreate() {
        
                        if (this.$settings) {
        
                            // register settings
                            if(!this.$settings.hasSettings(options.name)) this.$settings.registerSettings(options.name, options.default)
        
                            // register interface
                            if (!this.$settings.hasInterface(options.name)) {

                                const injects = options.uses.map(use => {
                                    if (use === 'vue') return this
                                    return this[`\$${use}`]
                                })
        
                                const essInterface = new options.provides(...injects)

                                this.$settings.registerInterface(options.name, essInterface)

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
    static Package(options: PackagePluginOptions): Plugin {
        return {
            install(Vue: any, opts: any) {

                if (options.preInstall) options.preInstall(Vue)

                for (let plugin of options.plugins) {

                    Vue.use(plugin)
                }

                if (options.postInstall) options.preInstall(Vue)
            }
        }
    }
}

