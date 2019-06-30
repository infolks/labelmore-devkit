/// <reference types="node" />
import { Frame, Project } from "../core/project";
import { Label, LabelClass } from "../core/labels";
export interface FileWriteInfo {
    name: string;
    subdirectory?: string;
    data: Buffer;
}
export interface EncodeFormat {
    encode(label: Label<any>, labelClass?: LabelClass): any;
}
export declare abstract class Encoder {
    readonly title: string;
    readonly icon: string;
    readonly options: any;
    static SUBFOLDERS: {
        ANNOTATIONS: string;
    };
    /**
     * Encode the frame
     * @param frame frame to encode
     * @param project corresponding project
     */
    abstract encode(frame: Frame, project: Project): FileWriteInfo[];
    /**
     * Any final project information files to include is created here
     * @param project project to encode
     */
    abstract finalize(project: Project): FileWriteInfo[];
}
export interface EncoderInfo {
    name: string;
    title: string;
    icon: string;
}
