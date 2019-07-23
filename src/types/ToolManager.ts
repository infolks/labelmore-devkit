import { AnnotationTool, AnnotationToolInfo } from "../modules/base/AnnotationTool";


/**
 * The blueprint of the app's tool manager.
 */
export interface ToolManager {

    /**
     * Tools for the current project
     */
    projectTools: string[]

    /**
     * all registered tools (names)
     */
    all: string[]

    /**
     * current active tool
     */
    tool: AnnotationTool

    /**
     * Info of the tools registered
     */
    toolset: AnnotationToolInfo[]

    /**
     * Info of the tools selected for current project
     */
    projectToolset: AnnotationTool[]

    /**
     * Reister a tool
     * @param name Name of the tool (unique)
     * @param tool The tool to register
     */
    register(name: string, tool: AnnotationTool): void

    /**
     * check whether a tool is present or not
     * @param name name of the tool
     */
    hasTool(name: string): boolean

    /**
     * Activate a tool
     * @param name name of the tool to activate
     */
    activate(name: string): void
}