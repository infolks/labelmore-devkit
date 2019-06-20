import { LabelClass, Label, Keypoint, Attribute, ClassAttribute, AttributeValues } from "../modules/core/labels";
import { PathItem } from "paper";
import { LabelType } from "../modules/base/LabelType";

export interface LabelManager {

    /**
     * The current selected label class
     */
    class: LabelClass

    /**
     * The current selected keypoint
     */
    keypoint: Keypoint

    /**
     * The current selected label
     */
    selected: Label

    /**
     * All labels in the current frame
     */
    all: Label[]

    /**
     * All label classes for the current project
     */
    classes: LabelClass[]

    /**
     * All keypoints available for the current class
     */
    keypoints: Keypoint[]

    /**
     * All attributes available for the current class
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
    register(name: string, labelType: LabelType): void

    /**
     * Check whether a label type is already registered
     * @param name name of the label
     */
    has(name: string): boolean

    /**
     * Render a label using its label type
     * @param label Label to be rendered
     */
    render(label: Label): PathItem

    /**
     * Get a label corresponding to the id
     * @param id id of the label
     */
    getLabel(id: number): Label

    /**
     * Get label class correspondin to the id
     * @param id id of the label class
     */
    getClass(id: string): LabelClass

    /**
     * Get name of the label based on the types name format
     * @param label the label of which name is to be found
     */
    getName(label: Label): string

    /**
     * Get an attributes selected value
     * @param name name of the attribute
     */
    getAttribute(name: string): string

    /**
     * Set an attribute value
     * @param name name of the attribute
     * @param value value of the attribute
     */
    setAttribute(name: string, value: string): void

    /**
     * Add label to the frame
     * @param label label to be added
     */
    add(label: Partial<Label>): void

    /**
     * Remove a label from the frame
     * @param id id of the label to be removed
     */
    remove(id: number): void

    /**
     * Update a label
     * @param id id of the label
     * @param props properties to change
     */
    update(id: number, props: Partial<Label>): void

    /**
     * Apply path to a label
     * @param id id of the label
     * @param path path to apply to label
     */
    apply(id: number, path: PathItem): void

    /**
     * Move label up by one level
     * @param id id of the label. defaults to selected label id
     */
    raise(id?: number): void

    /**
     * Move label down by one level
     * @param id id of the label. defaults to selected label id
     */
    fall(id?: number): void

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