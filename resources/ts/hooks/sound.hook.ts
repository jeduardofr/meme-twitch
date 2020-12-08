import useSWR from "swr";
import { useDeleteRequest, useFetcher, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store.hook";

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

export type ThumbnailType = "url" | "file";

export type SoundForm = {
    keyword: string;
    author: string;
    audio: FileList;
    url: string;
    file: FileList;
    type: ThumbnailType;
    categories: string[];
};

export default function useSound() {
    const addNotification = useStoreActions(
        state => state.notification.addNotification
    );

    const { data, error, mutate } = useSWR<Sound[]>("/sounds", useFetcher);

    async function createSound(body: SoundForm) {
        const formData = new FormData();
        body.categories.forEach((v,i)=>formData.append(`categories[${i}]`, v))
        formData.append("keyword", body.keyword);
        formData.append("author", body.author);
        formData.append("audio", body.audio[0]);
        formData.append(
            "thumbnail",
            body.type === "url" ? body.url : body.file[0]
        );
        
        const sound = await usePostRequest("/sounds", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        mutate([...data, sound.data]);
        addNotification({
            message: "Audio agregado exitosamente",
            time: 3000,
            level: "success"
        });
    }

    async function updateSound(id: number, body: SoundForm) {
        const formData = new FormData();
        body.categories.forEach((v,i)=>formData.append(`categories[${i}]`, v))
        formData.append("keyword", body.keyword);
        formData.append("audio", body.audio[0]);
        formData.append(
            "thumbnail",
            body.type === "url" ? body.url : body.file[0]
        );
        formData.append("_method", "PUT");
        
        const sound = await usePostRequest(`/sounds/${id}`, formData, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        });


        mutate(
            data.map(c => {
                if (id === c.id) {
                    return sound.data;
                }
                return c;
            })
        );

        addNotification({
            message: "Audio actualizado exitosamente",
            time: 3000,
            level: "success"
        });
    }

    async function deleteSound(id: number) {
        await useDeleteRequest(`/sounds/${id}`);
        mutate(data.filter(c => c.id !== id));
    }

    return {
        data,
        error,
        createSound,
        updateSound,
        deleteSound
    };
}
