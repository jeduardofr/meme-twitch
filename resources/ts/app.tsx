import React from "react";
import { StoreProvider } from "easy-peasy";
import store from "./store";

import NotificationWrapper from "./ui/notification/notification-wrapper";
import Bootstrap from "./bootstrap";

function App() {
    return (
        <StoreProvider store={store}>
            <NotificationWrapper />
            <Bootstrap />
        </StoreProvider>
    );
}

export default App;
