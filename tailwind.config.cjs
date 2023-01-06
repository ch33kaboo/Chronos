const config = {
    content: ["./src/**/*.{html,js,svelte,ts}", "./index.html"],

    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "dev-dark-green": "#395144",
                "dev-green": "#4E6C50",
                "dev-brown": "#AA8B56",
                "dev-light-color": "#F0EBCE",
            },
        },
    },

    plugins: [require("daisyui")],
};

module.exports = config;
