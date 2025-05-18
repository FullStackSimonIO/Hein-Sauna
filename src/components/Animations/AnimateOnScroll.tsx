// components/Animations/AnimateOnScroll.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FlyInFromRight } from './FlyInFromRight'
import { FlyInFromLeft } from './FlyInFromLeft'
import { ZoomIn } from 'lucide-react'
import { FadeIn } from './FadeIn'

export type AnimationType = 'fly-right' | 'fly-left' | 'fade-in' | 'zoom-in' | 'stagger'

export interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  /** nur für 'stagger': Abstand zwischen den Einblendungen in Sekunden */
  stagger?: number
}

/**
 * Wrappt dein Element und triggert die entsprechende Animation,
 * sobald es in den Viewport scrollt.
 */
export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 0.5,
  stagger = 0.15,
}) => {
  switch (animation) {
    case 'fly-right':
      return (
        <FlyInFromRight delay={delay} duration={duration}>
          {children}
        </FlyInFromRight>
      )
    case 'fly-left':
      return (
        <FlyInFromLeft delay={delay} duration={duration}>
          {children}
        </FlyInFromLeft>
      )
    case 'zoom-in':
      return <ZoomIn>{children}</ZoomIn>
    case 'stagger':
      // Hier kommt der Scroll-Trigger + Stagger
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: stagger },
            },
          }}
        >
          {React.Children.map(children, (child, i) => (
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
    case 'fade-in':
    default:
      return (
        <FadeIn delay={delay} duration={duration}>
          {children}
        </FadeIn>
      )
  }
}

export default AnimateOnScroll
