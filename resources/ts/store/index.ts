import { createStore } from "easy-peasy";
import notification, { NotificationModel } from "./notification";
import auth, { AuthModel } from "./auth";

export interface StoreModel {
    notification: NotificationModel;
    auth: AuthModel;
}

const storeModel: StoreModel = {
    notification,
    auth
};

export default createStore(storeModel);
