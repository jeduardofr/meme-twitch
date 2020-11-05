import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="p-8">
            <h1 className="text-white text-5xl font-bold mt-4">
                Página no encontrada
            </h1>
            <Link
                className="mt-4 inline-block px-4 py-2 rounded-md bg-yellow text-blue-dark font-bold text-sm shadow-md"
                to="/"
            >
                Volver a menú inicial
            </Link>
        </div>
    );
}

export default NotFound;
