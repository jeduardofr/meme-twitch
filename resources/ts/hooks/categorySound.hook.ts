import useSWR from "swr";
import { useDeleteRequest, useFetcher, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store.hook";
import useNotification from "./notification.hook";
import {Sound} from "./sound.hook";
import { Category } from "./category.hook";


export default function useCategorySound(id:number) {
    const { data, error } = useSWR<Sound[]>(`/categorySound/${id}`, useFetcher);
    const sounds = data;

    return {
        sounds,
        error
    };
}
