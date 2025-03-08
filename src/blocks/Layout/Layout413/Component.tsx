'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'framer-motion'
import type { Layout413 as Layout413Props } from '@/payload-types'

export const Layout413: React.FC<Layout413Props> = ({
  media,
  tagline,
  title,
  richText,
  subHeadings,
  links,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-0">
          {/* Bild mit Animation */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {media && (
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                priority
                resource={media}
              />
            )}
          </motion.div>

          {/* Text-Content */}
          <div className="md:ml-12 lg:ml-20">
            {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
            {title && (
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
            )}
            {richText && (
              <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
            )}

            {/* Untertitel + Beschreibungen */}
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings?.map((subHeading, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p>{subHeading.description}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            {links && Array.isArray(links) && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map((link, i) => (
                  <CMSLink key={i} size="lg" {...link} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
