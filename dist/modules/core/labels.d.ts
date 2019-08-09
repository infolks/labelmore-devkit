import { Field } from "./forms";
/**
 * The label interface
 */
export interface Label<P> {
    id: number;
    type: string;
    class_id: string;
    props: P;
    attributes?: AttributeValues;
}
/**
 * The LabelClass interface
 */
export interface LabelClass {
    id: string;
    name: string;
    color: string;
}
/**
 * Basic interface for attributes
 */
export interface Attribute {
    name: string;
    values: string[];
    multi: boolean;
}
/**
 * Class Attribute interface
 */
export interface ClassAttribute extends Field {
    classes: string[];
}
/**
 * Attribute values stored in project
 */
export declare type AttributeValues = {
    [key: string]: string[];
};
/**
 * The keypoint interface
 */
export interface Keypoint {
    name: string;
    classes: string[];
    connections: string[];
}
/**
 * The default label types
 */
export declare const DEFAULT_LABEL_TYPES: {
    boundbox: string;
    contour: string;
    line: string;
    keypoint: string;
};
