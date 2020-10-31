import React, { useEffect } from "react";
import { Category } from "../store/category";
import { useStoreState, useStoreActions } from "../hooks/store";

function CategoryList() {
    const fetchList = useStoreActions(actions => actions.category.fetchList);
    const category = useStoreState(state => state.category);

    useEffect(() => {
        if (!category.loaded) {
            fetchList();
        }
    }, []);

    return (
        <div>
            <h1 className="text-4xl text-snow">Categorías</h1>
            <div className="grid grid-cols-12 gap-4">
                {category.list.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

interface Props {
    category: Category;
}

function Category({ category }: Props) {
    return (
        <div className="col-span-2">
            <h1 className="text-snow">{category.name}</h1>
            <img src={category.url} alt={category.name} />
        </div>
    );
}

export default CategoryList;
