
export interface BoundboxProps{
    xmin: number
    ymin: number
    xmax: number
    ymax: number
}

export interface ContourProps{
    points: {
        x: number
        y: number
    }[]
}

export interface PolylineProps {
    points: {
        x: number
        y: number
    }[]
}

// NEW
