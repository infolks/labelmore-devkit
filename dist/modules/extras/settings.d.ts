export interface GeneralSettings {
    workspace: {
        zoom: {
            amount: number;
            min: number;
            max: number;
        };
        control: {
            radius: number;
        };
        guide: {
            color: string;
            width: number;
            opacity: number;
            dashed: boolean;
        };
        labels: {
            fill: {
                opacity: number;
            };
            stroke: {
                width: number;
            };
        };
    };
    tools: {
        defaults: {
            select: string;
            boundbox: string;
            contour: string;
            pan: string;
        };
        max: number;
    };
    shortcuts: {
        enabled: boolean;
    };
    project: {
        autosave: boolean;
        autoselect: boolean;
    };
}
