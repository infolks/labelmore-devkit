import { IpcRenderer } from "electron";
import Vue, {ComponentOptions} from 'vue'

export interface IpcWrapper {

    ipc: IpcRenderer

    /**
     * Send message to main process
     * @param event_tag tag of the event (namespaced)
     * @param payload payload to be passed with the event
     */
    send(channel: string, payload?: any): void

    /**
     * Send a request to channel and read its response
     * @param event_tag tag of the event (namespaced)
     * @param payload payload to be passed with the event
     */
    request<E>(channel: string, payload?: any): Promise<E>

    /**
     * Listen to a channel from main process
     * @param event_tag tag of the event (namespaced)
     * @param callback payload to be passed with the event
     */
    on(channel: string, callback: (event: any, payload: any) => void): void

    /**
     * Listen to a channel for one message
     * @param event_tag tag of the event (namespaced)
     * @param callback payload to be passed with the event
     */
    once(channel: string, callback: (event: any, payload: any) => void): void
}


// extend vue

// declare module "vue/types/options" {
//     interface ComponentOptions<V extends Vue> {
//         ipc?: IpcWrapper;
//     }
// }

// declare module "vue/types/vue" {
//     interface Vue {
//         $ipc: IpcWrapper;
//     }
// }