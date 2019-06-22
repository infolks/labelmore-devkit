/// <reference types="node" />
import { OpenDialogOptions, FileFilter } from "electron";
export interface FileManager {
    /**
     * List files in a directory
     * @param path path to the directory
     */
    list(dir: string, filters?: FileFilters): Promise<string[]>;
    /**
     * Read a file from its path
     * @param path path to the file
     */
    read(path: string): Promise<Buffer>;
    /**
     * Read a file from a directory
     * @param dir path to the directory
     * @param filename name of the file
     */
    read(dir: string, filename: string): Promise<Buffer>;
    /**
     * Write to a file in directory
     * @param dir path to the directory
     * @param filename name of the file to write
     * @param data data to be written
     */
    write(dir: string, filename: string, data: Buffer): Promise<void>;
    /**
     * Browse the filesystem
     * @param options open dialog options
     */
    browse(options: OpenDialogOptions): Promise<{
        filePaths: string[];
        bookmarks: string[];
    }>;
    /**
     * Save data to a new file
     * @param data data to be saved
     * @param title title of the file
     */
    save(data: Buffer, title?: string, filters?: FileFilter[], ext?: string): Promise<string>;
    /**
     * Open a file from disk
     * @param filters file filters
     */
    open(filters?: FileFilter[]): Promise<Buffer>;
    /**
     * Check if a path corresponds to a file or not
     * @param path path to the target
     */
    isFile(...paths: string[]): Promise<boolean>;
    /**
     * Check if a path corresponds to a directory or not
     * @param path path to the target
     */
    isDir(...paths: string[]): Promise<boolean>;
    /**
     * Check if a path exists or not
     * @param path path to check
     */
    exists(path: string): Promise<boolean>;
    /**
     * Check whether a file exist in a directory
     * @param dir path to the directory
     * @param filename name of the file
     */
    exists(dir: string, filename: string): Promise<boolean>;
}
/**
 * FileFilter interface
 */
export interface FileFilters {
    file: boolean;
    extensions: string[];
}
