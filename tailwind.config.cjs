const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["index.html", "./src/scripts/**/*.js"],
	theme: {
		fontFamily: {
			// sans: ["'neue-haas-grotesk-text'", ...defaultTheme.fontFamily.sans],
			// serif: ["'palatino'", ...defaultTheme.fontFamily.serif],
		},
		spacing: {
			0: "0rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#FFFFFF",
			black: "#000000",
		},
		extend: {
			height: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			maxHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			minHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
		},
	},
};
