import { PathItem } from "paper";
import { Label } from "../core/labels";

export abstract class LabelType {

    public readonly title: string;

    get name_format(): string {
        return "[class]_[id]"
    }

    /**
     * Covnert label to path on workspace
     * @param label label to be rendered
     */
    abstract render(label: Label): PathItem;

    /**
     * Convert a path on workspace to label
     * @param path path to be converted
     * @return the props value of the label
     */
    abstract apply(path: PathItem): any;

}