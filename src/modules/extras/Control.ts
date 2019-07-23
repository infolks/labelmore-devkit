import { Point, Rectangle } from "paper";

/**
 * Interface for making controls
 */
export interface Control {
    hotspot: Point,
    thumb?: Point,
    cursor?: string,
    bounds?: Rectangle,
    restrict?: 'x' | 'y'
}