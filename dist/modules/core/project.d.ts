import { Label, LabelClass, Keypoint } from './labels';
export interface Frame {
    name: string;
    labels: Label[];
}
export interface ProjectOptions {
    inputPath: string;
    outputPath: string;
    allowedTools?: string[];
    labelClasses?: LabelClass[];
    keypoints?: Keypoint[];
    outputFormats: string[];
    inputSource: string;
    outputSource: string;
    shortcuts: ProjectShortcuts;
}
export declare type ProjectShortcuts = {
    [key: string]: string;
};
export interface Project {
    type: string;
    title: string;
    files: string[];
    options: ProjectOptions;
    frames?: Frame[];
    currentFrame?: number;
}
export interface ProjectFormData {
    title: string;
    type: string;
    inputPath: string;
    outputPath: string;
    inputSource: string;
    outputSource: string;
    outputFormats?: string[];
    allowedTools?: string[];
    labelClasses?: LabelClass[];
    keypoints?: Keypoint[];
    shortcuts: ProjectShortcuts;
}
