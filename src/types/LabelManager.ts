import { LabelClass, Label, Keypoint, Attribute, ClassAttribute, AttributeValues } from "../modules/core/labels";
import { Item } from "paper";
import { LabelType } from "../modules/base/LabelType";

/**
 * The blueprint of the app's label manager.
 */
export interface LabelManager {

    /**
     * The current selected label class (Read Only)
     */
    class: LabelClass

    /**
     * The current selected keypoint (Read Only)
     */
    keypoint: Keypoint

    /**
     * The current selected label (Read Only)
     */
    selected: Label<any>

    /**
     * All labels in the current frame (Read Only)
     */
    all: Label<any>[]

    /**
     * All label classes for the current project (Read Only)
     */
    classes: LabelClass[]

    /**
     * All keypoints available for the current class (Read Only)
     */
    keypoints: Keypoint[]

    /**
     * All attributes available for the current class (Read Only)
     */
    attributes: ClassAttribute[]

    /**
     * Current active attribute values
     */
    attributeValues: AttributeValues

    /**
     * Register a new label type
     * @param name unque name used to identify the type (use namespaces for uniqueness like author.category.type)
     * @param labelType the type to register.
     * @note The namespace types.default.* are reserved
     */
    register(name: string, labelType: LabelType<any>): void

    /**
     * Check whether a label type is already registered
     * @param name name of the label
     */
    has(name: string): boolean

    /**
     * Render a label using its label type
     * @param label Label to be rendered
     */
    render(label: Label<any>): Item

    /**
     * Get a label corresponding to the id
     * @param id id of the label
     */
    getLabel(id: number): Label<any>

    /**
     * Get label class correspondin to the id
     * @param id id of the label class
     */
    getClass(id: string): LabelClass

    /**
     * Get name of the label based on the types name format
     * @param label the label of which name is to be found
     */
    getName(label: Label<any>): string

    /**
     * Get an attributes selected value
     * @param name name of the attribute
     */
    getAttribute(name: string): string[]

    /**
     * Set an attribute value
     * @param name name of the attribute
     * @param value value of the attribute
     */
    setAttribute(name: string, value: string | string[]): void

    /**
     * Add label to the frame
     * @param label label to be added
     */
    add(label: Partial<Label<any>>): void
    /**
     * Add label to the frame
     * @param label label to be added
     * @param keepHistory whether to add the change to history
     */
    add(label: Partial<Label<any>>, keepHistory: boolean): void

    /**
     * Remove a label from the frame
     * @param id id of the label to be removed
     */
    remove(id: number): void
    /**
     * Remove a label from the frame
     * @param id id of the label to be removed
     * @param keepHistory whether to add the change to history
     */
    remove(id: number, keepHistory: boolean): void

    /**
     * Update a label
     * @param id id of the label
     * @param props properties to change
     */
    update(id: number, props: Partial<Label<any>>): void
    /**
     * Update a label
     * @param id id of the label
     * @param props properties to change
     * @param keepHistory whether to add the change to history
     */
    update(id: number, props: Partial<Label<any>>, keepHistory: boolean): void

    /**
     * Apply path to a label
     * @param id id of the label
     * @param path path to apply to label
     */
    apply(id: number, path: Item): void
    /**
     * Apply path to a label
     * @param id id of the label
     * @param path path to apply to label
     * @param keepHistory whether to add the change to history
     */
    apply(id: number, path: Item, keepHistory: boolean): void

    /**
     * Move selected label up by one level
     */
    raise(): void
    /**
     * Move label up by one level
     * @param id id of the label. defaults to selected label id
     */
    raise(id: number): void
    /**
     * Move label up by one level
     * @param id id of the label. defaults to selected label id
     * @param keepHistory whether to add the change to history
     */
    raise(id: number, keepHistory: boolean): void

    /**
     * Move selected label down by one level
     */
    fall(): void
    /**
     * Move label down by one level
     * @param id id of the label. defaults to selected label id
     */
    fall(id: number): void
    /**
     * Move label down by one level
     * @param id id of the label. defaults to selected label id
     */
    fall(id: number, keepHistory: boolean): void

    /**
     * Select a label
     * @param id id of the label
     */
    select(id: number): void

    /**
     * deselect any selected label
     */
    deselect(): void

    /**
     * Select a label class
     * @param id id of the class
     */
    selectClass(id: string): void

    /**
     * Select a keypoint
     * @param name name of the keypoint
     */
    selectKeypoint(name: string): void

}

// extend vue

// declare module "vue/types/options" {
//     interface ComponentOptions<V extends Vue> {
//         labeller?: LabelManager
//     }
// }

// declare module "vue/types/vue" {
//     interface Vue {
//         $labeller: LabelManager
//     }
// }