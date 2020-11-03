import React from "react";
import { StoreProvider } from "easy-peasy";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Home from "./pages/home";
import CategoryList from "./pages/category-list";
import SignIn from "./pages/sign-in";
import NotFound from "./pages/not-found";

import NotificationWrapper from "./ui/notification/notification-wrapper";
import Sidebar from "./ui/sidebar";

function App() {
    return (
        <StoreProvider store={store}>
            <BrowserRouter>
                <div className="container mx-auto relative bg-blue-dark flex flex-col-reverse md:flex-row space-x-0">
                    <div className="flex flex-1 bg-blue">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/categories"
                                component={CategoryList}
                            />
                            <Route exact path="/sign-in" component={SignIn} />
                            <Route component={NotFound} />
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
