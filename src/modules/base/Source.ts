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
     * @param paths parts of path to the file
     */
    abstract async read(...paths: string[]): Promise<Buffer>;

    /**
     * How to write to a file in the source
     * @param data data to be written
     * @param parts of path to the file to write
     */
    abstract async write(data: Buffer, ...paths: string[]): Promise<void>;

}

export interface SourceInfo {
    name: string
    title: string
    icon: string
}