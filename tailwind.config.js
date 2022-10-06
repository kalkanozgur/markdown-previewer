/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			bgColor: "#FFCD38",
			panelColor: "#FFDD67",
			textColor: "#4A4A4A",
		},
		fontFamily: {
			mainFont: ["Space Mono", "monospace"],
		},
		boxShadow: {
			shadow: "10px 10px lighten($text-color, 10%)",
		},
		container: {
			center: true,
			screens: {},
		},
	},
	plugins: [],
};
