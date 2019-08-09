/// <reference types="node" />
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
export declare const DEFAULT_WIZARD_OPTIONS: {
    allowOutputSelection: boolean;
    allowToolSelection: boolean;
    allowPanelSelection: boolean;
    allowLabelClassCreation: boolean;
    allowKeypointCreation: boolean;
    allowClassAttributeCreation: boolean;
    allowSceneAttributeCreation: boolean;
};
export declare type WizardType = 'creator' | 'importer';
/**
 * Base class for wizards
 */
export declare abstract class Wizard {
    readonly type: WizardType;
    readonly title: string;
    readonly icon: string;
    readonly description: string;
    options: Partial<WizardOptions>;
    constructor();
    /**
     * Any custom fields required
     */
    fields(): Field[];
    /**
     * Input function of a wizard used to filter or modify input data from source (entire project)
     * @param title title of the project
     * @param dir the chosed directory path
     * @param files files loaded from dir
     * @param options project options selected
     */
    abstract input(title: string, dir: string, files: string[], options: any): Promise<Project>;
    /**
     * Load function of a wizard used to filter or modify input data from source (single frame)
     * @param data the frame image data
     * @param options project options
     */
    abstract load(data: Buffer, options: any): Promise<Buffer>;
}
/**
 * Short info about a wizard
 */
export interface WizardInfo {
    name: string;
    title: string;
    icon: string;
    desc: string;
}
