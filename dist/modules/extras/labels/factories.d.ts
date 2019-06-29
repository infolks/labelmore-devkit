import { BoundboxProps } from "./defaults";
import { Label } from "../../core/labels";
declare type Point = {
    x: number;
    y: number;
};
declare type Size = {
    width: number;
    height: number;
};
/**
 * Helper class for creating boundbox
 */
export declare abstract class BoundboxFactory {
    /**
     * Create a boundbox from extreme ends
     * @param topLeft top left point of the box
     * @param bottomRight bottom right point of the box
     */
    static fromEnds(topLeft: Point, bottomRight: Point): Partial<Label<BoundboxProps>>;
    /**
     * Create a boundbox from topleft point and size of the box
     * @param topLeft top left point of the box
     * @param size width and height of the box
     */
    static fromSize(topLeft: Point, size: Size): Partial<Label<BoundboxProps>>;
}
export {};
