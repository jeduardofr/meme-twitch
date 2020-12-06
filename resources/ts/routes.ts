import React from "react";

import Home from "./pages/home";
import CategoryList from "./pages/category-list";
import CategoryForm from "./pages/category-form";
import CategorySoundList from "./pages/category-sound-list";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import SoundList from "./pages/sound-list";
import SoundForm from "./pages/sound-form";
import Profile from "./pages/profile";

export type Route = {
    [key: string]: {
        component: React.FC;
        path: string;
    };
};

export const PublicRoutes: Route = {
    Home: {
        component: Home,
        path: "/"
    },
    CategoryList: {
        component: CategoryList,
        path: "/categories"
    },
    CategoryForm: {
        component: CategoryForm,
        path: "/categories/form/:id?"
    },
    SoundList: {
        component: SoundList,
        path: "/sounds"
    },
    SoundForm: {
        component: SoundForm,
        path: "/sounds/form/:id?"
    },
    CategorySoundList: {
        component: CategorySoundList,
        path: "/categories/:id"
    }
};

export const SessionRoutes: Route = {
    SignIn: {
        component: SignIn,
        path: "/sign-in"
    },
    SignUp: {
        component: SignUp,
        path: "/sign-up"
    }
};

export const PrivateRoutes: Route = {
    Profile: {
        component: Profile,
        path: "/profile"
    }
};
