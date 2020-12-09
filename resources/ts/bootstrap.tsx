import React, { useEffect } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import { useStoreState, useStoreActions } from "./hooks/store.hook";
import useUser from "./hooks/user.hook";
import useAuth from "./hooks/auth.hook";
import { PublicRoutes, SessionRoutes, PrivateRoutes } from "./routes";
import NotFound from "./pages/not-found";

import Sidebar from "./ui/sidebar";
import Spinner from "./components/spinner";

function Bootstrap() {
    const { loading, isTokenSet, isSignedIn } = useStoreState(state => state.auth);
    const { setIsSignedIn, setUser } = useStoreActions(state => state.auth);
    const { addNotification } = useStoreActions(state => state.notification);
    const { fetchProfile } = useUser();
    const { loadConfig, cleanUpConfig } = useAuth();

    useEffect(() => {
        loadConfig();
    }, []);

    useEffect(() => {
        if (isTokenSet) {
            setIsSignedIn(true);
            fetchProfile()
                .then(response => setUser(response.data))
                .catch(_ => {
                    cleanUpConfig();
                    addNotification({
                        time: 5000,
                        level: "error",
                        message: "Lo sentimos, necesitas volver a iniciar sesión."
                    });
                });
        }
    }, [isTokenSet]);

    if (loading) return <Spinner />;

    return (
        <BrowserRouter>
            <div className="container max-w-screen-2xl relative flex flex-col-reverse mx-auto mt-12 bg-blue-dark md:flex-row space-x-0 min-h-with-gap">
                <div className="flex flex-1 bg-blue md:rounded-tl-xl">
                    <Switch>
                        {Object.keys(PublicRoutes).map(key => {
                            const route = PublicRoutes[key];
                            return (
                                <Route
                                    exact
                                    key={key}
                                    path={route.path}
                                    component={route.component}
                                />
                            );
                        })}
                        {Object.keys(SessionRoutes).map(key => {
                            const route = SessionRoutes[key];
                            return (
                                <Route
                                    exact
                                    key={key}
                                    path={route.path}
                                    render={_ =>
                                        isSignedIn ? (
                                            <Redirect to="/profile" />
                                        ) : (
                                            <route.component />
                                        )
                                    }
                                />
                            );
                        })}
                        {Object.keys(PrivateRoutes).map(key => {
                            const route = PrivateRoutes[key];
                            return (
                                <Route
                                    exact
                                    key={key}
                                    path={route.path}
                                    render={_ =>
                                        isSignedIn ? (
                                            <route.component />
                                        ) : (
                                            <Redirect to="/sign-in" />
                                        )
                                    }
                                />
                            );
                        })}
                        <Route component={NotFound} />
                    </Switch>
                </div>

                <Sidebar />
            </div>
        </BrowserRouter>
    );
}

export default Bootstrap;
