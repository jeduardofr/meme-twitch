import React from "react";
import { StoreProvider } from "easy-peasy";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
import CategoryList from "./pages/category-list";
import Navigation from "./ui/navigation";
import NotificationWrapper from "./ui/notification/notification-wrapper";

function App() {
    return (
        <StoreProvider store={store}>
            <BrowserRouter>
                <div className="container mx-auto flex flex-row mt-4 relative">
                    <div className="flex flex-1">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/categories"
                                component={CategoryList}
                            />
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
