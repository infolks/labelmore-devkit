import { Point, Rectangle } from "paper";

export interface Control {
    hotspot: Point,
    thumb?: Point,
    cursor?: string,
    bounds?: Rectangle,
    restrict?: 'x' | 'y'
}