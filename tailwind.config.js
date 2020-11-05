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
                yellow: "#FFC300",
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
