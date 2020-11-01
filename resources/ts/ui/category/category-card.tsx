import React from "react";
import { Category } from "../../store/category";

type Props = {
    category: Category;
};

function CategoryCard({ category }: Props) {
    return (
        <div className="col-span-2">
            <h1 className="text-snow">{category.name}</h1>
            <img src={category.url} alt={category.name} />
        </div>
    );
}

export default CategoryCard;
