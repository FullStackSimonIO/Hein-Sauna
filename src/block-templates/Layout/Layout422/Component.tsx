// @ts-nocheck
'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout422 as Layout422Props } from '@/payload-types'

const slideVariants = {
  hidden: { opacity: 0, height: 0, y: 50 },
  visible: { opacity: 1, height: 'auto', y: 0 },
}

export const Layout422: React.FC<Layout422Props> = ({ tagline, title, richText, features }) => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState<number | null>(null)

  return (
    <section id="layout-422" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
          {richText && <RichText className="md:text-md" data={richText} />}
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.url ?? '#'}
              className="relative flex w-full flex-col overflow-hidden md:w-1/2 lg:h-full lg:transition-all lg:duration-200 lg:hover:w-[70%]"
              onMouseEnter={() => setHoveredFeatureIdx(index)}
              onMouseLeave={() => setHoveredFeatureIdx(null)}
            >
              {/* Background Image */}
              <div className="group absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-black/50" />
                {feature.media && typeof feature.media === 'object' && (
                  <Media
                    imgClassName="w-full object-cover rounded-lg shadow-lg"
                    resource={feature.media}
                  />
                )}
              </div>

              {/* Content */}
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8 lg:p-12">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                <div className="z-10">
                  <p className="mb-2 font-semibold text-text-alternative">{feature.tagline}</p>
                  <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
                    {feature.heading}
                  </h3>

                  {/* Mobile Content (Visible by Default) */}
                  <div className="lg:hidden">
                    <p className="mt-5 text-text-alternative md:mt-6">{feature.description}</p>
                  </div>
                </div>

                {/* Hover Content (Only Visible on Large Screens) */}
                <AnimatePresence>
                  {hoveredFeatureIdx === index && (
                    <motion.div
                      className="z-10 hidden lg:block lg:w-[528px]"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="mt-5 text-text-alternative md:mt-6">{feature.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
