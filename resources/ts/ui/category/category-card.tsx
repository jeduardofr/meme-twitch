import React from "react";
import { useHistory } from "react-router-dom";
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

    return (
        <div
            className="relative col-span-2 square rounded-tl-3xl rounded-br-3xl bg-center bg-cover"
            style={{
                backgroundImage: `url(${category.url})`
            }}
        >
            <CardMenu onEdit={onEdit} onRemove={onRemove} />
            <span className="absolute inset-0 z-20 flex rounded-tl-3xl rounded-br-3xl items-center justify-center w-full h-full bg-black bg-opacity-75 text-white">
                {category.name}
            </span>
        </div>
    );
}

export default CategoryCard;
