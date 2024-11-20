/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'brand': {
  				'main': '#507061',
  				'balck': {
  					'100': '#515151',
  					DEFAULT: '#272727'
  				},
  				'gray': {
  					'100': '#A3A799',
  					DEFAULT: '#A3A799'
  				},
  				'yellow': {
  					'100': '#E8E8AE',
  					DEFAULT: '#F3EFEC',
						'200': "#E8EAC7",
						'300': "#DDDDA6",
						'400': "#E0E1A8"
  				}
  			}
  		},
  		maxWidth: {
  			'8xl': '1920px'
  		},
  		fontFamily: {
  			montserrat: ["Montserrat", "sans-serif"]
  		},
  		fontSize: {
  			'32': ["32px", "normal"],
  			'40': ["40px", "normal"]
  		},
			boxShadow: {
				'3xl': "0px 10px 40px 0px rgba(0, 0, 0, 0.20)"
			},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
