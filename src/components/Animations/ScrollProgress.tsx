import { useScroll, motion } from 'framer-motion'
import React from 'react'

/**
 * ProgressBar
 *
 * Was es ist:
 *   Eine dünne Leiste oben, die den Scroll-Fortschritt anzeigt.
 *
 * Wofür es gut ist:
 *   • Long-form Content (z. B. Artikel)
 *   • Storytelling-Pages
 *   • Visuelles Feedback über Seitenlänge
 *
 * Anwendung:
 *   Einfach global einbinden, z.B. in _app.tsx:
 *   <ProgressBar /><Component {...pageProps} />
 */
export const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
