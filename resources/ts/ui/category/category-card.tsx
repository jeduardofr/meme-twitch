import React from "react";
import clsx from "clsx";
import { useHistory, Link } from "react-router-dom";
import useCategory, { Category } from "../../hooks/category.hook";
import CardMenu from "../card-menu";

type Props = {
    category: Category;
};

function CategoryCard({ category }: Props) {
    const { deleteCategory } = useCategory();
    const history = useHistory();

    function onEdit() {
        history.push(`/categories/form/${category.id}`);
    }

    function onRemove() {
        // @@@ Add alert to make sure users wants to delete
        deleteCategory(category.id);
    }

    const borders = "rounded-tl-3xl rounded-br-3xl rounded-bl-md rounded-tr-md";

    return (
        <div
            className={clsx(
                "relative col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 square bg-center bg-cover",
                borders
            )}
            style={{
                backgroundImage: `url(${category.url})`
            }}
        >
            <CardMenu onEdit={onEdit} onRemove={onRemove} />
            <Link
                to={`/categories/${category.id}`}
                className={clsx(
                    "absolute inset-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-50",
                    borders
                )}
            >
                <span className="text-white font-medium text-lg text-center">
                    {category.name}
                </span>
            </Link>
        </div>
    );
}

export default CategoryCard;
