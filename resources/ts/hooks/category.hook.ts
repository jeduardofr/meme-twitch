import useSWR from "swr";
import { useDeleteRequest, useGetRequest, usePostRequest } from "../utils/api";

export interface Category {
    id: number;
    name: string;
    url: string;
    mimeType: string | null;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}

// @@@ Add thumbnail field to upload image
export type CategoryForm = {
    name: string;
    url: string;
};

export default function useCategory() {
    const { data, error, mutate } = useSWR<Category[]>(
        "/categories",
        useGetRequest
    );

    async function createCategory(body: CategoryForm) {
        const category = await usePostRequest("/categories", {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        mutate([...data, category]);
    }

    async function deleteCategory(id: number) {
        await useDeleteRequest(`/categories/${id}`);
        mutate(data.filter(c => c.id !== id));
    }

    return {
        data,
        error,
        createCategory,
        deleteCategory
    };
}
