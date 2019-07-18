import { PathItem, ToolEvent } from "paper";

export interface Label<P> {
    id: number
    type: string
    class_id: string
    props: P
    attributes?: AttributeValues
}

export interface LabelClass {
    id: string;
    name: string;
    color: string;
}

export interface Attribute {
    name: string;
    values: string[];
    multi: boolean
}

export interface ClassAttribute extends Attribute {
    name: string;
    values: string[];
    classes: string[];
    multi: boolean;
}


export type AttributeValues = {[key:string]:string[]}

export interface Keypoint {
    name: string;
    classes: string[];
    connections: string[];
}

export const DEFAULT_LABEL_TYPES = {
    boundbox    : 'types.default.bndbox',
    contour     : 'types.default.contour',
    line        : 'types.default.line',
    keypoint    : 'types.default.keypoint'
}