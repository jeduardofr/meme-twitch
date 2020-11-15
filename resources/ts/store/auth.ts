import { Action, action, Thunk, thunk } from "easy-peasy";

export interface User {
    name: string;
    lastName: string;
    email: string;
}

export interface AuthModel {
    isSignedIn: boolean;
    user: User;
    setUser: Action<AuthModel, User>;
    setIsSignedIn: Action<AuthModel, boolean>;
}

const authModel: AuthModel = {
    isSignedIn: false,
    user: {} as User,
    setUser: action((state, user) => {
        state.user = user;
    }),
    setIsSignedIn: action((state, isSignedIn) => {
        state.isSignedIn = isSignedIn;
    })
};

export default authModel;
