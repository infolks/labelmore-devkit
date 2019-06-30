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
                        if (this.$projects && !this.$projects.hasEncoder(options.name)) {
                            const injects = options.uses.map(use => {
                                if (use === 'vue')
                                    return this;
                                return this[`\$${use}`];
                            });
                            const enc = new options.provides(...injects);
                            this.$projects.registerEncoder(options.name, enc);
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
                        if (this.$labeller && !this.$labeller.has(options.name)) {
                            const injects = options.uses.map(use => {
                                if (use === 'vue')
                                    return this;
                                return this[`\$${use}`];
                            });
                            const label = new options.provides(...injects);
                            this.$labeller.register(options.name, label);
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
                        if (this.$workspace && !this.$workspace.hasPanel(options.name)) {
                            const injects = options.uses.map(use => {
                                if (use === 'vue')
                                    return this;
                                return this[`\$${use}`];
                            });
                            const panel = new options.provides(...injects);
                            this.$workspace.registerPanel(options.name, panel);
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
                        if (this.$projects && !this.$projects.hasSource(options.name)) {
                            const injects = options.uses.map(use => {
                                if (use === 'vue')
                                    return this;
                                return this[`\$${use}`];
                            });
                            const source = new options.provides(...injects, this);
                            this.$projects.registerSource(options.name, source);
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
                if (this.$tools && !this.$tools.hasTool(options.name)) {
                    const injects = options.uses.map(use => {
                        if (use === 'vue')
                            return this;
                        return this[`\$${use}`];
                    });
                    const tool = new options.provides(...injects);
                    this.$tools.register(options.name, tool);
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
                        if (this.$projects && !this.$projects.hasWizard(options.name)) {
                            const injects = options.uses.map(use => {
                                if (use === 'vue')
                                    return this;
                                return this[`\$${use}`];
                            });
                            const wizard = new options.provides(...injects);
                            this.$projects.registerWizard(options.name, wizard);
                        }
                    }
                });
            }
        };
    }
    /**
     * Register settings for your plugin
     * @param options options of the plugin
     */
    static Settings(options) {
        return {
            install(vue, optns) {
                vue.mixin({
                    beforeCreate() {
                        if (this.$settings) {
                            // register settings
                            if (!this.$settings.hasSettings(options.name))
                                this.$settings.registerSettings(options.name, options.default);
                            // register interface
                            if (!this.$settings.hasInterface(options.name)) {
                                const injects = options.uses.map(use => {
                                    if (use === 'vue')
                                        return this;
                                    return this[`\$${use}`];
                                });
                                const essInterface = new options.provides(...injects);
                                this.$settings.registerInterface(options.name, essInterface);
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
                if (options.preInstall)
                    options.preInstall(Vue);
                for (let plugin of plugins) {
                    Vue.use(plugin);
                }
                if (options.postInstall)
                    options.preInstall(Vue);
            }
        };
    }
}
exports.Plugin = Plugin;
//# sourceMappingURL=plugins.js.map