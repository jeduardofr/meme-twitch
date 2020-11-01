import useSWR from "swr";
import { Category } from "../store/category";

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function useCategory() {
    const { data, error } = useSWR<Category[]>(
        "http://meme-twitch.test/api/categories",
        fetcher
    );

    return {
        data,
        error
    };
}
