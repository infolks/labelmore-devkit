export interface Label {
    id: number;
    type: string;
    class_id: string;
    props: any;
}
export interface LabelClass {
    id: string;
    name: string;
    color: string;
}
export interface Attribute {
    name: string;
    values: string[];
}
export interface ClassAttribute extends Attribute {
    name: string;
    values: string[];
    classes: string[];
}
export interface AttributeValue {
    name: string;
    values: string[];
}
export interface Keypoint {
    name: string;
    classes: string[];
}
export declare const DEFAULT_LABEL_TYPES: {
    boundbox: string;
    contour: string;
};
