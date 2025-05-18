import React from 'react'
import { motion } from 'framer-motion'

/**
 * Marquee
 *
 * Was es ist:
 *   Ein horizontal scrollender Loop, der Inhalte endlos wiederholt.
 *
 * Wofür es gut ist:
 *   • Partner-Logos
 *   • News-Ticker
 *   • Eyecatcher mit Bewegung
 *
 * Anwendung:
 *   <Marquee duration={12}>
 *     <img src="/logo1.png"/><img src="/logo2.png"/>…
 *   </Marquee>
 */
export function Marquee({
  children,
  duration = 10,
}: {
  children: React.ReactNode
  duration?: number
}) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration, ease: 'linear' }}
      >
        {children}
        {children /* Doppelung sorgt für nahtlosen Loop */}
      </motion.div>
    </div>
  )
}
