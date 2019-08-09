/**
 * Field Type
 */
export declare type FieldType = 'text' | 'select' | 'checkbox';
/**
 * Option in a select field
 */
export declare type SelectOption = {
    label: string;
    value: any;
};
/**
 * Field in a form (abstract)
 */
export declare abstract class Field {
    label: string;
    name: string;
    type: FieldType;
    /**
     * Create a new field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param type - type of the field
     */
    constructor(name: string, label: string, type?: FieldType);
}
/**
 * Corresponds to a text field in a form
 */
export declare class TextField extends Field {
    static TYPE: string;
    default: string;
    /**
     * Create a new text field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param defaultVal - default value of the field
     */
    constructor(name: string, label: string, defaultVal?: string);
}
/**
 * A dropdown select field
 */
export declare class SelectField extends Field {
    static TYPE: string;
    options: SelectOption[];
    default: SelectOption | SelectOption[];
    multi: boolean;
    /**
     * Create a new select dropdown field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param options - options to show in dropdown
     * @param defaultVal - default selected option name
     */
    constructor(name: string, label: string, options?: SelectOption[], multi?: boolean, defaultVal?: SelectOption | SelectOption[]);
}
/**
 * A checkbox field
 */
export declare class CheckboxField extends Field {
    static TYPE: string;
    default: boolean;
    /**
     * Create a new checkbox field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param defaultVal - default value of the field
     */
    constructor(name: string, label: string, defaultVal?: boolean);
}
/**
 * Form
 */
export declare class Form {
    title: string;
    name: string;
    fields: Field[];
}
