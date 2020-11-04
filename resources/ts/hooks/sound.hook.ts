import useSWR from "swr";
import { useDeleteRequest, useGetRequest, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store";

export interface Sound {
    id: number;
    keyword: string;
    author: string;
    audioUrl: string;
    audioMimeType: string;
    thumbnailUrl: string;
    thumbnailMimeType: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export default function useSound() {
    const { data, error, mutate } = useSWR<Sound[]>("/sounds", useGetRequest);

    return {
        data,
        error
    };
}
