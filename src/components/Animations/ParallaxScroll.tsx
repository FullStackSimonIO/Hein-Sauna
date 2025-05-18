import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'

/**
 * Parallax
 *
 * Was es ist:
 *   Ein Container, dessen Inhalt sich beim Scroll langsamer bewegt als der Rest.
 *
 * Wofür es gut ist:
 *   • Hintergrundbilder / -elemente
 *   • Eyecatcher in Hero-Sektionen
 *   • Sektionen mit Tiefenwirkung
 *
 * Anwendung:
 *   <Parallax offset={300}>
 *     <img src="/hintergrund.jpg" alt="Parallax-Bild" />
 *   </Parallax>
 */
export const Parallax: React.FC<{
  children: React.ReactNode
  offset?: number // Scroll-Abstand bis volles Parallax-Offset
}> = ({ children, offset = 200 }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, offset], [0, -offset / 2])
  return <motion.div style={{ y, willChange: 'transform' }}>{children}</motion.div>
}
