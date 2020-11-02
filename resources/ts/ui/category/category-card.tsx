import React from "react";
import useCategory, { Category } from "../../hooks/category.hook";

type Props = {
    category: Category;
};

function CategoryCard({ category }: Props) {
    const { deleteCategory } = useCategory();

    return (
        <button
            className="relative col-span-2 square"
            onClick={() => deleteCategory(category.id)}
        >
            <img
                className="absolute inset-0 z-10 object-cover w-full h-full rounded-tl-3xl rounded-br-3xl"
                src={category.url}
                alt={category.name}
            />
            <span className="absolute inset-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-snow rounded-tl-3xl rounded-br-3xl">
                {category.name}
            </span>
        </button>
    );
}

export default CategoryCard;
