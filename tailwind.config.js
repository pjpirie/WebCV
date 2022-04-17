// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		minWidth: {
			8: "1rem",
		},
		maxWidth: {
			8: "1rem",
			none: "unset",
		},
		screens: {
			xxxs: { max: "399px" },
			xxs: { max: "449px" },
			xs: { max: "639px" },
			...defaultTheme.screens,
		},
		colors: {
			aside: "#232339",
			main: "#2E2E48",
			bg: "#161B22",
			icon_bg: "#2E2E48",
			text: "#ACB1C3",
			text_heading: "#E2E6EE",
			link: "#95AAFB",
			dot: "#758DE0",
			bluedot: "#38446E",
			linkBG: "#2A337E",
			divider: "rgba(255, 255, 255, 0.1)",
			shadow: "rgba(0, 0, 0, 0.05)",
			...defaultTheme.colors,
		},
		extend: {},
	},
	plugins: [],
};
