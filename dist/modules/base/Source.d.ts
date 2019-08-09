/// <reference types="node" />
/**
 * An abstract class forming a base for creating source plugins.
 * Source plugins are used to add functionality to retrieve inputs from different source.
 */
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
     * @param paths parts of path to the file
     */
    abstract read(...paths: string[]): Promise<Buffer>;
    /**
     * How to write to a file in the source
     * @param data data to be written
     * @param parts of path to the file to write
     */
    abstract write(data: Buffer, ...paths: string[]): Promise<void>;
}
/**
 * Short info about the source
 */
export interface SourceInfo {
    name: string;
    title: string;
    icon: string;
}
