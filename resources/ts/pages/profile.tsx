import React from "react";
import { useStoreState } from "../hooks/store.hook";

function Profile() {
    const { user } = useStoreState(state => state.auth);

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
}

export default Profile;
