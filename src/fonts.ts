import { Oswald, Playfair_Display, Roboto, Cormorant_Garamond, Inter } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-paragraph',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
})

export const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-test',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-luxury-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-luxury-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
})
