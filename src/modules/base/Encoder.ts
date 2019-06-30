import { Frame, Project } from "../core/project";
import { Label, LabelClass } from "../core/labels";

export interface FileWriteInfo {
    name: string;
    subdirectory?: string;
    data: Buffer;
}

export interface EncodeFormat {
    encode(label: Label<any>, labelClass?: LabelClass): any
}

export abstract class Encoder {
    
    public readonly title: string;
    public readonly icon: string;
    public readonly options: any = null;

    public static SUBFOLDERS = {
        ANNOTATIONS: 'ANNOTATIONS'
    }

    /**
     * Encode the frame
     * @param frame frame to encode
     * @param project corresponding project
     */
    abstract encode(frame: Frame, project: Project): FileWriteInfo[]

    /**
     * Any final project information files to include is created here
     * @param project project to encode
     */
    abstract finalize(project: Project): FileWriteInfo[]
}

export interface EncoderInfo {
    name: string
    title: string
    icon: string
}