import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCategory from "../hooks/category.hook";
import CategoryCard from "../ui/category/category-card";
import Form from "../ui/category/form";
import Title from "../components/title";

function CategoryList() {
    const { data, error } = useCategory();

    if (error) return <p>Error</p>;
    if (!data) return <p>Loading</p>;

    return (
        <div className="w-full px-8">
            <div className="mt-4 flex flex-row justify-between items-center">
                <Title>Categorías</Title>
                <Link
                    to="/categories/form"
                    className="px-6 py-2 text-blue bg-yellow rounded-md font-bold space-x-2 hover:shadow-lg hover:bg-yellow-400 focus:bg-yellow-500"
                >
                    <FontAwesomeIcon icon="plus-circle" />
                    <span>Agregar</span>
                </Link>
            </div>
            <div className="grid grid-cols-12 gap-4 w-full mt-4">
                {data.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default CategoryList;
