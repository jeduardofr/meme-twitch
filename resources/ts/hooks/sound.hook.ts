import useSWR from "swr";
import { useDeleteRequest, useGetRequest, usePostRequest } from "../utils/api";
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
    audioUrl: FileList;
    // audioType: string;
    thumbnailUrl: string;
    thumbnail: FileList;
    thumbnailType: ThumbnailType;
};

export default function useSound() {
    const addNotification = useStoreActions(
        state => state.notification.addNotification
    );

    const { data, error, mutate } = useSWR<Sound[]>("/sounds", useGetRequest);

    async function createSound(body: SoundForm) {
        const formData = new FormData();
        formData.append("keyword", body.keyword);
        formData.append("author", body.author);
        formData.append("audio", body.audioUrl[0]);
        formData.append(
            "thumbnail",
            body.thumbnailType === "url" ? body.thumbnailUrl : body.thumbnail[0]
        );

        const sound = await usePostRequest("/sounds", {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: formData
        });

        mutate([...data, sound]);
        addNotification({
            title: "Audio",
            message: "Audio agregado exitosamente",
            time: 3000,
            level: "success"
        });
    }

    async function updateSound(id: number, body: SoundForm) {
        const formData = new FormData();
        formData.append("keyword", body.keyword);
        formData.append("audio", body.audioUrl[0]);
        formData.append(
            "thumbnail",
            body.thumbnailType === "url" ? body.thumbnailUrl : body.thumbnail[0]
        );
        formData.append("_method", "PUT");

        const sound = await usePostRequest(`/sounds/${id}`, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: formData
        });

        mutate(
            data.map(c => {
                if (id === c.id) {
                    return sound;
                }

                return c;
            })
        );

        addNotification({
            title: "Audio",
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
