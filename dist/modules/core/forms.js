"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Field in a form (abstract)
 */
class Field {
    /**
     * Create a new field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param type - type of the field
     */
    constructor(name, label, type = 'text') {
        this.name = name;
        this.label = label;
        this.type = type;
    }
}
exports.Field = Field;
/**
 * Corresponds to a text field in a form
 */
class TextField extends Field {
    /**
     * Create a new text field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param defaultVal - default value of the field
     */
    constructor(name, label, defaultVal = '') {
        super(name, label, 'text');
        this.default = defaultVal;
    }
}
TextField.TYPE = 'text';
exports.TextField = TextField;
/**
 * A dropdown select field
 */
class SelectField extends Field {
    /**
     * Create a new select dropdown field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param options - options to show in dropdown
     * @param defaultVal - default selected option name
     */
    constructor(name, label, options = [], multi = false, defaultVal) {
        super(name, label, 'select');
        this.options = options;
        this.default = defaultVal;
    }
}
SelectField.TYPE = 'selected';
exports.SelectField = SelectField;
/**
 * A checkbox field
 */
class CheckboxField extends Field {
    /**
     * Create a new checkbox field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param defaultVal - default value of the field
     */
    constructor(name, label, defaultVal = false) {
        super(name, label, 'checkbox');
        this.default = defaultVal;
    }
}
CheckboxField.TYPE = 'checkbox';
exports.CheckboxField = CheckboxField;
/**
 * Form
 */
class Form {
}
exports.Form = Form;
//# sourceMappingURL=forms.js.map