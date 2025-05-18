// components/Animations/StaggeredListReveal.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface StaggeredListRevealProps {
  /** Die Listeneinträge als React-Nodes */
  children: React.ReactNode
  /** Abstand zwischen den Einblendungen in Sekunden */
  stagger?: number
}

export const StaggeredListReveal: React.FC<StaggeredListRevealProps> = ({
  children,
  stagger = 0.15,
}) => {
  // Konvertiere children zu einem Array
  const items = React.Children.toArray(children)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StaggeredListReveal
