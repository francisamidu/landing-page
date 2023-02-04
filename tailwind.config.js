module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        purplish: {
          500: "#574bc5",
          700: "#3d348b"
        },
        transluscent: {
          100: "#cacaca09",
          300: "#00000013",
          500: "#00000033"
        }
      }
    },
  },
  plugins: [],
};
