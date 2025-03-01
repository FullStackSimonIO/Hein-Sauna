'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout423 as Layout423Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'

const slideVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    height: 'auto',
    y: 0,
  },
}

export const Layout423: React.FC<Layout423Props> = ({ tagline, title, richText, features }) => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState<number | null>(null)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
          {richText && <RichText className="md:text-md" data={richText} />}
        </div>

        {/* Features */}
        <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
          {features.map((feature, index) => (
            <a
              key={index}
              className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
              onMouseEnter={() => setHoveredFeatureIdx(index)}
              onMouseLeave={() => setHoveredFeatureIdx(null)}
            >
              {/* Background Media */}
              <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-black/50" />
                {feature.media && typeof feature.media === 'object' && (
                  <Media
                    imgClassName="w-full object-cover rounded-lg shadow-lg"
                    resource={feature.media}
                  />
                )}
              </div>

              {/* Content */}
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                <div className="z-10">
                  <p className="mb-2 font-semibold text-text-alternative">{feature.tagline}</p>
                  <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {feature.heading}
                  </h3>
                  <div className="lg:hidden">
                    {feature.richText && (
                      <RichText
                        className="md:text-md text-text-alternative"
                        data={feature.richText}
                      />
                    )}
                    {/* Button */}
                    {feature.links && Array.isArray(feature.links) && (
                      <div className="mt-6 md:mt-8">
                        {feature.links.map(({ link }, i) => (
                          <CMSLink key={i} size="lg" {...link} className="text-text-alternative" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect (Desktop) */}
                <AnimatePresence>
                  {hoveredFeatureIdx === index && (
                    <motion.div
                      className="z-10 hidden lg:block lg:w-[340px]"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {feature.richText && (
                        <p className="mt-5 text-text-alternative md:mt-6">
                          <RichText
                            className="md:text-md text-text-alternative"
                            data={feature.richText}
                          />
                        </p>
                      )}
                      {/* Button */}
                      {feature.links && Array.isArray(feature.links) && (
                        <div className="mt-6 md:mt-8">
                          {feature.links.map(({ link }, i) => (
                            <CMSLink
                              key={i}
                              size="lg"
                              {...link}
                              className="text-text-alternative"
                            />
                          ))}
                        </div>
                      )}
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
