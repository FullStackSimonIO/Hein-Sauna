'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export const FadeIn: React.FC<Props> = ({ children, delay = 0.1, duration = 0.4 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  )
}
