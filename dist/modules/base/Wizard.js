"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_WIZARD_OPTIONS = {
    allowOutputSelection: true,
    allowToolSelection: true,
    allowLabelClassCreation: true,
    allowKeypointCreation: true,
    allowPanelSelection: true
};
/**
 * Base class for wizards
 */
class Wizard {
    constructor() {
        this.type = 'creator';
        this.options = Object.assign({}, exports.DEFAULT_WIZARD_OPTIONS);
        this.allowExtensions = false;
        this.options = Object.assign({}, exports.DEFAULT_WIZARD_OPTIONS, this.options);
    }
}
exports.Wizard = Wizard;
//# sourceMappingURL=Wizard.js.map