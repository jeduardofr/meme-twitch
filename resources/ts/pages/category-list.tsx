import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCategory from "../hooks/category.hook";
import CategoryCard from "../ui/category/category-card";
import Title from "../components/title";
import Spinner from "../components/spinner";
import { useStoreState } from "../hooks/store.hook";

function CategoryList() {
    const { isSignedIn } = useStoreState(state => state.auth);
    const { data, error } = useCategory();

    if (error) return <p>Error</p>;
    if (!data) return <Spinner />;

    return (
        <div className="w-full px-4 md:px-8 pb-4">
            <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <Title>Categorías</Title>
                {isSignedIn && (
                    <Link
                        to="/categories/form"
                        className="px-6 py-2 text-blue bg-yellow-500 rounded-md font-bold space-x-2 hover:shadow-lg hover:bg-yellow-400 focus:bg-yellow-500"
                    >
                        <FontAwesomeIcon icon="plus-circle" />
                        <span>Agregar</span>
                    </Link>
                )}
            </div>
            <div className="grid grid-cols-12 gap-4 w-full mt-8">
                {data.map(category => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default CategoryList;
