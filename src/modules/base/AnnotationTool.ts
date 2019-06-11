import { Point, KeyEvent, ToolEvent, Tool, PaperScope } from "paper";
import { WorkspaceManager } from "../../types/WorkspaceManager";
import { SettingsManager } from "../../types/SettingsManager";
import { WheelEvent } from "./Events";

export interface AnnotationToolOptions {
    showGuide: boolean
    limitToArtboard: boolean
}

export const DEFAULT_ANNOTATION_TOOL_OPTIONS: AnnotationToolOptions = {
    showGuide: true,
    limitToArtboard: false
}

export abstract class AnnotationTool {
    
    public readonly name: string;
    public readonly title: string;
    public readonly icon: string;
    public readonly cursor: string = 'default';

    private tool: Tool;

    private _lastEvent: ToolEvent

    protected options: Partial<AnnotationToolOptions> = {}

    public onMouseWheel: any;

    constructor(protected workspace: WorkspaceManager, protected settings: SettingsManager, protected paper: PaperScope) {

        this.tool = new this.paper.Tool()

        // fill options
        this.options = {
            ...DEFAULT_ANNOTATION_TOOL_OPTIONS,
            ...this.options
        }

        // ==============
        //  STATE EVENTS
        // ==============
        this.tool.on('activate', () => {
            this.options.showGuide ? this.workspace.showGuide() : this.workspace.hideGuide()

            this.workspace.cursor = this.cursor

            this.onactivate()
        })

        this.tool.on('deactivate', () => {

            this.ondeactivate()

        })

        // ============
        //  KEY EVENTS
        // ============
        this.tool.onKeyUp = (event) => {
            this.onkeyup(event)
        }
        this.tool.onKeyDown = (event) => {
            this.onkeydown(event)
        }

        // ==============
        //  MOUSE EVENTS
        // ==============

        // Handle
        this.tool.onMouseDown = (event) => {

            // limit to artboard
            if (this.options.limitToArtboard) {
                event.point = this.limitToArtboard(event.point)
            }

            this.onmousedown(event)

        }

        // Handle mouse up
        this.tool.onMouseUp = (event) => {

            // limit to artboard
            if (this.options.limitToArtboard) {
                event.point = this.limitToArtboard(event.point)
            }

            this.onmouseup(event)
        }

        // Handles Mousedrag
        this.tool.onMouseDrag = (event) => {

            // limit to artboard
            if (this.options.limitToArtboard) {
                event.downPoint = this.limitToArtboard(event.downPoint)
                event.point = this.limitToArtboard(event.point)
            }

            // move guide
            if (this.options.showGuide) this.moveGuide(event.point)

            this.onmousedrag(event)
        }

        // Handles Mousemove
        this.tool.onMouseMove = (event) => {

            this._lastEvent = event

            // limit to artboard
            if (this.options.limitToArtboard) {
                event.point = this.limitToArtboard(event.point)
            }

            // move guide
            if (this.options.showGuide) this.moveGuide(event.point)

            this.onmousemove(event)
        }

        // Handles MouseWheel
        this.onMouseWheel = (event: WheelEvent) => {

            if (this._lastEvent) {
                event.type = 'mousewheel'
                event.modifiers.space = this._lastEvent.modifiers.space
                event.modifiers.command = this._lastEvent.modifiers.command
                event.lastPoint = this._lastEvent.lastPoint
                event.item = this._lastEvent.item
            }

            

            // [+] ZOOM BEGINS
            let zoom = this.workspace.zoom

            const zoomAmount = this.settings.general.workspace.zoom.amount

            // zoom out
            if (event.delta.y > 0) {

                zoom /= zoomAmount

            }

            // zoom in
            else if (event.delta.y < 0) {

                zoom *= zoomAmount
            }

            // zoom in or out
            this.workspace.zoomToPoint(zoom, event.point)

            // [-] ZOOM ENDS

            // call tools mousewheel event
            this.onmousewheel(event)

        }

    }

    /**
     * Activate the tool
     */
    activate() {
        this.tool.activate()
    }

    /**
     * Handles events on tool activation
     */
    onactivate() {}

    /**
     * Handles event on tool deactivation
     */
    ondeactivate() {}

    /**
     * Mouse down event handler
     * @param event Tool event
     */
    onmousedown(event: ToolEvent) {}

    /**
     * Mouse up event handler
     * @param event Tool Event
     */
    onmouseup(event: ToolEvent) {}

    /**
     * Mouse drag event handler
     * @param event Tool event
     */
    onmousedrag(event: ToolEvent) {}

    /**
     * Mouse wheel event handler
     * @param event Mouse Wheel event
     */
    onmousewheel(event: WheelEvent) {}

    /**
     * Mouse move event handler
     * @param event Tool event
     */
    onmousemove(event: ToolEvent) {}

    /**
     * Key down event handler
     * @param event Key event
     */
    onkeydown(event: KeyEvent) {}

    /**
     * Key up event handler
     * @param event Key event
     */
    onkeyup(event: KeyEvent) {}
    

    // ========================
    //     PRIVATE METHODS
    // ========================

    /**
     * Move guide to a position
     * @param point point where to move the guide
     */
    protected moveGuide(point: Point) {

        point = this.limitToArtboard(point)

        // move horizontal guide
        this.workspace.guide.horizontal.position.y = point.y

        // move vertical guide
        this.workspace.guide.vertical.position.x = point.x
    }

    /**
     * Limit a point to workspace artboard
     * @param point point to limit to workspace
     */
    private limitToArtboard(point: Point) {

        const limited = new Point(point)
        const artboard = this.workspace.artboard

        if (artboard) {

            // limit the x 
            if (point.x > artboard.right) limited.x = artboard.right
            else if (point.x < artboard.left) limited.x = artboard.left

            // limit the y
            if (point.y > artboard.bottom) limited.y = artboard.bottom
            else if (point.y < artboard.top) limited.y = artboard.top

        }

        return limited
    }

}

export interface AnnotationToolInfo {
    name: string
    icon: string
    title: string
    active: boolean
}