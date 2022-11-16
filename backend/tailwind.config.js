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
                "light-1": "#ffffff",
                "dark-1": "#000000",
                "primary-1": "#1a202c",
                "secondary-1": "#2d3748",
                "warning-1" : "#f6ad55",
                "danger-1" : "#e53e3e",
                "success-1" : "#48bb78",
                "info-1" : "#4299e1",
                "purple" : "#805ad5",
                "cyan" : "#00ffff",
                "maroon" : "#800000",
                "olive" : "#808000",
                "navy" : "#000080",
                "teal" : "#008080",
                "night" : "#0a0a0a",

            }
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl : '1.25rem',
            '2xl' : '1.563rem',
            '3xl' : '1.953rem',
            '4xl' : '2.441rem',
            '5xl' : '3.052rem',
          },
    },
    plugins: [],
};
