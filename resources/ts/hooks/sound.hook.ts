import useSWR from "swr";
import { useDeleteRequest, useGetRequest, usePostRequest } from "../utils/api";
import { useStoreActions } from "./store";

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
    audioUrl: string;
    audioMimeType: string;
    thumbnail: FileList;
    thumbnailUrl: string;
    thumbnailMimeType: ThumbnailType;
};

async function createCategory(body: SoundForm) {
    const formData = new FormData();
    formData.append("keyword", body.keyword);
    formData.append(
        "thumbnail",
        body.thumbnailMimeType === "url" ? body.thumbnailUrl : body.thumbnail[0]
    );
}

export default function useSound() {
    const { data, error, mutate } = useSWR<Sound[]>("/sounds", useGetRequest);

    return {
        data,
        error
    };
}
