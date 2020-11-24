import { Action, action, Computed, computed } from "easy-peasy";

export interface User {
    name: string;
    lastName: string;
    email: string;
}

export interface AuthModel {
    isSignedIn: boolean;
    user: User;
    token: string;
    loading: boolean;
    setUser: Action<AuthModel, User>;
    setIsSignedIn: Action<AuthModel, boolean>;
    setIsLoading: Action<AuthModel, boolean>;
    setToken: Action<AuthModel, string>;
    isTokenSet: Computed<AuthModel, boolean>;
}

const authModel: AuthModel = {
    isSignedIn: false,
    user: {} as User,
    token: "",
    loading: true,
    setUser: action((state, user) => {
        state.user = user;
    }),
    setIsSignedIn: action((state, isSignedIn) => {
        state.isSignedIn = isSignedIn;
    }),
    setIsLoading: action((state, isLoading) => {
        state.loading = isLoading;
    }),
    setToken: action((state, token) => {
        if (token.length > 0) localStorage.setItem("token", token);
        else localStorage.removeItem("token");
        state.token = token;
    }),
    isTokenSet: computed(state => state.token.length > 0)
};

export default authModel;
