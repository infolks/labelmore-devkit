export abstract class Source {

    public readonly title: string;
    public readonly icon: string;

    /**
     * What happens when we click the item
     */
    abstract async trigger(): Promise<string>;

    /**
     * How to list images in the directory
     * @param dir directory string returned by trigger function
     */
    abstract async list(dir: string): Promise<string[]>;

    /**
     * How to read a file in the source
     * @param dir directory string returned by trigger function
     * @param filename name of one of the files in directory
     */
    abstract async read(dir: string, filename: string): Promise<Buffer>;

    /**
     * How to write to a file in the source
     * @param dir directory string returned by trigger function
     * @param filename name of one of the files in directory
     * @param data data to be written
     */
    abstract async write(dir: string, filename: string, data: Buffer): Promise<void>;

    /**
     * How to join two paths in the source
     * @param dir parent directory path
     * @param subdir subdirectory relative path
     */
    abstract async join(dir: string, subdir: string): Promise<string>;
}

export interface SourceInfo {
    name: string
    title: string
    icon: string
}