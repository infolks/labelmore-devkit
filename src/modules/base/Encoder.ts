import { Frame, Project } from "../core/project";

export interface FileWriteInfo {
    name: string;
    subdirectory?: string;
    data: Buffer;
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
    abstract encode(frame: Frame, project: Project): Promise<FileWriteInfo[]>;

    /**
     * Any final project information files to include is created here
     * @param project project to encode
     */
    abstract finalize(project: Project): Promise<FileWriteInfo[]>;
}

export interface EncoderInfo {
    name: string
    title: string
    icon: string
}