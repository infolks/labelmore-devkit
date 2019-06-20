/// <reference types="node" />
import { Project } from "../core/project";
export interface WizardOptions {
    allowOutputSelection: boolean;
    allowToolSelection: boolean;
    allowLabelClassCreation: boolean;
    allowKeypointCreation: boolean;
    allowPanelSelection: boolean;
}
export declare const DEFAULT_WIZARD_OPTIONS: {
    allowOutputSelection: boolean;
    allowToolSelection: boolean;
    allowLabelClassCreation: boolean;
    allowKeypointCreation: boolean;
    allowPanelSelection: boolean;
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
    protected options: Partial<WizardOptions>;
    constructor();
    readonly allowExtensions: boolean;
    abstract input(title: string, dir: string, files: string[], options: any): Promise<Project>;
    abstract load(data: Buffer, options: any): Promise<Buffer>;
}
/**
 * Information about a wizard
 */
export interface WizardInfo {
    name: string;
    title: string;
    icon: string;
    desc: string;
}
