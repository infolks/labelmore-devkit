"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plugin {
    /**
     * Register encoder plugin
     * @param options options of the plugin
     */
    static Encoder(options) {
        return {
            install(Vue, opts) {
                Vue.mixin({
                    beforeCreate() {
                        if (this.$projects) {
                            const injects = options.uses.map(use => this[`\$${use}`]);
                            const enc = new options.provides(...injects);
                            if (!this.$projects.hasEncoder(options.name)) {
                                this.$projects.registerEncoder(options.name, enc);
                            }
                        }
                    }
                });
            }
        };
    }
    /**
     * Register label plugin
     * @param options options of the plugin
     */
    static Label(options) {
        return {
            install(Vue, opts) {
                Vue.mixin({
                    beforeCreate() {
                        if (this.$labeller) {
                            const injects = options.uses.map(use => this[`\$${use}`]);
                            const label = new options.provides(...injects);
                            if (!this.$labeller.has(options.name)) {
                                this.$labeller.register(options.name, label);
                            }
                        }
                    }
                });
            }
        };
    }
    /**
     * Register panel plugin
     * @param options options of the plugin
     */
    static Panel(options) {
        return {
            install(Vue, opts) {
                Vue.mixin({
                    beforeCreate() {
                        if (this.$workspace) {
                            const injects = options.uses.map(use => this[`\$${use}`]);
                            const panel = new options.provides(...injects);
                            if (!this.$workspace.hasPanel(options.name)) {
                                this.$workspace.registerPanel(options.name, panel);
                                Vue.component(panel.component, options.component);
                            }
                        }
                    }
                });
            }
        };
    }
    /**
     * Register source plugin
     * @param options options of the plugin
     */
    static Source(options) {
        return {
            install(Vue, opts) {
                Vue.mixin({
                    beforeCreate() {
                        if (this.$projects) {
                            const injects = options.uses.map(use => this[`\$${use}`]);
                            const source = new options.provides(...injects);
                            if (!this.$projects.hasSource(options.name)) {
                                this.$projects.registerSource(options.name, source);
                            }
                        }
                    }
                });
            }
        };
    }
    /**
     * Register tool plugin
     * @param options options of the plugin
     */
    static Tool(options) {
        return {
            install(Vue, opts) {
                if (this.$tools) {
                    const injects = options.uses.map(use => this[`\$${use}`]);
                    const tool = new options.provides(...injects);
                    if (!this.$tools.hasTool(options.name)) {
                        this.$tools.register(options.name, tool);
                    }
                }
            }
        };
    }
    /**
     * Register wizard plugin
     * @param options options of the plugin
     */
    static Wizard(options) {
        return {
            install(Vue, opts) {
                Vue.mixin({
                    beforeCreate() {
                        if (this.$projects) {
                            const injects = options.uses.map(use => this[`\$${use}`]);
                            const wizard = new options.provides(...injects);
                            if (!this.$projects.hasWizard(options.name)) {
                                this.$projects.registerWizard(options.name, wizard);
                            }
                        }
                    }
                });
            }
        };
    }
    /**
     * Register plugin package
     * @param plugins array of plugins to package
     */
    static Package(plugins) {
        return {
            install(Vue, options) {
                for (let plugin of plugins) {
                    Vue.use(plugin);
                }
            }
        };
    }
}
exports.Plugin = Plugin;
//# sourceMappingURL=plugins.js.map