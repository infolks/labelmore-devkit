import { Group, PathItem, PaperScope } from "paper";
import { LabelManager } from "../../../types/LabelManager";
import { WorkspaceManager } from "../../../types/WorkspaceManager";
import { SettingsManager } from "../../../types/SettingsManager";
import { LabelType } from "../../base/LabelType";
import { Label, LabelClass } from "../../core/labels";
export interface BasicLabelTypeOptions {
    showLabelTag: boolean;
    labelTagPosition?: 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftCenter' | 'topCenter' | 'rightCenter' | 'bottomCenter';
    hideTagOnSelect: boolean;
}
export declare const DEFAULT_BASIC_LABEL_TYPE_OPTIONS: BasicLabelTypeOptions;
export declare abstract class BasicLabelType extends LabelType {
    protected labeller: LabelManager;
    protected workspace: WorkspaceManager;
    protected settings: SettingsManager;
    protected paper: PaperScope;
    protected options: Partial<BasicLabelTypeOptions>;
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
    abstract vectorize(label: Label): PathItem;
    abstract select(label: Label, path: PathItem, ratio: number): void;
    /**
     * text to be shown on tag
     * @param label the correspondin label
     */
    tagContent(label: Label, labelClass: LabelClass): string;
    /**
     * Render a label to workspace
     * @param label label to be rendered
     */
    render(label: Label): PathItem;
    /**
     * Show tag of the label
     * @param label label
     * @param path path created from label
     * @param ratio ratio based on the zoom of the workspace
     */
    protected showLabelTag(label: Label, path: PathItem, ratio: number): Group;
}
