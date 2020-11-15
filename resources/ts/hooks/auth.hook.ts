import { usePostRequest } from "../utils/api";

export type SignInForm = {
    email: string;
    password: string;
};

function useAuth() {
    function signIn(data: SignInForm) {
        return usePostRequest("/auth/sign-in", data, {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        });
    }

    return {
        signIn
    };
}

export default useAuth;
