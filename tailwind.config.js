/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				BebasNeueRegular: ['BebasNeue-Regular', 'sans-serif'],
				MontserratRegular: ['Montserrat-Regular', 'sans-serif'],
				MontserratSemiBold: ['Montserrat-SemiBold', 'sans-serif'],
			},
			colors: {
				AppBackground: '#f3f2f7',
				FontColor: '#212121',
				AppPrimaryColor: '#66affa',
				AppLightPrimaryColor: '#c1dffd',
				AppOutlineColor: '#212121',
				Khaki: '#f7d787',
				LightKhaki: '#f9e3ab',
				LightThistle: '#ffd9f9',
				SecoundLayer: '#ffffff',
				ThirdLayer: '#f3f3f3',
				GrayFontColor: '#c9cbc9',
			},
		},
	},
	plugins: [],
};
