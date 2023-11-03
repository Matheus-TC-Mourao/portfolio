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
		extend: {
			colors: {
				primary: '#334155',
				secondary: '#2c2d2e',
				link: '#107fd2',
				card: '#fff',
				badge: '#e6eef5',
				body: '#f2f5f9',
			},
		},
	},
	plugins: [],
});
