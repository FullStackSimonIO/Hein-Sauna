//@ts-nocheck
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Layout352 as Layout352Props } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const Layout352: React.FC<Layout352Props> = ({ content, items }) => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="relume" className="relative z-0 w-full" ref={scrollRef}>
      <div className="relative -z-30">
        <div>
          <Content {...content} />
          <div className="px-[5%]">
            <div className="container">
              <div className="relative flex flex-col items-center justify-center">
                {/* Dynamischer Scroll-Strich */}
                <div className="absolute left-1.5 -z-20 h-full w-[3px] bg-neutral-lighter md:left-auto">
                  {/* Dynamischer Strich, der mit scrollYProgress animiert */}
                  <motion.div
                    style={{
                      height: useTransform(scrollYProgress, [0, 1], ['10vh', '100vh']),
                      opacity: useTransform(scrollYProgress, [0, 1], [1, 0.2]),
                    }}
                    className="absolute bottom-0 top-0 -z-10 w-[3px] bg-neutral-black"
                  />
                  {/* Dynamischer Farbverlauf oben */}
                  <motion.div
                    style={{
                      opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
                      height: useTransform(scrollYProgress, [0, 1], ['20vh', '100vh']),
                    }}
                    className="absolute left-0 right-0 top-0 z-10 w-full bg-gradient-to-b from-white to-transparent"
                  />
                  {/* Dynamischer Farbverlauf unten */}
                  <motion.div
                    style={{
                      opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
                      height: useTransform(scrollYProgress, [0, 1], ['20vh', '100vh']),
                    }}
                    className="absolute bottom-0 left-0 right-0 z-10 w-full bg-gradient-to-t from-white to-transparent"
                  />
                </div>

                {items.map((item, index) => (
                  <TimelineItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <Content {...content} />
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ date, description, media, links }: Layout352Props['items'][0]) => {
  const circleRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ['end end', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [0, 0.25, 0.75, 1])
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#ccc', '#000'])

  return (
    <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
      <motion.div
        className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
        style={{ opacity }}
      >
        <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{date}</h3>
      </motion.div>
      <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
        <motion.div
          ref={circleRef}
          style={{ backgroundColor }}
          className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
        />
      </div>
      <motion.div style={{ opacity }}>
        <div className="mb-10 md:mb-14 lg:mb-16">
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
        <div className="overflow-hidden">
          {media && typeof media === 'object' && (
            <Media imgClassName="w-full object-cover rounded-lg shadow-lg" resource={media} />
          )}
        </div>
      </motion.div>
    </div>
  )
}

const Content = ({ tagline, heading, description, links }: Layout352Props['content']) => (
  <div className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container">
      <div className="mx-auto max-w-lg text-center">
        {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
        {description && <RichText className="md:text-md" data={description} />}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          {links && Array.isArray(links) && (
            <div className="mt-5 flex flex-wrap gap-4 md:mt-6">
              {links.map(({ link }, i) => (
                <CMSLink key={i} size="lg" {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)
