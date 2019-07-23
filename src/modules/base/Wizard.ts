import { Project } from "../core/project";
import { Field } from "../core/forms";

export interface WizardOptions {
    allowOutputSelection: boolean;
    allowToolSelection: boolean;
    allowLabelClassCreation: boolean;
    allowKeypointCreation: boolean;
    allowPanelSelection: boolean;
    allowClassAttributeCreation: boolean;
    allowSceneAttributeCreation: boolean;
}

export const DEFAULT_WIZARD_OPTIONS = {
    allowOutputSelection: true,
    allowToolSelection: true,
    allowPanelSelection: true,
    allowLabelClassCreation: true,
    allowKeypointCreation: true,
    allowClassAttributeCreation: false,
    allowSceneAttributeCreation: false
}

export type WizardType = 'creator'|'importer';
/**
 * Base class for wizards
 */
export abstract class Wizard {

    public readonly type:WizardType  = 'creator';
    public readonly title: string;
    public readonly icon: string;
    public readonly description: string;
    public options: Partial<WizardOptions> = {
        ...DEFAULT_WIZARD_OPTIONS
    };

    constructor() {
        this.options = {
            ...DEFAULT_WIZARD_OPTIONS,
            ...this.options
        }
    }

    /**
     * Any custom fields required
     */
    fields(): Field[] {
        return []
    }

    /**
     * Input function of a wizard used to filter or modify input data from source (entire project)
     * @param title title of the project
     * @param dir the chosed directory path
     * @param files files loaded from dir
     * @param options project options selected
     */
    abstract async input(title: string, dir: string, files: string[], options: any): Promise<Project>;

    /**
     * Load function of a wizard used to filter or modify input data from source (single frame)
     * @param data the frame image data
     * @param options project options
     */
    abstract async load(data: Buffer, options: any): Promise<Buffer>;

    
}

/**
 * Short info about a wizard
 */
export interface WizardInfo {
    name: string
    title: string
    icon: string
    desc: string
}