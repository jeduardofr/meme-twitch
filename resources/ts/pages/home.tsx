import React from "react";
import { useStoreActions } from "../hooks/store.hook";
import Title from "../components/title";

function App() {
    const addNotification = useStoreActions(
        state => state.notification.addNotification
    );

    return (
        <div className="px-8 mt-4">
            <Title>Inicio</Title>
        </div>
    );
}

export default App;
