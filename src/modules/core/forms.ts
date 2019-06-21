export type FieldType = 'text' | 'select' | 'checkbox'

/**
 * Option in a select field
 */
export type SelectOption = {
    label: string
    value: any
}

/**
 * Field in a form (abstract)
 */
export abstract class Field {
    label: string
    name: string
    type: FieldType

    /**
     * Create a new field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param type - type of the field
     */
    constructor(name: string, label: string, type: FieldType = 'text') {
        this.name = name
        this.label = label
        this.type = type
    }

}

/**
 * Corresponds to a text field in a form
 */
export class TextField extends Field {
    static TYPE = 'text'

    default: string

    /**
     * Create a new text field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param defaultVal - default value of the field
     */
    constructor(name: string, label: string, defaultVal: string = '') {
        super(name, label, 'text')
        this.default = defaultVal
    }
}

/**
 * A dropdown select field
 */
export class SelectField extends Field {
    static TYPE = 'selected'

    options: SelectOption[]
    default: SelectOption | SelectOption[]
    multi: boolean

    /**
     * Create a new select dropdown field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param options - options to show in dropdown
     * @param defaultVal - default selected option name
     */
    constructor(name: string, label: string, options: SelectOption[] = [], multi: boolean = false, defaultVal: SelectOption | SelectOption[]) {
        super(name, label, 'select')
        this.options = options
        this.default = defaultVal
    }
}

/**
 * A checkbox field
 */
export class CheckboxField extends Field {
    static TYPE = 'checkbox'

    default: boolean

    /**
     * Create a new checkbox field
     * @param name - name of the field
     * @param label - label displayed on ui
     * @param defaultVal - default value of the field
     */
    constructor(name: string, label: string, defaultVal: boolean = false) {
        super(name, label, 'checkbox')
        this.default = defaultVal
    }
}

/**
 * Form 
 */
export class Form {
    title: string
    name: string
    fields: Field[]
}