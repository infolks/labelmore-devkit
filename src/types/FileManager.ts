import { OpenDialogOptions, FileFilter, SaveDialogOptions } from "electron";

/**
 * The blueprint of the app's file manager
 */
export interface FileManager {

    /**
     * List files in a directory
     * @param path path to the directory
     */
    list(dir: string, filters?: FileFilters): Promise<string[]>

    /**
     * Read a file from its path
     * @param paths parts of path to the file
     */
    read(...paths: string[]): Promise<Buffer>

    /**
     * Write to a file in directory
     * @param data data to be written
     * @param paths parts of path to the file to write
     */

    write(data: Buffer, ...paths: string[]): Promise<void>

    /**
     * Check if a path corresponds to a file or not
     * @param path path to the target
     */
    isFile(...paths: string[]): Promise<boolean>

    /**
     * Check if a path corresponds to a directory or not
     * @param path path to the target
     */
    isDir(...paths: string[]): Promise<boolean>

    /**
     * Check if a path exists or not
     * @param paths parts of the path (will be joined before checking)
     */
    exists(...paths: string[]): Promise<boolean>

    /**
     * show the open dialog box
     * @param {Object} options dialog options (refer electron docs)
     * @returns promise resolving to the filepaths selected
     */
    showOpenDialog(options: OpenDialogOptions): Promise<string[]>

    /**
     * show the save dialog box
     * @param options save dialog options (refer electron docs)
     * @returns promise resolving to path of file choosen for saving
     */
    showSaveDialog(options: SaveDialogOptions): Promise<string>
}

/**
 * FileFilter interface
 */
export interface FileFilters {
    file: boolean;
    extensions: string[];
}

// extend vue

// declare module "vue/types/options" {
//     interface ComponentOptions<V extends Vue> {
//         files?: FileManager;
//     }
// }

// declare module "vue/types/vue" {
//     interface Vue {
//         $files: FileManager;
//     }
// }