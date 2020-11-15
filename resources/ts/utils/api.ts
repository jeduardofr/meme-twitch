import axios, { AxiosRequestConfig } from "axios";

const baseURL = process.env.MIX_API;

export function useGetRequest(endpoint: string) {
    return axios(`${baseURL}${endpoint}`);
}

export function useFetcher(endpoint: string) {
    return useGetRequest(endpoint).then(res => res.data);
}

export function usePostRequest(
    endpoint: string,
    data: any,
    config?: AxiosRequestConfig
) {
    return axios.post(`${baseURL}${endpoint}`, data, config);
}

export function useDeleteRequest(
    endpoint: string,
    config?: AxiosRequestConfig
) {
    return axios.delete(`${baseURL}${endpoint}`, config);
}
