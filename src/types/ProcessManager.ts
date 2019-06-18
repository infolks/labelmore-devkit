export interface ProcessManager {

    /**
     * Execute a python script file.
     * @note python has to be installed in the target system
     * @param path path to the python script file
     */
    executePython(path: string): Promise<string>
    /**
     * Execute a python script file.
     * @note python has to be installed in the target system
     * @param path path to the python script file
     * @param args arguments to pass to script
     */
    executePython(path: string, args: string[]): Promise<string>
    /**
     * Execute a python script file.
     * @note python has to be installed in the target system
     * @param target path to the python script file or the python script
     * @param args arguments to pass to script
     * @param type whether the target is file or script
     */
    executePython(target: string, args: string[], type: 'path' |'script'): Promise<string>

}