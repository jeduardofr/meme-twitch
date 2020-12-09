import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useCategory, { CategoryForm, ThumbnailType } from "../hooks/category.hook";
import Form from "../ui/category/form";
import Spinner from "../components/spinner";

function CategoryForm() {
    const params = useParams<{ id: string | null }>();
    const history = useHistory();
    const { data, createCategory, updateCategory } = useCategory();

    const [loading, setLoading] = useState(true);
    const [defaultValues, setDefaultValues] = useState({} as CategoryForm);

    useEffect(() => {
        if (!data) return;

        if (params.id) {
            const category = data.find(c => c.id === parseInt(params.id, 10));
            if (!category) {
                history.push("/categories");
                return;
            }

            const { name, url, mimeType } = category;
            setDefaultValues({
                name,
                url,
                file: null,
                type: (mimeType ? "file" : "url") as ThumbnailType
            });
        } else {
            setDefaultValues({
                type: "url" as ThumbnailType,
                name: "",
                url: "",
                file: null
            });
        }

        setLoading(false);
    }, [data]);

    function onSubmit(data: CategoryForm) {
        if (params.id) {
            updateCategory(parseInt(params.id, 10), data);
        } else {
            createCategory(data);
            history.push("/categories");
        }
    }

    if (loading) return <Spinner />;

    return (
        <div className="w-full px-8">
            <h1 className="text-5xl text-light-purple font-bold mt-4">
                {params.id ? "Editar" : "Agregar"} Categoría
            </h1>

            <Form onSubmit={onSubmit} defaultValues={defaultValues} />
        </div>
    );
}

export default CategoryForm;
