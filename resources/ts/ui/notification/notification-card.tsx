import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Notification, Level } from "../../store/notification";
import { useStoreActions } from "../../hooks/store";

interface Props {
    notification: Notification;
}

function NotificationCard({ notification }: Props) {
    const removeNotification = useStoreActions(
        state => state.notification.removeNotification
    );
    const timer = useRef(null);
    useEffect(() => {
        timer.current = setTimeout(remove, notification.time);
    }, []);

    function remove() {
        removeNotification(notification.id);
    }

    function onMouseLeave() {
        timer.current = setTimeout(remove, notification.time);
    }

    function onMouseEnter() {
        clearTimeout(timer.current);
    }

    function onClick() {
        clearTimeout(timer.current);
        remove();
    }

    return (
        <div
            className="w-full rounded-md p-4 bg-snow"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex flex-col flex-1">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-medium">{notification.title || ""}</p>
                    <button onClick={onClick}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                </div>
                <span className="mt-2 text-sm">{notification.message}</span>
            </div>
        </div>
    );
}

export default NotificationCard;
