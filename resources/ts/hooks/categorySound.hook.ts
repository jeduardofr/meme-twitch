import useSWR from "swr";
import { useDeleteRequest, useFetcher, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store.hook";
import useNotification from "./notification.hook";
import {Sound} from "./sound.hook";
import { Category } from "./category.hook";
type CategorySound = Category&{sounds:Sound[]}

export default function useCategorySound(id:number) {
    const { data, error } = useSWR<CategorySound>(`/categorySound/${id}`, useFetcher);

    return {
        data,
        error
    };
}
