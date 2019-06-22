import { Label } from "../../core/labels";
/**
 * @deprecated This will be discontinued in future versions
 */
export interface BoundboxLabel extends Label {
    props: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
    };
}
/**
 * @deprecated This will be discontinued in future versions
 */
export interface ContourLabel extends Label {
    props: {
        points: {
            x: number;
            y: number;
        }[];
    };
}
