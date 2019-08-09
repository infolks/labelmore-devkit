import { Item } from "paper";
import { Label } from "../core/labels";
/**
 * An abstract class forming the base for defining new label types
 */
export declare abstract class LabelType<P> {
    readonly title: string;
    /**
     * string denoting how a label is to be named.
     * [class] will be replaced with the label class name
     * [id] will be replaced with a unique id for the label
     */
    readonly name_format: string;
    /**
     * Covnert label to path on workspace
     * @param label label to be rendered
     */
    abstract render(label: Label<P>): Item;
    /**
     * Convert a path on workspace to label
     * @param path path to be converted
     * @return the props value of the label
     */
    abstract apply(path: Item): P;
    /**
     * hotspot information for the label
     * @param label label whose hotspot is to be shown
     */
    hotspot(label: Label<P>): string;
}
