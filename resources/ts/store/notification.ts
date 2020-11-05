import { Action, action } from "easy-peasy";

export type Level = "error" | "success";

export interface Notification {
    id: number;
    level: Level;
    message: string;
    time: number;
}

export interface NotificationModel {
    list: Notification[];
    addNotification: Action<NotificationModel, Omit<Notification, "id">>;
    removeNotification: Action<NotificationModel, number>;
}

const notificationModel: NotificationModel = {
    list: [],
    addNotification: action((state, { time = 6000, ...payload }) => {
        const id = Date.now();
        state.list.push({ id, time, ...payload });
    }),
    removeNotification: action((state, id) => {
        state.list = state.list.filter(c => c.id !== id);
    })
};

export default notificationModel;
