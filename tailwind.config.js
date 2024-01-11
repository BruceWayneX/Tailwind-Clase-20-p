/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}',
		'./index.html',
	  ],
	theme: {
	  fontFamily: { 
		'Montserrat': ["Montserrat", "sans-serif"]
	  },
	  backgroundColor: theme => ({
		...theme('colors'),
		'primary': '#CC2D4A',
		'secondary': '#8FA206',
		'tertiary': '#61AEC9',
	  }),
	  textColor: theme => ({ 
		...theme('colors'),
		'primary': '#CC2D4A',
		'secondary': '#8FA206',
		'tertiary': '#61AEC9',
	  }),
	  /*
	  Esto funciona pero no nos permite usar los colores de Tailwind 
		colors: {
		primary: '#CC2D4A',
		secondary: "#8FA206",
		tertiary: "#61AEC9",
	  }, 
	  textColor: {
		primary: '#CC2D4A',
		secondary: "#8FA206",
		tertiary: "#61AEC9",
	  },*/
	  extend: {
		backgroundImage: { 
		  'sanFrancisco': "url('../img/sanFrancisco.jpg')",
		  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
		  'yosemite': "url('../img/yosemite.jpg')",
		  'LA': "url('../img/LA.jpg')",
		  'seattle': "url('../img/seattle.jpg')",
		  'new_york': "url('../img/new_york.jpg')",
		  norway: "url('../img/norway.jpg')",
		  'sydney': "url('../img/sydney.jpg')",
		  'miami': "url('../img/miami.jpg')",
		  'switzerland': "url('../img/switzerland.jpg')",
		  'bali': "url('../img/bali.jpg')",
		  'chicago': "url('../img/chicago.jpg')",
		  'europe': "url('../img/europe.jpg')",
		  'iceland': "url('../img/iceland.jpg')",
		},
	  }
	},
	plugins: [],
  }