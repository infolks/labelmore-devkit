/**
 * Properties of default bounding box label
 */
export interface BoundboxProps {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
}
/**
 * Properties of default contour label
 */
export interface ContourProps {
    points: {
        x: number;
        y: number;
    }[];
}
/**
 * Properties of default polyline label
 */
export interface PolylineProps {
    points: {
        x: number;
        y: number;
    }[];
}
