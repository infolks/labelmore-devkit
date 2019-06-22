"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_WIZARD_OPTIONS = {
    allowOutputSelection: true,
    allowToolSelection: true,
    allowPanelSelection: true,
    allowLabelClassCreation: true,
    allowKeypointCreation: true,
    allowClassAttributeCreation: false,
    allowSceneAttributeCreation: false
};
/**
 * Base class for wizards
 */
class Wizard {
    constructor() {
        this.type = 'creator';
        this.options = Object.assign({}, exports.DEFAULT_WIZARD_OPTIONS);
        this.options = Object.assign({}, exports.DEFAULT_WIZARD_OPTIONS, this.options);
    }
    /**
     * Any custom fields required
     */
    fields() {
        return [];
    }
}
exports.Wizard = Wizard;
//# sourceMappingURL=Wizard.js.map