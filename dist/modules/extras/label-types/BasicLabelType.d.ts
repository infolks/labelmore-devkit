import { Item, PaperScope } from "paper";
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
    labelTagPosition?: 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftCenter' | 'topCenter' | 'rightCenter' | 'bottomCenter';
    hideTagOnSelect: boolean;
    hasFill: boolean;
}
/**
 * Default options for basic label types
 */
export declare const DEFAULT_BASIC_LABEL_TYPE_OPTIONS: BasicLabelTypeOptions;
/**
 * An abstract class forming a base for basic label type
 */
export declare abstract class BasicLabelType<P> extends LabelType<P> {
    protected labeller: LabelManager;
    protected workspace: WorkspaceManager;
    protected settings: SettingsManager;
    protected paper: PaperScope;
    options: Partial<BasicLabelTypeOptions>;
    constructor(labeller: LabelManager, workspace: WorkspaceManager, settings: SettingsManager, paper: PaperScope);
    readonly labelPrefs: {
        fill: {
            opacity: number;
        };
        stroke: {
            width: number;
        };
    };
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
    tagContent(label: Label<P>, labelClass: LabelClass): string;
    /**
     * Render a label to workspace
     * @param label label to be rendered
     */
    render(label: Label<P>): Item;
    /**
     * Show tag of the label
     * @param label label
     * @param path path created from label
     * @param ratio ratio based on the zoom of the workspace
     */
    protected showLabelTag(label: Label<P>, path: Item, ratio: number): paper.Group;
}
