import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="p-8">
            <h1 className="text-snow text-5xl font-bold mt-4">
                Página no encontrada
            </h1>
            <Link
                className="mt-4 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-pink to-yellow text-snow font-bold text-sm"
                to="/"
            >
                Volver a menú inicial
            </Link>
        </div>
    );
}

export default NotFound;
