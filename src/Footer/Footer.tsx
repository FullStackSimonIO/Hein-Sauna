// src/components/Footer/FooterServer.tsx

import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Footer, Footer as FooterType } from '@/payload-types'
import FooterClient from './Footer.Client'

export async function FooterServer() {
  // Payload Global holen
  const footerData: FooterType = (await getCachedGlobal('footer', 1)()) as Footer

  return <FooterClient footerData={footerData} />
}
