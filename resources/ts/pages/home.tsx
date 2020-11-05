import React from "react";
import { useStoreActions } from "../hooks/store.hook";

function App() {
    const addNotification = useStoreActions(
        state => state.notification.addNotification
    );

    return (
        <div>
            <button
                className="mt-64"
                onClick={() => {
                    addNotification({
                        message: "test",
                        time: 2000,
                        level: "success"
                    });
                }}
            >
                Home
            </button>
        </div>
    );
}

export default App;
