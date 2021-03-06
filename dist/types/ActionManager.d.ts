/**
 * The action function
 */
export declare type Action = (...args: any[]) => any;
/**
 * A recorder snapshot of an action
 */
export declare type ActionSnapshot = {
    name: string;
    args: any[];
};
/**
 * The blueprint of the app's action manager. Injectible name **actions**.
 */
export interface ActionManager {
    /**
     * Push an action to stack
     * @param name name of the action
     */
    push(name: string): void;
    /**
     * Push an action to stack
     * @param name name of the action
     * @param args arguments to be passed to action
     */
    push(name: string, args: any[]): void;
    /**
     * Register an action
     * @param name name of the action to register
     * @param action action to register
     */
    register(name: string, action: Action): void;
    /**
     * Start recording the action
     * @param name name of the recording
     */
    record(name: string): void;
    /**
     * Stop recording
     * @param name the recording to stop
     */
    stop(name: string): ActionSnapshot[];
}
