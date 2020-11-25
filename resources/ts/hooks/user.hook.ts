import axios, { useGetRequest } from "../utils/api";

function useUser() {
    function fetchProfile() {
        return useGetRequest("/profile/me");
    }

    function signOut() {
        return useGetRequest("/profile/sign-out");
    }

    return {
        fetchProfile,
        signOut
    };
}

export default useUser;
