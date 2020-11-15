import useSWR from "swr";
import { useDeleteRequest, useFetcher, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store.hook";

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
        useFetcher
    );

    async function createCategory(body: CategoryForm) {
        const formData = new FormData();
        formData.append("name", body.name);
        formData.append(
            "thumbnail",
            body.type === "url" ? body.url : body.file[0]
        );

        const category = await usePostRequest("/categories", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        mutate([...data, category.data]);
        addNotification({
            message: "Categoría agregada exitosamente",
            time: 3000,
            level: "success"
        });
    }

    async function updateCategory(id: number, body: CategoryForm) {
        const formData = new FormData();
        formData.append("name", body.name);
        formData.append(
            "thumbnail",
            body.type === "url" ? body.url : body.file[0]
        );
        formData.append("_method", "PUT");

        const category = await usePostRequest(`/categories/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        mutate(
            data.map(c => {
                if (id === c.id) {
                    return category.data;
                }

                return c;
            })
        );

        addNotification({
            message: "Categoría actualizada exitosamente",
            time: 3000,
            level: "success"
        });
    }

    async function deleteCategory(id: number) {
        await useDeleteRequest(`/categories/${id}`);
        mutate(data.filter(c => c.id !== id));
        addNotification({
            message: "Categoría eliminada exitosamente",
            time: 3000,
            level: "success"
        });
    }

    return {
        data,
        error,
        createCategory,
        deleteCategory,
        updateCategory
    };
}
