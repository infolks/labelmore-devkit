import {Label, LabelClass, Keypoint, ClassAttribute} from './labels'
import { Field } from './forms';

export interface Frame {
    name: string
    labels: Label<any>[]
    props: any
}

export interface ProjectOptions {
    inputPath: string
    outputPath: string
    allowedTools?: string[]
    allowedPanels?: string[]
    labelClasses?: LabelClass[]
    keypoints?: Keypoint[]
    attributes?: ClassAttribute[]
    sceneAttributes?: Field[]
    outputFormats: string[]
    inputSource: string
    outputSource: string
    shortcuts: ProjectShortcuts
    extras?: any
}

export type ProjectShortcuts = {[key:string]:string}

export interface Project {
    type: string
    title: string
    files: string[]
    options: ProjectOptions
    frames?: Frame[]
    currentFrame?: number
}

export interface ProjectFormData {
    title: string
    type: string
    inputPath: string
    outputPath: string
    inputSource: string
    outputSource: string
    outputFormats?: string[]
    allowedTools?: string[]
    allowedPanels?: string[]
    labelClasses?: LabelClass[]
    keypoints?: Keypoint[]
    attributes?: ClassAttribute[]
    sceneAttributes?: Field[]
    shortcuts: ProjectShortcuts
    extras?: any
}