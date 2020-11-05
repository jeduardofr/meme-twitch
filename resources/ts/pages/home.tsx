import React from "react";
import { useStoreActions } from "../hooks/store.hook";

function App() {
    const addNotification = useStoreActions(
        state => state.notification.addNotification
    );

    return (
        <div className="px-8">
            <h1 className="mt-4 text-light-purple text-5xl font-bold">
                Inicio
            </h1>
        </div>
    );
}

export default App;
