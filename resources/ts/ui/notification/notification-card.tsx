import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Notification, Level } from "../../store/notification";
import { useStoreActions } from "../../hooks/store.hook";

interface Props {
    notification: Notification;
}

function NotificationCard({ notification }: Props) {
    const removeNotification = useStoreActions(state => state.notification.removeNotification);
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
            className={clsx("w-full bg-blue p-4 border-l-4 rounded-md shadow-lg", {
                "border-green": notification.level === "success",
                "border-pink": notification.level === "error"
            })}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-between flex-row">
                <span className="text-sm font-medium leading-5 text-white">
                    {notification.message}
                </span>
                <div className="flex flex-row justify-between items-start">
                    <button onClick={onClick} className="text-white">
                        <FontAwesomeIcon icon="times" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotificationCard;
