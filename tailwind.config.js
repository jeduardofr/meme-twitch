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
                snow: "#FCF7F8",
                yellow: "#FFC300",
                orange: "#f5993b",
                pink: "#f0588b"
            }
        }
    },
    variants: {},
    plugins: [require("@tailwindcss/custom-forms")]
};
