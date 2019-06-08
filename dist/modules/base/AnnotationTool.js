"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paper_1 = require("paper");
exports.DEFAULT_ANNOTATION_TOOL_OPTIONS = {
    showGuide: true,
    limitToArtboard: false
};
class AnnotationTool extends paper_1.Tool {
    constructor(workspace, settings) {
        super();
        this.workspace = workspace;
        this.settings = settings;
        this.cursor = 'default';
        this.options = {};
        // fill options
        this.options = Object.assign({}, exports.DEFAULT_ANNOTATION_TOOL_OPTIONS, this.options);
        // ==============
        //  STATE EVENTS
        // ==============
        this.on('activate', () => {
            this.options.showGuide ? this.workspace.showGuide() : this.workspace.hideGuide();
            this.workspace.cursor = this.cursor;
            this.onactivate();
        });
        this.on('deactivate', () => {
            this.ondeactivate();
        });
        // ============
        //  KEY EVENTS
        // ============
        this.onKeyUp = (event) => {
            this.onkeyup(event);
        };
        this.onKeyDown = (event) => {
            this.onkeydown(event);
        };
        // ==============
        //  MOUSE EVENTS
        // ==============
        // Handle
        this.onMouseDown = (event) => {
            // limit to artboard
            if (this.options.limitToArtboard) {
                event.point = this.limitToArtboard(event.point);
            }
            this.onmousedown(event);
        };
        // Handle mouse up
        this.onMouseUp = (event) => {
            // limit to artboard
            if (this.options.limitToArtboard) {
                event.point = this.limitToArtboard(event.point);
            }
            this.onmouseup(event);
        };
        // Handles Mousedrag
        this.onMouseDrag = (event) => {
            // limit to artboard
            if (this.options.limitToArtboard) {
                event.downPoint = this.limitToArtboard(event.downPoint);
                event.point = this.limitToArtboard(event.point);
            }
            // move guide
            if (this.options.showGuide)
                this.moveGuide(event.point);
            this.onmousedrag(event);
        };
        // Handles Mousemove
        this.onMouseMove = (event) => {
            this.lastEvent = event;
            // limit to artboard
            if (this.options.limitToArtboard) {
                event.point = this.limitToArtboard(event.point);
            }
            // move guide
            if (this.options.showGuide)
                this.moveGuide(event.point);
            this.onmousemove(event);
        };
        // Handles MouseWheel
        this.onMouseWheel = (event) => {
            if (this.lastEvent) {
                event.type = 'mousewheel';
                event.modifiers.space = this.lastEvent.modifiers.space;
                event.modifiers.command = this.lastEvent.modifiers.command;
                event.lastPoint = this.lastEvent.lastPoint;
                event.item = this.lastEvent.item;
            }
            // [+] ZOOM BEGINS
            let zoom = this.workspace.zoom;
            const zoomAmount = this.settings.general.workspace.zoom.amount;
            // zoom out
            if (event.delta.y > 0) {
                zoom /= zoomAmount;
            }
            // zoom in
            else if (event.delta.y < 0) {
                zoom *= zoomAmount;
            }
            // zoom in or out
            this.workspace.zoomToPoint(zoom, event.point);
            // [-] ZOOM ENDS
            // call tools mousewheel event
            this.onmousewheel(event);
        };
    }
    /**
     * Handles events on tool activation
     */
    onactivate() { }
    /**
     * Handles event on tool deactivation
     */
    ondeactivate() { }
    /**
     * Mouse down event handler
     * @param event Tool event
     */
    onmousedown(event) { }
    /**
     * Mouse up event handler
     * @param event Tool Event
     */
    onmouseup(event) { }
    /**
     * Mouse drag event handler
     * @param event Tool event
     */
    onmousedrag(event) { }
    /**
     * Mouse wheel event handler
     * @param event Mouse Wheel event
     */
    onmousewheel(event) { }
    /**
     * Mouse move event handler
     * @param event Tool event
     */
    onmousemove(event) { }
    /**
     * Key down event handler
     * @param event Key event
     */
    onkeydown(event) { }
    /**
     * Key up event handler
     * @param event Key event
     */
    onkeyup(event) { }
    // ========================
    //     PRIVATE METHODS
    // ========================
    /**
     * Move guide to a position
     * @param point point where to move the guide
     */
    moveGuide(point) {
        point = this.limitToArtboard(point);
        // move horizontal guide
        this.workspace.guide.horizontal.position.y = point.y;
        // move vertical guide
        this.workspace.guide.vertical.position.x = point.x;
    }
    /**
     * Limit a point to workspace artboard
     * @param point point to limit to workspace
     */
    limitToArtboard(point) {
        const limited = new paper_1.Point(point);
        const artboard = this.workspace.artboard;
        if (artboard) {
            // limit the x 
            if (point.x > artboard.right)
                limited.x = artboard.right;
            else if (point.x < artboard.left)
                limited.x = artboard.left;
            // limit the y
            if (point.y > artboard.bottom)
                limited.y = artboard.bottom;
            else if (point.y < artboard.top)
                limited.y = artboard.top;
        }
        return limited;
    }
}
exports.AnnotationTool = AnnotationTool;
//# sourceMappingURL=AnnotationTool.js.map