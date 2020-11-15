import { usePostRequest } from "../utils/api";

export type SignInForm = {
    email: string;
    password: string;
};

function useAuth() {
    async function signIn(data: SignInForm): Promise<boolean> {
        try {
            const response = await usePostRequest("/auth/sign-in", {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return {
        signIn
    };
}

export default useAuth;
