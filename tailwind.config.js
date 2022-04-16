// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		screens: {
			xxs: { max: "399px" },
			xs: { max: "639px" },
			...defaultTheme.screens,
		},
		extend: {},
	},
	plugins: [],
};
