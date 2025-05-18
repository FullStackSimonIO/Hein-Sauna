// @ts-nocheck
'use client'

import { motion, MotionStyle, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '@relume_io/relume-ui'
import React, { useRef } from 'react'

import type { Layout517 as Layout517Props } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const Layout517: React.FC<Layout517Props> = ({ media, tagline, title, richText, links }) => {
  const isMobile = useMediaQuery('(max-width: 991px)')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center end', 'center start'],
  })

  const initialImageWidth = isMobile ? '60%' : '20%'
  const initialImageHeight = '40%'
  const imageWidth = useTransform(scrollYProgress, [0, 1], [initialImageWidth, '100%'])
  const imageHeight = useTransform(scrollYProgress, [0, 1], [initialImageHeight, '100%'])
  const imageYPosition = useTransform(scrollYProgress, [0, 1], ['0%', '0%'])
  const cardYPosition = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '100%', '0%'])

  const imageStyle = {
    width: imageWidth,
    height: imageHeight,
    y: imageYPosition,
  } as MotionStyle

  const cardStyle = {
    y: cardYPosition,
  } as MotionStyle

  return (
    <section id="layout-517" ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {media && (
          <motion.div className="absolute inset-0" style={imageStyle}>
            <Media resource={media} imgClassName="size-full object-cover" />
          </motion.div>
        )}

        <motion.div
          className="absolute inset-0 mx-auto flex size-full max-w-xxl items-center justify-end px-[5%]"
          style={cardStyle}
        >
          <div className="flex w-[90%] flex-col border border-border-primary bg-white p-6 md:max-w-[658px] md:p-12">
            {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
            {title && (
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
            )}
            {richText && (
              <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {links && Array.isArray(links) && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
