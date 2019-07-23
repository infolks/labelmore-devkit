import { ProjectManager } from "../../types/ProjectManager";
import { FileManager } from "../../types/FileManager";
import { ActionManager } from "../../types/ActionManager";
import { IpcWrapper } from "../../types/IpcWrapper";
import { PaperScope } from "paper";
import { SettingsManager } from "../../types/SettingsManager";
import { ShortcutManager } from "../../types/ShortcutManager";
import { ProcessManager } from "../../types/ProcessManager";
import { ToolManager } from "../../types/ToolManager";
import { UIManager } from "../../types/UIManager";
import { WorkspaceManager } from "../../types/WorkspaceManager";

/**
 * The main app interface
 */
export interface App {
    $actions: ActionManager
    $files: FileManager
    $ipc: IpcWrapper
    $paper: PaperScope
    $projects: ProjectManager
    $settings: SettingsManager
    $shortcuts: ShortcutManager
    $process: ProcessManager
    $tools: ToolManager
    $ui: UIManager
    $workspace: WorkspaceManager
}