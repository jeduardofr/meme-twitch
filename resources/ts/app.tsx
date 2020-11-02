import React from "react";
import { StoreProvider } from "easy-peasy";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Home from "./pages/home";
import CategoryList from "./pages/category-list";
import SignIn from "./pages/sign-in";

import NotificationWrapper from "./ui/notification/notification-wrapper";
import Navigation from "./ui/navigation";

function App() {
    return (
        <StoreProvider store={store}>
            <BrowserRouter>
                <div className="md:container relative flex flex-col-reverse md:flex-row mx-auto mt-4">
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

                    <Navigation />
                    <NotificationWrapper />
                </div>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
