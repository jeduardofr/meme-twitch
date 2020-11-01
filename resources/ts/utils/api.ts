const baseURL = process.env.MIX_API;

export function useGetRequest(endpoint: string) {
    return fetch(`${baseURL}${endpoint}`).then(res => res.json());
}

export function usePostRequest(endpoint: string, config?: RequestInit) {
    return fetch(`${baseURL}${endpoint}`, {
        method: "POST",
        ...config
    }).then(res => res.json());
}

export function useDeleteRequest(endpoint: string, config?: RequestInit) {
    return fetch(`${baseURL}${endpoint}`, {
        method: "DELETE",
        ...config
    }).then(res => res.json());
}
