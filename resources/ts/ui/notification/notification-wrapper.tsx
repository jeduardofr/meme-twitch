import React from "react";
import clsx from "clsx";
import { useStoreState } from "../../hooks/store.hook";
import NotificationCard from "./notification-card";

function NotificationWrapper() {
    const notifications = useStoreState(state => state.notification.list);

    return (
        <div
            className={clsx("fixed right-0 top-0 mr-4 mt-4 w-64 space-y-2", {
                "space-y-2": notifications.length > 1
            })}
        >
            {notifications.map(n => {
                return <NotificationCard key={n.id} notification={n} />;
            })}
        </div>
    );
}

export default NotificationWrapper;
