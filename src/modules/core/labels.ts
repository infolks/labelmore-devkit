import { PathItem } from "paper";

export interface Label {
    id: number
    name: string
    type: string
    class_id: string
    props: any
}

export interface LabelClass {
    id: string;
    name: string;
    color: string;
}

export interface Keypoint {
    name: string;
    classes: string[];
}

export abstract class LabelType {

    public readonly title: string;

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
    abstract convert(path: PathItem): any;

}


export const DEFAULT_LABEL_TYPES = {
    boundbox: 'bndbox'
}