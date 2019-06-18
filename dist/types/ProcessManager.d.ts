export interface ProcessManager {
    /**
     * Execute a python script file.
     * @note python has to be installed in the target system
     * @param path path to the python script file
     * @param args arguments to pass to script
     */
    executePython(path: string, args: string[]): Promise<string>;
}
