import { createStore } from "easy-peasy";
import notification, { NotificationModel } from "./notification";

export interface StoreModel {
    notification: NotificationModel;
}

const storeModel: StoreModel = {
    notification
};

export default createStore(storeModel);
