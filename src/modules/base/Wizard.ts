import { Project } from "../core/project";

export interface WizardOptions {
    allowOutputSelection: boolean;
    allowToolSelection: boolean;
    allowLabelClassCreation: boolean;
    allowKeypointCreation: boolean;
    allowPanelSelection: boolean;
}

export const DEFAULT_WIZARD_OPTIONS = {
    allowOutputSelection: true,
    allowToolSelection: true,
    allowLabelClassCreation: true,
    allowKeypointCreation: true,
    allowPanelSelection: true
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

    public readonly allowExtensions: boolean = false;

    abstract async input(title: string, dir: string, files: string[], options: any): Promise<Project>;

    abstract async load(data: Buffer, options: any): Promise<Buffer>;

    
}

/**
 * Information about a wizard
 */
export interface WizardInfo {
    name: string
    title: string
    icon: string
    desc: string
}