import React from "react";
import { useStoreState } from "../../hooks/store.hook";
import NotificationCard from "./notification-card";

function NotificationWrapper() {
    const notifications = useStoreState(state => state.notification.list);

    return (
        <div className="fixed left-0 right-0 top-0 w-full">
            {notifications.map(n => {
                return <NotificationCard key={n.id} notification={n} />;
            })}
        </div>
    );
}

export default NotificationWrapper;
