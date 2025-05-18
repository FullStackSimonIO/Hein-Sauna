import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

/**
 * TiltCard
 *
 * Was es ist:
 *   Eine 3D-Karte, die auf Mausbewegung reagiert und sich neigt.
 *
 * Wofür es gut ist:
 *   • Feature-/Product-Cards
 *   • “Clickable” Elemente mit Tiefeneffekt
 *   • Gamified UI
 *
 * Anwendung:
 *   <TiltCard>
 *     <img src="/card.jpg" alt="Card" />
 *   </TiltCard>
 */
export function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 500 }}
      className="rounded-xl bg-background p-6 shadow-lg"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - (rect.left + rect.width / 2))
        y.set(e.clientY - (rect.top + rect.height / 2))
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
