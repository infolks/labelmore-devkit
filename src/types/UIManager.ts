
/**
 * The blueprint of the app's user interface manager.
 */
export interface UIManager {

    /**
     * Whether app is in loading state or not (readonly)
     */
    loading: boolean

    /**
     * Whether app window is maximized or not (readonly)
     */
    isMaximized: boolean

    /**
     * Whether app window is minimized or not (readonly)
     */
    isMinimized: boolean

    /**
     * Whether app window is fullscreen or not (readonly)
     */
    isFullscreen: boolean

    /**
     * The status of the project (readonly)
     */
    status: string

    /**
     * Show loading screen
     */
    showLoading(): void

    /**
     * Hide loading screen
     */
    hideLoading(): void

    /**
     * Wait for a promise to complete while showing loading0
     * @param promise promise to wait for
     */
    wait<T>(promise: Promise<T>): Promise<T>

    /**
     * Show notification
     * @param message notification text
     * @param status notification status 'primary' | 'success' | 'warning' | 'danger'
     */
    notify(message: string, status?: 'primary' | 'success' | 'warning' | 'danger', icon?: string): void

    /**
     * Show a confirm box to user
     * @param message mesage to be shown to user
     */
    confirm(message: string): Promise<boolean>

    /**
     * Maximize the window
     */
    maximize(): void

    /**
     * Unmaximize or restore window
     */
    unmaximize(): void

    /**
     * Minimize the window
     */
    minimize(): void

    /**
     * Set fullscreen on or off
     * @param flag true sets window to fullscreen
     */
    fullscreen(flag?: boolean): void

    /**
     * Set status of the project. (The set value will persist until reset)
     * @param value value to be set
     */
    setStatus(value: string): void
    /**
     * Set status of the project
     * @param value value to be set
     * @param timeout how long the value should persist
     */
    setStatus(value: string, timeout: number): void
}