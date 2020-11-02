import React from "react";
import { StoreProvider } from "easy-peasy";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Home from "./pages/home";
import CategoryList from "./pages/category-list";
import SignIn from "./pages/sign-in";

import NotificationWrapper from "./ui/notification/notification-wrapper";
import Sidebar from "./ui/sidebar";

function App() {
    return (
        <StoreProvider store={store}>
            <BrowserRouter>
                <div className="container relative flex flex-col-reverse md:flex-row mx-auto bg-space-cadet rounded-t-2xl py-8 mt-16">
                    <div className="flex flex-1">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/categories"
                                component={CategoryList}
                            />
                            <Route exact path="/sign-in" component={SignIn} />
                        </Switch>
                    </div>

                    <Sidebar />
                    <NotificationWrapper />
                </div>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
