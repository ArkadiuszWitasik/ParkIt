/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				BebasNeueRegular: ['BebasNeue-Regular', 'sans-serif'],
				RalewayRegular: ['Raleway-Regular', 'sans-serif'],
				RalewaySemiBold: ['Raleway-SemiBold', 'sens-serif'],
			},
			colors: {
				AppBackground: '#f3f3f3',
				FontColor: '#212121',
				Khaki: '#f7d787',
				LightKhaki: '#f9e3ab',
				Burlywood: '#f7b587',
				LightBurlywood: '#facbab',
				Skyblue: '#87c9f7',
				LightSkyblue: '#aad8f7',
				Thistle: '#ffc7f3',
				LightThistle: '#ffd9f9',
				SecoundLayer: '#ffffff',
				ThirdLayer: '#f3f3f3',
				GrayFontColor: '#c9cbc9',
			},
		},
	},
	plugins: [],
};
