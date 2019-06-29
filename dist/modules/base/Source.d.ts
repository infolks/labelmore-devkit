/// <reference types="node" />
export declare abstract class Source {
    readonly title: string;
    readonly icon: string;
    /**
     * What happens when we click the item
     */
    abstract trigger(): Promise<string>;
    /**
     * How to list images in the directory
     * @param dir directory string returned by trigger function
     */
    abstract list(dir: string): Promise<string[]>;
    /**
     * How to read a file in the source
     * @param dir directory string returned by trigger function
     * @param filename name of one of the files in directory
     */
    abstract read(dir: string, filename: string): Promise<Buffer>;
    /**
     * How to write to a file in the source
     * @param dir directory string returned by trigger function
     * @param filename name of one of the files in directory
     * @param data data to be written
     */
    abstract write(dir: string, filename: string, data: Buffer): Promise<void>;
    /**
     * How to join two paths in the source
     * @param dir parent directory path
     * @param subdir subdirectory relative path
     */
    abstract join(...paths: string[]): string;
}
export interface SourceInfo {
    name: string;
    title: string;
    icon: string;
}
