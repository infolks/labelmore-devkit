import { Point, KeyEvent, ToolEvent, Tool } from "paper";
import { WorkspaceManager } from "../../types/WorkspaceManager";
import { SettingsManager } from "../../types/SettingsManager";
import { WheelEvent } from "./Events";
export interface AnnotationToolOptions {
    showGuide: boolean;
    limitToArtboard: boolean;
}
export declare const DEFAULT_ANNOTATION_TOOL_OPTIONS: AnnotationToolOptions;
export declare abstract class AnnotationTool extends Tool {
    protected workspace: WorkspaceManager;
    protected settings: SettingsManager;
    readonly name: string;
    readonly title: string;
    readonly icon: string;
    readonly cursor: string;
    private _lastEvent;
    protected options: Partial<AnnotationToolOptions>;
    onMouseWheel: any;
    constructor(workspace: WorkspaceManager, settings: SettingsManager);
    /**
     * Handles events on tool activation
     */
    onactivate(): void;
    /**
     * Handles event on tool deactivation
     */
    ondeactivate(): void;
    /**
     * Mouse down event handler
     * @param event Tool event
     */
    onmousedown(event: ToolEvent): void;
    /**
     * Mouse up event handler
     * @param event Tool Event
     */
    onmouseup(event: ToolEvent): void;
    /**
     * Mouse drag event handler
     * @param event Tool event
     */
    onmousedrag(event: ToolEvent): void;
    /**
     * Mouse wheel event handler
     * @param event Mouse Wheel event
     */
    onmousewheel(event: WheelEvent): void;
    /**
     * Mouse move event handler
     * @param event Tool event
     */
    onmousemove(event: ToolEvent): void;
    /**
     * Key down event handler
     * @param event Key event
     */
    onkeydown(event: KeyEvent): void;
    /**
     * Key up event handler
     * @param event Key event
     */
    onkeyup(event: KeyEvent): void;
    /**
     * Move guide to a position
     * @param point point where to move the guide
     */
    protected moveGuide(point: Point): void;
    /**
     * Limit a point to workspace artboard
     * @param point point to limit to workspace
     */
    private limitToArtboard;
}
export interface AnnotationToolInfo {
    name: string;
    icon: string;
    title: string;
    active: boolean;
}
