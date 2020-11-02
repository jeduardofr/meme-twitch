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
                snow: "#FCF7F8",
                "oxford-blue": "#0B132B",
                "space-cadet": "#1C2541",
                independence: "#3A506B",
                "mikado-yellow": "#FFC300",
                "blue-green": "#5BC0BE",
                gray: "#CED4DA"
            }
        }
    },
    variants: {},
    plugins: [require("@tailwindcss/custom-forms")]
};
