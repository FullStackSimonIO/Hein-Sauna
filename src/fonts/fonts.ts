import { Oleo_Script_Swash_Caps, Cormorant_Garamond, Inter } from 'next/font/google'

export const oleoScriptSwash = Oleo_Script_Swash_Caps({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
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
