import axios, { useGetRequest } from "../utils/api";

function useUser() {
    function fetchProfile() {
        return useGetRequest("/profile/me");
    }

    return {
        fetchProfile
    };
}

export default useUser;
