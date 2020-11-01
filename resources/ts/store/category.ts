import axios from "axios";
import { Action, action, Thunk, thunk } from "easy-peasy";

export interface Category {
    id: number;
    name: string;
    url: string;
    mimeType: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface CategoryRequest {
    id: number;
    url?: string;
    name: string;
    thumbnail?: string;
}

export interface CategoryModel {
    loaded: boolean;
    list: Category[];
    setLoaded: Action<CategoryModel, boolean>;
    setList: Action<CategoryModel, Category[]>;
    fetchList: Thunk<CategoryModel>;
    // removeCategory: Thunk<CategoryModel, number>;
    // saveCategory: Thunk<CategoryModel, CategoryRequest>;
    // updateCategory: Thunk<CategoryModel, CategoryRequest>;
}

const categoryModel: CategoryModel = {
    loaded: false,
    list: [],
    setLoaded: action((state, loaded) => {
        state.loaded = loaded;
    }),
    setList: action((state, list) => {
        state.list = list;
    }),
    fetchList: thunk(async actions => {
        const response = await axios.get(
            "http://meme-twitch.test/api/categories"
        );
        actions.setList(response.data);
        actions.setLoaded(true);
    })
};

export default categoryModel;
