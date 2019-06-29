"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const labels_1 = require("../../core/labels");
/**
 * Helper class for creating boundbox
 */
class BoundboxFactory {
    /**
     * Create a boundbox from extreme ends
     * @param topLeft top left point of the box
     * @param bottomRight bottom right point of the box
     */
    static fromEnds(topLeft, bottomRight) {
        return {
            type: labels_1.DEFAULT_LABEL_TYPES.boundbox,
            props: {
                xmin: topLeft.x,
                ymin: topLeft.y,
                xmax: bottomRight.x,
                ymax: bottomRight.y
            }
        };
    }
    /**
     * Create a boundbox from topleft point and size of the box
     * @param topLeft top left point of the box
     * @param size width and height of the box
     */
    static fromSize(topLeft, size) {
        return {
            type: labels_1.DEFAULT_LABEL_TYPES.boundbox,
            props: {
                xmin: topLeft.x,
                ymin: topLeft.y,
                xmax: topLeft.x + size.width,
                ymax: topLeft.y + size.height
            }
        };
    }
}
exports.BoundboxFactory = BoundboxFactory;
//# sourceMappingURL=factories.js.map