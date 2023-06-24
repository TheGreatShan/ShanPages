/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    }, daisyui: {
        styled: true,
        themes: [
            {
                main: {


                    "primary": "#a78bfa",
                    "secondary": "#d8b4fe",
                    "accent": "#1fb2a6",
                    "neutral": "#2a323c",
                    "base-100": "#1d232a",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ]
}