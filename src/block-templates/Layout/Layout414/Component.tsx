// @ts-nocheck
'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

import type { Layout414 as Layout414Props } from '@/payload-types'

export const Layout414: React.FC<Layout414Props> = ({
  tagline,
  title,
  richText,
  links,
  imagesPartOne,
  imagesPartTwo,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const xPartOne = useTransform(scrollYProgress, [0, 1], ['1%', '5%'])
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ['-1%', '-5%'])

  return (
    <section
      id="layout-414"
      ref={sectionRef}
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">{title}</h2>
            </div>
            <div>
              {richText && <RichText className="md:text-md" data={richText} />}
              {links && links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Image Sections mit Animation */}
          <div className="flex w-screen flex-col items-center gap-4 overflow-hidden">
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: xPartOne }}
            >
              {imagesPartOne?.map((image, index) => (
                <div key={index} className="w-[40vw] flex-none md:w-[30vw]">
                  {image.media && typeof image.media === 'object' && (
                    <Media
                      imgClassName="w-full object-cover rounded-lg shadow-lg"
                      resource={image.media}
                    />
                  )}
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: xPartTwo }}
            >
              {imagesPartTwo?.map((image, index) => (
                <div key={index} className="w-[40vw] flex-none md:w-[30vw]">
                  {image.media && typeof image.media === 'object' && (
                    <Media
                      imgClassName="w-full object-cover rounded-lg shadow-lg"
                      resource={image.media}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
