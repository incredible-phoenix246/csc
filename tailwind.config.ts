import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				'blue-main': '#0540F2',
				back: '#F9FCFF',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
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
				},
				slideUp: {
					'70%': {
						opacity: '0.7',
						transform: 'translateY(50px)'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				slideDown: {
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				slideNavUp: {
					'100%': {
						transform: 'translateY(-112px)',
						opacity: '0'
					}
				},
				'load-spin': {
					'100%': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				slideUp: 'slideUp 1s 0.2s ease forwards',
				slideDown: 'slideDown 1s 0.2s ease forwards',
				slideNavUp: 'slideDown 1s 0.2s ease forwards',
				'load-spin': 'load-spin 1.2s linear infinite'
			},
			fontFamily: {
				worksans: [`var(--font-work-sans)`, "sans-serif"],
				jaka: [`var(--font-jakarta)`, "sans-serif"],
				inter: [`var(--font-inter)`, "sans-serif"]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
