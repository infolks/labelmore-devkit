import { Label } from "../../core/labels";
export interface BoundboxLabel extends Label {
    id: number;
    type: string;
    class_id: string;
    props: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
    };
}
export interface ContourLabel extends Label {
    id: number;
    type: string;
    class_id: string;
    props: {
        points: {
            x: number;
            y: number;
        }[];
    };
}
