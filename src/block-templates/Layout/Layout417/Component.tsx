// @ts-nocheck
'use client'

import { useRef } from 'react'
import { MotionStyle, MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import type { Layout417 as Layout417Props } from '@/payload-types'

export const Layout417: React.FC<Layout417Props> = ({ title, featureSections }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="relume" ref={containerRef} className="relative overflow-hidden">
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="sticky top-0 grid h-svh grid-cols-1 content-center items-center justify-center px-[5%] md:flex md:content-normal md:px-0 lg:h-screen">
            <div className="absolute bottom-auto left-0 right-0 top-0 flex w-full justify-center overflow-hidden pt-20 md:inset-auto md:pt-0">
              <h1 className="whitespace-nowrap text-5xl font-bold sm:text-6xl md:text-7xl lg:text-9xl">
                {title}
              </h1>
            </div>
            <div className="sticky top-0 mx-auto mt-12 flex min-h-[24.5rem] w-full max-w-sm flex-col items-center justify-center sm:mt-24 md:relative lg:mt-0">
              {featureSections?.map((section, index) => (
                <FeatureSection
                  key={index}
                  section={section}
                  index={index}
                  totalSections={featureSections.length}
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
  section,
  index,
  totalSections,
  scrollYProgress,
}: {
  section: Layout417Props['featureSections'][0]
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
    ['0vh', '-120vh'],
  )
  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ['0vw', '-10vw'],
  )

  return (
    <motion.div
      className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:mx-0"
      style={
        {
          rotate: index === totalSections - 1 ? '9deg' : rotate,
          translateY: index === totalSections - 1 ? undefined : translateY,
          translateX: index === totalSections - 1 ? undefined : translateX,
          zIndex: totalSections - index,
        } as MotionStyle
      }
    >
      <div className="rb-6 mb-6 md:mb-8">
        {section.media && typeof section.media === 'object' && (
          <Media
            imgClassName="w-full object-cover rounded-lg shadow-lg"
            priority
            resource={section.media}
          />
        )}
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
      {section.richText && (
        <RichText className="mb-6 text-gray-700" data={section.richText} enableGutter={false} />
      )}
    </motion.div>
  )
}
