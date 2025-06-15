'use client'

import { motion, MotionStyle, Transition } from 'framer-motion'
import React, { useEffect, useRef, useState, useMemo } from 'react'

// Type for animation keyframes
type Keyframes = Record<string, unknown[]>

// Utility to build keyframes from initial state and steps
function buildKeyframes(
  from: Record<string, unknown>,
  steps: Array<Record<string, unknown>>,
): Keyframes {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ])
  const keyframes: Keyframes = {}
  keys.forEach((key) => {
    keyframes[key] = [from[key], ...steps.map((step) => step[key])]
  })
  return keyframes
}

export interface BlurTextProps {
  /** Text to animate */
  text: string
  /** Delay per element in ms */
  delay?: number
  /** CSS class names */
  className?: string
  /** Split by words or characters */
  animateBy?: 'words' | 'chars'
  /** Animation direction */
  direction?: 'top' | 'bottom'
  /** IntersectionObserver threshold */
  threshold?: number
  /** IntersectionObserver rootMargin */
  rootMargin?: string
  /** Custom initial style */
  animationFrom?: Record<string, unknown>
  /** Custom animation steps */
  animationTo?: Array<Record<string, unknown>>
  /** Easing function */
  easing?: (t: number) => number
  /** Callback on animation complete */
  onAnimationComplete?: () => void
  /** Duration of each animation step in seconds */
  stepDuration?: number
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.5,
}) => {
  // Split text into segments
  const segments = useMemo(() => {
    return animateBy === 'words' ? text.split(' ') : text.split('')
  }, [text, animateBy])

  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  // Intersection observer triggers animation when in view
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  // Default from and to states
  const defaultFrom = useMemo<Record<string, any>>(
    () => ({
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -50 : 50,
    }),
    [direction],
  )

  const defaultTo = useMemo<Array<Record<string, any>>>(
    () => [
      { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction],
  )

  const fromSnapshot = (animationFrom ?? defaultFrom) as any
  const toSnapshots = (animationTo ?? defaultTo) as any

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = useMemo<number[]>(
    () => Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1))),
    [stepCount],
  )

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', margin: 0 }}>
      {segments.map((segment, index) => {
        const keyframes = buildKeyframes(fromSnapshot, toSnapshots)
        const transition: Transition & { delay?: number } = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        }
        transition.ease = easing

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? keyframes : fromSnapshot}
            transition={transition}
            onAnimationComplete={index === segments.length - 1 ? onAnimationComplete : undefined}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {segment === '' ? '\u00A0' : segment}
            {animateBy === 'words' && index < segments.length - 1 && '\u00A0'}
          </motion.span>
        )
      })}
    </p>
  )
}

export default BlurText
