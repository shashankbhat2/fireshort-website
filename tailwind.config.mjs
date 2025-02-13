/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
  	fontFamily: {
  		primary: [
  			'Bricolage Grotesque',
  			'Geist',
  			'Inter',
  			'sans-serif'
  		],
  		secondary: [
  			'Geist',
  			'Inter',
  			'sans-serif'
  		]
  	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		backgroundImage: {
  			'dot-pattern': 'radial-gradient(circle, rgba(240, 20, 20, 0.5) 2px, transparent 2px)',
  			'arcade-grid': 'linear-gradient(to right, #232323 1px, transparent 1px), linear-gradient(to bottom, #232323 1px, transparent 1px)',
  			'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))'
  		},
  		backgroundSize: {
  			'dot-pattern': '16px 16px'
  		},
  		colors: {
  			brand: {
  				primary: '#F01414',
  				secondary: '#3C3086',
  				background: '#FFFAEC',
  				black: '#000000',
  				white: '#FFFFFF',
  				gray: {
  					'50': '#F9FAFB',
  					'100': '#F3F4F6',
  					'200': '#E5E7EB',
  					'300': '#D1D5DB',
  					'400': '#9CA3AF',
  					'500': '#6B7280',
  					'600': '#4B5563',
  					'700': '#374151',
  					'800': '#1F2937',
  					'900': '#111827'
  				}
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#F01414',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#3C3086',
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#F01414',
  				foreground: '#FFFFFF'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			arcade: {
  				primary: '#F01414',
  				secondary: '#3C3086',
  				neon: {
  					red: '#ff0044',
  					blue: '#0066ff',
  					purple: '#9900ff',
  					pink: '#ff00ff'
  				}
  			},
  			'arcade-neon-red': '#ff0044',
  			'arcade-neon-purple': '#9900ff'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
  			'neon-pulse': {
  				'0%, 100%': {
  					opacity: 1
  				},
  				'50%': {
  					opacity: 0.7
  				}
  			},
  			'arcade-float': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
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
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
  			'arcade-float': 'arcade-float 3s ease-in-out infinite',
  			float: 'float 6s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		backdropBlur: {
  			glass: '12px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
