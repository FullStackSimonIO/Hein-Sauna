'use client'

import React, { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // 1.) Lenis-Instanz mit „physikalischer“ Ease
    const lenis = new Lenis({
      duration: 1.2, // je größer, desto träger
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2.0,
    })

    // 2.) perpetual RAF-Loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 3.) aufräumen bei Unmount
    return () => {
      lenis.destroy()
    }
  }, [])

  // 4.) warte auf DOM-Rendering
  return <>{children}</>
}
