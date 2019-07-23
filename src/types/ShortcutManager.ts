import { ProjectShortcuts } from "../modules/core/project";


/**
 * The blueprint of the app's shortcut manager.
 */
export interface ShortcutManager {

    /**
     * Activate the shortcut service
     * @param shortcuts shortcuts to activate
     */
    activate(shortcuts: ProjectShortcuts): void
}