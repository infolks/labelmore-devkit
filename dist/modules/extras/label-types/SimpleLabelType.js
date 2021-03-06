"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicLabelType_1 = require("./BasicLabelType");
const paper_1 = require("paper");
/**
 * An abstract class extended from basic label type providing extra functionalities
 */
class SimpleLabelType extends BasicLabelType_1.BasicLabelType {
    /**
     * Select a label
     * @param label label to be selected
     * @param path path correspondin to the label
     * @param ratio ratio of visible viewport
     */
    select(label, path, ratio) {
        path.selected = true;
        // create controls
        this.createControls(label, path, ratio);
    }
    // =============
    //   PROTECTED
    // ============
    createControls(label, path, ratio) {
        const controlRadius = this.settings.general.workspace.control.radius;
        const class_ = this.labeller.getClass(label.class_id);
        const color = new paper_1.Color(class_.color);
        // controls should be on top
        // there is a dedicated control layer to keep controls
        // we will activate it via workspace manager
        if (this.workspace.activateControlsLayer()) {
            // if successfully activated the controls layer place the controls
            this.controls(path).forEach((control, index) => {
                const controlPoint = control.hotspot || control;
                const thumbPoint = control.thumb || controlPoint;
                const cursor = control.cursor || 'pointer';
                let controlBounds = control.bounds || new paper_1.Rectangle(controlPoint, new paper_1.Size(0, 0));
                const controlPath = new this.paper.Path.Circle(thumbPoint, controlRadius * ratio);
                // set style of path
                controlPath.style = {
                    strokeColor: color,
                    fillColor: new paper_1.Color(color.red, color.green, color.blue, 0.3),
                    strokeWidth: this.labelPrefs.stroke.width * ratio
                };
                controlPath.data.index = this.workspace.RESERVED_ITEMS.CONTROL;
                // UPDATE CONTROLS ON PATH CHANGE
                const updateControls = () => {
                    const control = this.controls(path)[index];
                    controlPath.position = control.thumb || control.hotspot || control;
                    const newBounds = control.bounds || new paper_1.Rectangle(controlPoint, new paper_1.Size(0, 0));
                    controlBounds.set(newBounds);
                };
                // when path is moving
                path.on('moving', updateControls);
                // when path is resizing
                path.on('resizing', updateControls);
                // Move control point along with control
                controlPath.onMouseDrag = (event) => {
                    const delta = event.delta;
                    // restrict motion to x
                    if (control.restrict === 'x')
                        delta.y = 0;
                    // restrict motion to y
                    else if (control.restrict === 'y')
                        delta.x = 0;
                    // TODO: restrict to xy
                    // set position of control path
                    controlPath.position = controlPath.position.add(this.limitMotion(delta, controlBounds));
                    // set position of control point
                    controlPoint.set(controlPoint.x + delta.x, controlPoint.y + delta.y);
                    path.emit('resizing', {});
                };
                // change cursor
                let prevCursor = "";
                controlPath.onMouseEnter = () => {
                    prevCursor = (this.workspace.cursor !== cursor) ? this.workspace.cursor : prevCursor;
                    this.workspace.cursor = cursor;
                };
                controlPath.onMouseLeave = () => {
                    this.workspace.cursor = prevCursor;
                };
                // apply changes
                controlPath.onMouseUp = () => {
                    this.labeller.apply(label.id, path);
                };
            });
            // activate the art layer !IMPORTANT
            this.workspace.activateArtLayer(); // IF IT IS FALSE WE ARE DONE
        }
    }
    /**
     * Limit motions inside the artboard
     * @param bounds bounds of the path
     * @param delta
     */
    limitMotion(delta, bounds) {
        const artboard = this.workspace.artboard;
        if (artboard) {
            // find delta limits
            const dx_min = artboard.left - bounds.left;
            const dx_max = artboard.right - bounds.right;
            const dy_min = artboard.top - bounds.top;
            const dy_max = artboard.bottom - bounds.bottom;
            // limit motion
            if (delta.x < dx_min)
                delta.x = dx_min;
            else if (delta.x > dx_max)
                delta.x = dx_max;
            if (delta.y < dy_min)
                delta.y = dy_min;
            else if (delta.y > dy_max)
                delta.y = dy_max;
        }
        return delta;
    }
}
exports.SimpleLabelType = SimpleLabelType;
//# sourceMappingURL=SimpleLabelType.js.map