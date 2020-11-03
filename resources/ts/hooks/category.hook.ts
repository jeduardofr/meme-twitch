import useSWR from "swr";
import { useDeleteRequest, useGetRequest, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store";

export interface Category {
    id: number;
    name: string;
    url: string;
    mimeType: string | null;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}

export type ThumbnailType = "url" | "file";

export type CategoryForm = {
    name: string;
    url: string;
    file: FileList;
    type: ThumbnailType;
};

export default function useCategory() {
    const addNotification = useStoreActions(
        state => state.notification.addNotification
    );

    const { data, error, mutate } = useSWR<Category[]>(
        "/categories",
        useGetRequest
    );

    async function createCategory(body: CategoryForm) {
        const formData = new FormData();
        formData.append("name", body.name);
        if (body.type === "url") {
            formData.append("url", body.url);
        } else {
            formData.append("thumbnail", body.file[0]);
        }

        const category = await usePostRequest("/categories", {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: formData
        });

        mutate([...data, category]);
        addNotification({
            title: "Categoría",
            message: "Categoría agregada exitosamente",
            time: 3000,
            level: "success"
        });
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
