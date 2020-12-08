import axios, { AxiosRequestConfig } from "axios";
import useNotification from "../hooks/notification.hook";

const instance = axios.create({ baseURL: process.env.MIX_API });

export function useGetRequest(endpoint: string) {
    return instance.get(endpoint);
}

export function useFetcher(endpoint: string) {
    return useGetRequest(endpoint).then(res => res.data);
}

export function usePostRequest(endpoint: string, data: any, config?: AxiosRequestConfig) {
    return instance.post(endpoint, data, config);
}

export function useDeleteRequest(endpoint: string, config?: AxiosRequestConfig) {
    return instance.delete(endpoint, config);
}

export default instance;
