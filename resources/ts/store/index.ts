import { createStore } from "easy-peasy";
import category, { CategoryModel } from "./category";
import notification, { NotificationModel } from "./notification";

export interface StoreModel {
    category: CategoryModel;
    notification: NotificationModel;
}

const storeModel: StoreModel = {
    category,
    notification
};

export default createStore(storeModel);
