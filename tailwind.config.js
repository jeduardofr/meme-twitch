const plugin = require("tailwindcss/plugin");

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: {
        content: ["resources/views/**/*.php", "resources/ts/**/*.tsx"]
    },
    theme: {
        extend: {
            colors: {
                "blue-dark": "#152036",
                blue: "#1B2A47",
                grey: "#4b566c",
                "light-purple": "#9BB1FF",
                yellow: {
                    default: "#FFC300",
                    50: "#FFFCF2",
                    100: "#FFF9E6",
                    200: "#FFF0BF",
                    300: "#FFE799",
                    400: "#FFD54D",
                    500: "#FFC300",
                    600: "#E6B000",
                    700: "#997500",
                    800: "#735800",
                    900: "#4D3B00"
                },
                white: "#FCF7F8",
                green: "#3DA35D",
                pink: "#E56399"
            }
        }
    },
    variants: {},
    plugins: [
        require("@tailwindcss/custom-forms"),
        plugin(function({ addUtilities, addComponents, e, prefix, config }) {
            const newHeights = {
                ".min-h-with-gap": {
                    "min-height": "calc(100vh - 48px)"
                },
                ".h-with-gap": {
                    height: "calc(100vh - 48px)"
                }
            };

            addUtilities(newHeights);
        })
    ]
};
