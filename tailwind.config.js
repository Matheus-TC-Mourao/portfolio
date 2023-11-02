const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {},
		fontFamily: {
			primary: 'Inter',
			secondary: 'Rajdhani',
			tertiary: 'Aldrich',
		},
		extend: {},
	},
	plugins: [],
});
