import React from "react";
import clsx from "clsx";
import { useStoreState } from "../../hooks/store";
import NotificationCard from "./notification-card";

function NotificationWrapper() {
    const notifications = useStoreState(state => state.notification.list);

    return (
        <div
            className={clsx(
                "fixed right-0 top-0 w-64 mr-8 mt-8",
                notifications.length > 1 && "space-y-4"
            )}
        >
            {notifications.map(n => {
                return <NotificationCard key={n.id} notification={n} />;
            })}
        </div>
    );
}

export default NotificationWrapper;
