/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                "light": "#ffffff",
                "dark": "#000000",
                "primary": "#1a202c",
                "secondary": "#2d3748",
                "accent": "#ed8936",
                "accent-light": "#f6ad55",
                "accent-dark": "#dd6b20",
                "accent-darker": "#c05621",
                "accent-darkest": "#9c4221",
                "accent-lightest": "#fffaf0",
                "accent-lighter": "#fff5e5",
            }
        },
    },
    plugins: [],
};
