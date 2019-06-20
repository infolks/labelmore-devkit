import { PathItem } from "paper";

export interface Label {
    id: number
    type: string
    class_id: string
    props: any
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

export type AttributeValues = {[key:string]:string[]}

export interface Keypoint {
    name: string;
    classes: string[];
}

export const DEFAULT_LABEL_TYPES = {
    boundbox: 'types.default.bndbox',
    contour: 'types.default.contour'
}