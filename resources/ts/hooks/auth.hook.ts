import axios, { usePostRequest } from "../utils/api";
import { useStoreActions } from "../hooks/store.hook";

export type SignInForm = {
    email: string;
    password: string;
};

function useAuth() {
    const { setToken, setIsSignedIn, setIsLoading } = useStoreActions(
        state => state.auth
    );

    function signIn(data: SignInForm) {
        return usePostRequest("/auth/sign-in", data, {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        }).then(response => {
            const { token } = response.data;
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setToken(token);
            setIsSignedIn(true);
        });
    }

    function loadConfig() {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setToken(token);
        }
        setIsLoading(false);
    }

    function cleanUpConfig() {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setToken("");
        setIsSignedIn(false);
    }

    return {
        signIn,
        loadConfig,
        cleanUpConfig
    };
}

export default useAuth;
