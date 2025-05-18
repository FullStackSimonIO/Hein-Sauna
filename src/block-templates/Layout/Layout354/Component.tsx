// @ts-nocheck
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Layout354 as Layout354Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const Layout354: React.FC<Layout354Props> = ({ sections }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section id="layout-354" ref={containerRef} className="relative w-full">
      {sections.map((section, index) => {
        return (
          <motion.div
            key={index}
            className="sticky top-0 min-h-screen flex items-center justify-center px-[5%]"
            style={{
              zIndex: sections.length - index,
            }}
          >
            {/* Hintergrundbild */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: backgroundOpacity,
                translateY,
              }}
            >
              {section.image && (
                <Media fill resource={section.image} imgClassName="w-full h-full object-cover" />
              )}
            </motion.div>

            {/* Inhalt */}
            <div className="relative z-10 container mx-auto max-w-lg text-center text-white bg-black/50 p-6 rounded-lg">
              <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
                {section.heading}
              </h2>
              {section.description && (
                <RichText className="md:text-md" data={section.description} />
              )}
              <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
                {section.links?.map(({ link }, i) => <CMSLink key={i} size="lg" {...link} />)}
              </div>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}
