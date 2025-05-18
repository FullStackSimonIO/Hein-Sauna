// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Media } from '@/components/Media'

import type { CTA37 as CTA37Props } from '@/payload-types'

export const Cta37: React.FC<CTA37Props> = ({ tagline, hoverLinks }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="cta-37" className="px-[5%] py-16 md:py-24 lg:py-28" onMouseMove={handleMouseMove}>
      <div className="container max-w-xl text-center">
        <p className="mb-6 font-semibold md:mb-8">{tagline}</p>
        <motion.div>
          {hoverLinks?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center justify-center p-4"
            >
              <h3
                className={clsx(
                  'text-5xl font-bold transition-colors duration-300 md:text-9xl lg:text-10xl',
                  {
                    'lg:text-black/20': hoveredIndex !== index && hoveredIndex !== null,
                    'lg:text-black': hoveredIndex === index || hoveredIndex === null,
                  },
                )}
              >
                {link.heading}
              </h3>
              {hoveredIndex === index && link.image && typeof link.image === 'object' && (
                <motion.div
                  className="pointer-events-none fixed inset-0 -z-10 hidden size-[600px] lg:block"
                  style={{
                    translateX: cursorPosition.x - 300,
                    translateY: cursorPosition.y - 300,
                  }}
                >
                  <Media
                    fill
                    imgClassName="size-full max-w-md object-cover"
                    resource={link.image}
                  />
                </motion.div>
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
