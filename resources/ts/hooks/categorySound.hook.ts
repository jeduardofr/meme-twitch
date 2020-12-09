import useSWR from "swr";
import { useFetcher } from "../utils/api";
import { Sound } from "./sound.hook";
import { Category } from "./category.hook";
type CategorySound = Category & { sounds: Sound[] };

export default function useCategorySound(id: number) {
    const { data, error } = useSWR<CategorySound>(`/category_sound/${id}`, useFetcher);

    return {
        data,
        error
    };
}
