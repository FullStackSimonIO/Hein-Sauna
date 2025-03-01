'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Media } from '@/components/Media'

import type { CTA38 as CTA38Props } from '@/payload-types'

export const Cta38: React.FC<CTA38Props> = ({ tagline, hoverLinks }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" onMouseMove={handleMouseMove}>
      <div className="container">
        <p className="mb-6 font-semibold md:mb-8">{tagline}</p>
        <motion.div>
          {hoverLinks?.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={clsx(
                'relative flex items-center justify-start border-b border-border-primary py-5 transition-colors duration-300 md:py-6',
                {
                  'lg:text-black/20': hoveredIndex !== index && hoveredIndex !== null,
                  'lg:text-black': hoveredIndex === index || hoveredIndex === null,
                },
              )}
            >
              <p className="mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl">
                {link.listNumber}
              </p>
              <h3 className="text-5xl font-bold md:text-9xl lg:text-10xl">{link.heading}</h3>

              {hoveredIndex === index && link.image && typeof link.image === 'object' && (
                <motion.div
                  className="pointer-events-none fixed inset-0 z-10 ml-[300px] hidden size-[600px] lg:block"
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
