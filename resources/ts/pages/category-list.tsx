import React from "react";
import useCategory from "../hooks/category.hook";
import CategoryCard from "../ui/category/category-card";
import Form from "../ui/category/form";

function CategoryList() {
    const { data, error } = useCategory();

    if (error) return <p>Error</p>;
    if (!data) return <p>Loading</p>;

    return (
        <div>
            <Form />
            <h1 className="text-4xl text-snow">Categorías</h1>
            <div className="grid grid-cols-12 gap-4">
                {data.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default CategoryList;
