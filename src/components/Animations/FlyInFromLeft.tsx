'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export const FlyInFromLeft: React.FC<Props> = ({ children, delay = 0.2, duration = 0.6 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
