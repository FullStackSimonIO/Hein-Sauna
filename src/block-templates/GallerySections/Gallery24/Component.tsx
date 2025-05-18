// @ts-nocheck
'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Gallery24 as Gallery24Props } from '@/payload-types'

export const Gallery24: React.FC<Gallery24Props> = ({ heading, description, images }) => {
  const transformRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: transformRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <section id="relume" ref={transformRef}>
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container text-center ">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText data={description} className="text-lg md:text-xl" />}
        </div>
      </div>

      <div className="h-[400vh]">
        <div className="sticky top-0 mt-[-10vh] flex h-screen w-screen max-w-full flex-col items-start justify-center overflow-hidden px-[5%] md:mt-0">
          <motion.div
            style={{ x }}
            className="flex w-[150vh] items-center gap-x-6 sm:w-[200vh] md:gap-x-8 lg:w-[400vh]"
          >
            {images?.map((image, index) => (
              <a
                key={index}
                href={image?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block max-w-full"
              >
                <div className="relative size-full max-w-full overflow-hidden">
                  {image?.image && (
                    <Media
                      resource={image.image}
                      className="h-[80vh] max-h-[25rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                    />
                  )}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
