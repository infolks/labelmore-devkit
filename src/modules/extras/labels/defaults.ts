import { Label } from "../../core/labels";

/**
 * @deprecated This will be discontinued in future versions
 */
export interface BoundboxLabel extends Label{
    id: number
    type: string
    class_id: string
    props: {
        xmin: number
        ymin: number
        xmax: number
        ymax: number
    }
}

/**
 * @deprecated This will be discontinued in future versions
 */
export interface ContourLabel extends Label{
    id: number
    type: string
    class_id: string
    props: {
        points: {
            x: number,
            y: number
        }[]
    }
}

// NEW

// TODO: add class defenitions