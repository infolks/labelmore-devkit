import { BasicLabelType } from "./BasicLabelType";
import { Control } from "../control";
import { PathItem, Path, Point } from "paper";
import { Label } from "../../core/labels";
export declare abstract class SimpleLabelType<P> extends BasicLabelType<P> {
    /**
     * Specify controls for the label
     * @param path path corresponding to a label
     */
    abstract controls(path: PathItem): Control[] | Point[];
    /**
     * Select a label
     * @param label label to be selected
     * @param path path correspondin to the label
     * @param ratio ratio of visible viewport
     */
    select(label: Label<P>, path: Path, ratio: number): void;
    private createControls;
    /**
     * Limit motions inside the artboard
     * @param bounds bounds of the path
     * @param delta
     */
    private limitMotion;
}
