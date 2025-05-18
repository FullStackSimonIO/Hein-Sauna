// @ts-nocheck
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue, MotionStyle } from 'framer-motion'
import { useMediaQuery } from '@relume_io/relume-ui'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout415 as Layout415Props } from '@/payload-types'

export const Layout415: React.FC<Layout415Props> = ({
  tagline,
  title,
  richText,
  links,
  features,
}) => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ['20% start', 'end end'] : ['start start', 'end end'],
  })

  return (
    <section id="layout-415" ref={containerRef} className="px-[5%]">
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-svh md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
            {/* Left Side - Content */}
            <div>
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {title}
              </h2>
              {richText && (
                <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
              )}
              {links && links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Features */}
            <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
              {features?.map((feature, index) => (
                <FeatureSection
                  key={index}
                  feature={feature}
                  index={index}
                  totalSections={features.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  )
}

const FeatureSection = ({
  feature,
  index,
  totalSections,
  scrollYProgress,
}: {
  feature: Layout415Props['features'][0]
  index: number
  totalSections: number
  scrollYProgress: MotionValue<number>
}) => {
  const sectionScrollStart = index / totalSections
  const sectionScrollEnd = (index + 1) / totalSections

  const rotate = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    [0 + index * 3, -30],
  )
  const translateY = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ['0vh', '-100vh'],
  )
  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ['0vw', '-10vw'],
  )

  return (
    <motion.div
      className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:ml-0"
      style={
        {
          rotate: index === totalSections - 1 ? '9deg' : rotate,
          translateY: index === totalSections - 1 ? undefined : translateY,
          translateX: index === totalSections - 1 ? undefined : translateX,
          zIndex: totalSections - index,
        } as MotionStyle
      }
    >
      {/* Feature Image */}
      <div className="rb-6 mb-6 md:mb-8">
        {feature.media && typeof feature.media === 'object' && (
          <Media
            imgClassName="w-full object-cover rounded-lg shadow-lg"
            priority
            resource={feature.media}
          />
        )}
      </div>

      {/* Feature Title */}
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{feature.title}</h3>

      {/* Feature Description */}
      {feature.richText && (
        <RichText className="mb-6 text-gray-700" data={feature.richText} enableGutter={false} />
      )}
    </motion.div>
  )
}
