const config = {
    content: ["./src/**/*.{html,js,svelte,ts}", "./index.html"],

    darkMode: "class",
    theme: {
        extend: {
            animation: {
                "spin-left": "rotleft 5s linear infinite",
                "spin-right": "rotright 5s linear infinite",
            },
            keyframes: {
                rotleft: {
                    "0%, 100%": { transform: "rotate(360deg)" },
                    "50%": { transform: "rotate(180deg)" },
                },
                rotright: {
                    "0%, 100%": { transform: "rotate(-360deg)" },
                    "50%": { transform: "rotate(-180deg)" },
                },
            },
            colors: {
                "dev-dark-green": "#395144",
                "dev-green": "#4E6C50",
                "dev-brown": "#AA8B56",
                "dev-light-color": "#F9F5E2",
            },
            fontFamily: {
                devfest: "'Carter One', cursive;",
            },
        },
    },

    plugins: [require("daisyui")],
};

module.exports = config;
