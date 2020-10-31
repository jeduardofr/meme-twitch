import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="w-64">
            <ul className="space-y-2">
                <li>
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b12fa98-d76a-4513-a5f5-d3c13f5752ef-profile_image-70x70.png" />
                </li>
                <li>
                    <Link
                        to="/"
                        className="text-snow font-medium hover:text-blue-green"
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/categories"
                        className="text-snow font-medium hover:text-blue-green"
                    >
                        Categorías
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
