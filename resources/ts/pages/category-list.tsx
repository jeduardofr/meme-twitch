import React from "react";
import useCategory from "../hooks/category.hook";
import CategoryCard from "../ui/category/category-card";
import Form from "../ui/category/form";

function CategoryList() {
    const { data, error } = useCategory();

    if (error) return <p>Error</p>;
    if (!data) return <p>Loading</p>;

    return (
        <div className="w-full px-8">
            <Form />
            <h1 className="text-5xl text-snow font-bold">Categorías</h1>
            <div className="grid grid-cols-12 gap-4 w-full mt-4">
                {data.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default CategoryList;
