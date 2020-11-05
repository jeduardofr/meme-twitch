import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useCategory from "../hooks/category.hook";

function CategorySoundList() {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { id } = useParams<{ id: string | null }>();
    const { data } = useCategory();

    useEffect(() => {
        if (!data) return;

        if (data.findIndex(c => c.id === parseInt(id, 10)) === -1)
            history.push("/categories");
        else setLoading(false);
    }, [data]);

    // @@@ Change for a spinner
    if (loading) return <h1>Loading</h1>;

    const category = data.find(c => c.id === parseInt(id, 10));

    return (
        <div className="px-8">
            <h1 className="mt-4 text-light-purple text-5xl font-bold">
                {category.name}
            </h1>
        </div>
    );
}

export default CategorySoundList;
