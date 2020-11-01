import useSWR from "swr";
import { useGetRequest } from "../utils/api";

export interface Category {
    id: number;
    name: string;
    url: string;
    mimeType: string | null;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}

export default function useCategory() {
    const { data, error } = useSWR<Category[]>("/categories", useGetRequest);

    return {
        data,
        error
    };
}
