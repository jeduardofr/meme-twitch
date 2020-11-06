import React from "react";
import { StoreProvider } from "easy-peasy";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Home from "./pages/home";
import CategoryList from "./pages/category-list";
import CategoryForm from "./pages/category-form";
import CategorySoundList from "./pages/category-sound-list";
import SignIn from "./pages/sign-in";
import NotFound from "./pages/not-found";
import SoundList from "./pages/sound-list";
import SoundForm from "./pages/sound-form";

import NotificationWrapper from "./ui/notification/notification-wrapper";
import Sidebar from "./ui/sidebar";

function App() {
    return (
        <StoreProvider store={store}>
            <BrowserRouter>
                <NotificationWrapper />
                <div className="container mx-auto relative bg-blue-dark flex flex-col-reverse md:flex-row space-x-0 mt-12">
                    <div className="flex flex-1 bg-blue rounded-t-xl">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/categories"
                                component={CategoryList}
                            />
                            <Route
                                exact
                                path="/categories/form/:id?"
                                component={CategoryForm}
                            />
                            <Route
                                exact
                                path="/categories/:id"
                                component={CategorySoundList}
                            />
                            <Route exact path="/sounds" component={SoundList} />
                            <Route
                                exact
                                path="/sounds/form/:id?"
                                component={SoundForm}
                            />
                            <Route
                                exact
                                path="/sounds/form"
                                component={SoundForm}
                            />

                            <Route exact path="/sign-in" component={SignIn} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>

                    <Sidebar />
                </div>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
