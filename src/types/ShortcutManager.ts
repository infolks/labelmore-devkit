import { ProjectShortcuts } from "../modules/core/project";

export interface ShortcutManager {

    /**
     * Activate the shortcut service
     * @param shortcuts shortcuts to activate
     */
    activate(shortcuts: ProjectShortcuts): void
}