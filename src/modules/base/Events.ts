import { Point, Item } from "paper";

/**
 * Event that take place on using the mouse wheel
 */
export interface WheelEvent {
    type: string
    point: Point
    lastPoint: Point
    delta: Point
    item: Item
    timeStamp: number
    modifiers: any
}