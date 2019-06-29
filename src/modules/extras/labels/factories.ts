import { BoundboxProps } from "./defaults";
import { Label, DEFAULT_LABEL_TYPES } from "../../core/labels";

type Point = {
    x: number;
    y: number;
};

type Size = {
    width: number;
    height: number;
};

/**
 * Helper class for creating boundbox
 */
export abstract class BoundboxFactory {

    /**
     * Create a boundbox from extreme ends
     * @param topLeft top left point of the box
     * @param bottomRight bottom right point of the box
     */
    static fromEnds(topLeft: Point, bottomRight: Point): Partial<Label<BoundboxProps>> {

        return {
            type: DEFAULT_LABEL_TYPES.boundbox,
            props: {
                xmin: topLeft.x,
                ymin: topLeft.y,
                xmax: bottomRight.x,
                ymax: bottomRight.y
            }
        }

    }

    /**
     * Create a boundbox from topleft point and size of the box
     * @param topLeft top left point of the box
     * @param size width and height of the box
     */
    static fromSize(topLeft: Point, size: Size): Partial<Label<BoundboxProps>> {

        return {
            type: DEFAULT_LABEL_TYPES.boundbox,
            props: {
                xmin: topLeft.x,
                ymin: topLeft.y,
                xmax: topLeft.x + size.width,
                ymax: topLeft.y + size.height
            }
        }
    }
}


