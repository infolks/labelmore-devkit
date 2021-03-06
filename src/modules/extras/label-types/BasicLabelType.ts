import { Color, Point, Item, PaperScope } from "paper";
import { LabelManager } from "../../../types/LabelManager";
import { WorkspaceManager } from "../../../types/WorkspaceManager";
import { SettingsManager } from "../../../types/SettingsManager";
import { LabelType } from "../../base/LabelType";
import { Label, LabelClass } from "../../core/labels";


/**
 * Options interface for basic label type
 */
export interface BasicLabelTypeOptions {
    showLabelTag: boolean;
    labelTagPosition?: 'center'|'topLeft'|'topRight'|'bottomLeft'|'bottomRight'|'leftCenter'|'topCenter'|'rightCenter'|'bottomCenter';
    hideTagOnSelect: boolean;
    hasFill: boolean;
}

/**
 * Default options for basic label types
 */
export const DEFAULT_BASIC_LABEL_TYPE_OPTIONS: BasicLabelTypeOptions = {
    showLabelTag: true,
    labelTagPosition: 'topLeft',
    hideTagOnSelect: true,
    hasFill: true
}

/**
 * An abstract class forming a base for basic label type
 */
export abstract class BasicLabelType<P> extends LabelType<P> {

    public options: Partial<BasicLabelTypeOptions> = DEFAULT_BASIC_LABEL_TYPE_OPTIONS

    // protected readonly defaultStrokeWidth: number = 1
    // protected readonly fillColorAlpha: number = 0.3

    constructor(
        protected labeller: LabelManager, 
        protected workspace: WorkspaceManager, 
        protected settings: SettingsManager, 
        protected paper: PaperScope) {
        super()

        this.options = {
            ...DEFAULT_BASIC_LABEL_TYPE_OPTIONS,
            ...this.options
        }
    }

    get labelPrefs() {
        return this.settings.general.workspace.labels
    }

    /**
     * Converting label to vector
     * @param label label to be converted to a vector
     */
    abstract vectorize(label: Label<P>): Item;

    abstract select(label: Label<P>, path: Item, ratio: number): void;

    /**
     * text to be shown on tag
     * @param label the correspondin label
     */
    tagContent(label: Label<P>, labelClass: LabelClass): string {
        return labelClass.name
    }

    /**
     * Render a label to workspace
     * @param label label to be rendered
     */
    render(label: Label<P>): Item {

        const path = this.vectorize(label);

        const ratio = 1/this.workspace.zoom

        const class_ = this.labeller.getClass(label.class_id)

        const color = new Color(class_.color)

        // style path
        path.style = {
            strokeColor: color,
            fillColor: this.options.hasFill? new Color(color.red, color.green, color.blue, this.labelPrefs.fill.opacity): null,
            strokeWidth: this.labelPrefs.stroke.width * ratio,
            selectedColor: color
        }

        
        const selected = this.labeller.selected ? this.labeller.selected.id : -1

        let tag: Item = null;

        // create the tag
        if (this.options.showLabelTag) {

            // show tag if not selected or if hide on select is unset
            if (label.id !== selected || !this.options.hideTagOnSelect) tag = this.showLabelTag(label, path, ratio)
        }

        // render selections
        if (label.id === selected) this.select(label, path, ratio)

        return path;

    }

    //==========
    // PROTECTED
    //==========

    /**
     * Show tag of the label
     * @param label label 
     * @param path path created from label
     * @param ratio ratio based on the zoom of the workspace
     */
    protected showLabelTag(label: Label<P>, path: Item, ratio: number) {

        const class_ = this.labeller.getClass(label.class_id)

        // create a text at a random point
        const text = new this.paper.PointText(new Point(50,50))

        // set content ant style
        text.content = this.tagContent(label, class_)
        text.style = {
            fontSize: 12 * ratio,
            fontWeight: 600,
            fillColor: 'white'
        }

        // get the bounds of the text and offset it
        const bounds = text.bounds.scale(1.25)

        // to create the background draw a rectangle
        const box = new this.paper.Path.Rectangle(bounds, 0)

        const color = new Color(class_.color)

        box.fillColor = color

        // combine the background and text to make tag
        const tag = new this.paper.Group([box, text])

        // move the tag to specified position
        const posit = this.options.labelTagPosition || 'topLeft'

        tag.bounds[posit] = path.bounds[posit]

        // for selecting the label by clicking the tag
        tag.data.index = label.id

        // lock tag
        tag.locked = true

        return tag;

    }

}