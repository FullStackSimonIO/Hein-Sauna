'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionStyle } from 'framer-motion'
import type { Layout484 as Layout484Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Layout484: React.FC<Layout484Props> = ({ tagline, title, richText, links }) => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ['start center', 'end center'],
  })

  // ✅ useTransform wird HIER (außerhalb von .map) verwendet
  const wordOpacity = title
    ? title
        .split(' ')
        .map((_, index) => {
          const start = index * 0.1
          const end = start + 0.2
          return { start, end }
        })
        .map(({ start, end }) => useTransform(scrollYProgress, [start, end], [0.3, 1]))
    : []

  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
        <h1 ref={headingRef} className="text-5xl font-bold md:text-7xl lg:text-8xl">
          {title &&
            title.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                <motion.span
                  className="inline-block"
                  style={{ opacity: wordOpacity[index] } as MotionStyle}
                >
                  {word}
                </motion.span>
                {index < title.split(' ').length - 1 && ' '}
              </React.Fragment>
            ))}
        </h1>
        {richText && (
          <RichText
            className="mt-4 text-gray-700 md:text-md"
            data={richText}
            enableGutter={false}
          />
        )}
        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {links.map(({ link }, i) => (
              <CMSLink key={i} size="lg" {...link} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
