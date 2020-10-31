import { createStore } from "easy-peasy";
import category, { CategoryModel } from "./category";

export interface StoreModel {
    category: CategoryModel;
}

const storeModel: StoreModel = {
    category
};

export default createStore(storeModel);
