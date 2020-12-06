import { useStoreActions } from "./store.hook";

export type PushNotificationPayload = {
    message: string;
    time?: number;
};

function useNotification() {
    const addNotification = useStoreActions(state => state.notification.addNotification);

    function success(payload: PushNotificationPayload) {
        addNotification({
            level: "success",
            message: payload.message,
            time: payload.time
        });
    }

    function error(payload: PushNotificationPayload) {
        addNotification({
            level: "error",
            message: payload.message,
            time: payload.time
        });
    }

    return {
        success,
        error
    };
}

export default useNotification;
