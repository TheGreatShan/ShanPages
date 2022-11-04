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
                mytheme: {

                    "primary": "#bbf7d0",
                    "secondary": "#4d7c0f",
                    "accent": "#3f6212",
                    "neutral": "#67e8f9",
                    "base-100": "#111827",
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ]
}