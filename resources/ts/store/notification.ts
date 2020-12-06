import { Action, action } from "easy-peasy";

export type Level = "error" | "success";

export interface Notification {
    id: number;
    level: Level;
    message: string;
    time: number;
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type PushNotification = Optional<Omit<Notification, "id">, "time">;

export interface NotificationModel {
    list: Notification[];
    addNotification: Action<NotificationModel, PushNotification>;
    removeNotification: Action<NotificationModel, number>;
}

const notificationModel: NotificationModel = {
    list: [],
    addNotification: action((state, payload) => {
        const id = Date.now();
        state.list.push({ id, ...payload, time: payload.time || 5000 });
    }),
    removeNotification: action((state, id) => {
        state.list = state.list.filter(c => c.id !== id);
    })
};

export default notificationModel;
