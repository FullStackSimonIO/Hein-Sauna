// @ts-nocheck
'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import type { Layout485 as Layout485Props } from '@/payload-types'

export const Layout485: React.FC<Layout485Props> = ({ features }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const featureCount = features.length
  const numbers = Array.from({ length: featureCount }, (_, index) => index + 1)
  const y = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65, 0.75],
    ['0%', '-33.5%', '-33.5%', '-66.5%'],
  )

  return (
    <section id="layout-485" ref={ref} className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <h1 className="text-[6rem] font-bold leading-[1] md:text-[14rem]">0</h1>
            <motion.div className="text-center" style={{ y }}>
              {numbers.map((number, index) => (
                <h1 key={index} className="text-[6rem] font-bold leading-[1] md:text-[14rem]">
                  {number}
                </h1>
              ))}
            </motion.div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureCard: React.FC<Layout485Props['features'][0]> = ({
  number,
  tagline,
  heading,
  description,
  links,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const animatedWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 20 })
  const width = { width: useTransform(animatedWidth, [0, 1], ['0%', '100%']) }

  return (
    <div className="flex flex-col items-start justify-center py-8 md:py-0">
      <div className="mt-10 flex text-[6rem] font-bold leading-[1] md:mt-0 md:hidden md:text-[14rem]">
        {number}
      </div>
      <div ref={ref} className="mb-8 mt-8 h-0.5 w-full bg-neutral-lighter md:mt-0">
        <motion.div className="h-0.5 w-8 bg-neutral-black" style={width} />
      </div>
      {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
      <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
      {description && <RichText className="md:text-md" data={description} />}
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
        {links && Array.isArray(links) && (
          <div className="mt-5 flex flex-wrap gap-4 md:mt-6">
            {links.map(({ link }, i) => (
              <CMSLink key={i} size="lg" {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
