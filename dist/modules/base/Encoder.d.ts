/// <reference types="node" />
import { Frame, Project } from "../core/project";
export interface FileWriteInfo {
    name: string;
    subdirectory?: string;
    data: Buffer;
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
