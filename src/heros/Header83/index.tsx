'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Header83: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  const { scrollYProgress } = useScroll()
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1])

  return (
    <section id="hero-section" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hero Content */}
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                {title}
              </h1>
              {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex md:justify-center gap-4">
                    {links.map(({ link }, i) => (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hintergrundbilder */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 z-10 bg-black/50"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            {Array.isArray(media) &&
              media.map(({ image }, index) => (
                <div
                  key={index}
                  className={clsx(
                    'relative',
                    [0, 2, 3, 5, 6, 8].indexOf(index) !== -1 && 'hidden md:block',
                  )}
                >
                  {image && typeof image === 'object' && (
                    <Media fill imgClassName="-z-10 object-cover" priority resource={image} />
                  )}
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
