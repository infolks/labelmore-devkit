/// <reference types="node" />
import { Frame, Project } from "../core/project";
import { Label, LabelClass } from "../core/labels";
/**
 * Information about a new file write task
 */
export interface FileWriteInfo {
    name: string;
    subdirectory?: string;
    data: Buffer;
}
/**
 * Encode format interface. Implemented to define new formats
 */
export interface EncodeFormat {
    encode(label: Label<any>, labelClass?: LabelClass): any;
}
/**
 * An abstract class forming a base for creating Encoders.
 * Encoders are used to convert project into desired output formats.
 */
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
/**
 * Short info about the encoder
 */
export interface EncoderInfo {
    name: string;
    title: string;
    icon: string;
}
