import { Frame, Project } from "../modules/core/project";
import { Wizard, WizardType, WizardInfo } from "../modules/base/Wizard";
import { Source, SourceInfo } from "../modules/base/Source";
import { Encoder, EncoderInfo } from "../modules/base/Encoder";
export interface ProjectManager {
    /**
     * current frame of the project
     */
    frame: Frame;
    /**
     * working project
     */
    project: Project;
    /**
     * Whether the current frame is the first frame or not
     */
    isFirstFrame: boolean;
    /**
     * Whether the current frame is the last frame or not
     */
    isLastFrame: boolean;
    /**
     * Number of labels in the entire project
     */
    boxCount: number;
    /**
     * Register a new wizard to project manager
     * @param name name to register the wizard
     * @param wizard wizard object
     */
    registerWizard(name: string, wizard: Wizard): void;
    /**
     * Register a new project source
     * @param name name of the source
     * @param source source to be registered
     */
    registerSource(name: string, source: Source): void;
    /**
     * Register a new project encoder
     * @param name name of the encoder
     * @param encoder encoder to be registered
     */
    registerEncoder(name: string, encoder: Encoder): void;
    /**
     * Return a list of  registered wizards
     * @param type type of the wizards to list
     */
    wizardList(type?: WizardType): WizardInfo[];
    /**
     * Return a list of registered sources
     */
    sourcesList(): SourceInfo[];
    /**
     * Return a list of registered encoders
     */
    encodersList(): EncoderInfo[];
    /**
     * get a wizard corresponding to a registered name
     * @param name name corresponding to the wizard
     */
    getWizard(name: string): Wizard;
    /**
     * get a wizard corresponding to a registered name
     * @param name name corresponding to the source
     */
    getSource(name: string): Source;
    /**
     * get an encoder corresponding to a registered name
     * @param name name corresponding to the encoder
     */
    getEncoder(name: string): Encoder;
    /**
     * check if a wizard is already registered
     * @param name name of the wizard
     */
    hasWizard(name: string): boolean;
    /**
     * check if a source is already registered
     * @param name name of the source
     */
    hasSource(name: string): boolean;
    /**
     * check if an encoder is already registered
     * @param name name of the encoder
     */
    hasEncoder(name: string): boolean;
    /**
     * load next frame
     * @param allowExport whether to export the current frame to the output directory
     */
    nextFrame(allowExport?: boolean): Promise<void>;
    /**
     * load previous frame
     * @param allowExport whether to export the current frame to the output directory
     */
    prevFrame(allowExport?: boolean): Promise<void>;
    /**
     * Load frame at a specified index
     * @param index index of the frame to load
     * @param allowExport whether to export the current frame to the output directory
     *
     */
    loadFrame(index: number, allowExport: boolean): Promise<void>;
}
