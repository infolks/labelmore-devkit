/// <reference types="node" />
import { Rectangle, Point, View, Path } from "paper";
import { PanelInfo, Panel } from "../modules/base/Panels";
import { Label } from "../modules/core/labels";
export interface WorkspaceGuide {
    horizontal: Path;
    vertical: Path;
    position: Point;
}
export interface WorkspaceManager {
    /**
     * Ids of reserved items
     */
    RESERVED_ITEMS: {
        CONTROL: number;
        CLASSLESS: number;
    };
    /**
     * The working artboard (readonly)
     */
    artboard: Rectangle;
    /**
     * Reference to paperscope view (readonly)
     */
    view: View;
    /**
     * workspace options in settings (readonly)
     */
    options: any;
    /**
     * Workspace cursor guide (readonly)
     */
    guide: WorkspaceGuide;
    /**
     * Current zoom level of workspace (0 to 1)
     */
    zoom: number;
    /**
     * Offset of the workspace
     */
    offset: Point;
    /**
     * Mouse cursor of the canvas
     */
    cursor: string;
    /**
     * returns a key value pair of registered panels
     */
    panelsList(): PanelInfo[];
    /**
     * Register a panel to workspace
     * @param name name to register to
     * @param panel the panel
     */
    registerPanel(name: string, panel: Panel): void;
    /**
     * Check whether a panel with the name is registered or not
     * @param name name of the panel
     */
    hasPanel(name: string): boolean;
    /**
     * Setup a new workspace
     * @param canvas canvas where to setup the paper
     */
    setup(canvas: HTMLCanvasElement): void;
    /**
     * activate controls layer to render controls
     * @returns true if successfully activated the controls layer
     */
    activateControlsLayer(): boolean;
    /**
     * activate art layer to render labels
     * @returns true if successfully activated the art layer
     */
    activateArtLayer(): boolean;
    /**
     * Enable shortcuts
     */
    enableShortcuts(): void;
    /**
     * Disable shortcuts
     */
    disableShortcuts(): void;
    /**
     * Render image file of a frame onto canvas
     * @param data data corresponding to the image file that is to be annotated in the frame
     */
    renderFrame(data: Buffer): Promise<void>;
    /**
     * Recenter the view to artboard
     */
    recenter(): void;
    /**
     * Refresh the workspace with latest state
     */
    refresh(): void;
    /**
     * Render labels to the workspace
     * @param labels labels to be rendered
     */
    render(labels: Label[]): void;
    /**
     * clear art layer
     */
    clear(): void;
    /**
     * Show cursor guide
     */
    showGuide(): void;
    /**
     * Hide cursor guide
     */
    hideGuide(): void;
    /**
     * Zoom workspace using a point as center
     * @param zoom zoom value
     * @param point point to be taken as center
     */
    zoomToPoint(zoom: number, point: Point): void;
}
