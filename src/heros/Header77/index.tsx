'use client'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import { motion } from 'framer-motion'

export const Header77: React.FC<Page['hero']> = ({ title, richText, media = [], links }) => {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      {/* ✅ Linke Seite mit Text */}
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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

      {/* ✅ Rechte Seite mit animierten Bildern */}
      <div className="flex items-center gap-4 overflow-hidden bg-background-secondary py-8 md:py-16 lg:h-screen">
        <div className="grid shrink-0 grid-cols-1 gap-y-4">
          <motion.div
            className="ml-[-8.5%] grid w-full animate-marquee-horizontally auto-cols-fr grid-cols-2 gap-4 self-center"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="grid w-full grid-flow-col gap-4">
                {media &&
                  media.map(({ image }, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      {image && typeof image === 'object' && (
                        <Media
                          fill
                          imgClassName="absolute inset-0 size-full object-cover"
                          resource={image}
                        />
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>

          <motion.div
            className="grid w-full animate-marquee-horizontally grid-cols-2 gap-4 self-center"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="grid w-full grid-flow-col gap-4">
                {media &&
                  media.map(({ image }, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      {image && typeof image === 'object' && (
                        <Media
                          fill
                          imgClassName="absolute inset-0 size-full object-cover"
                          resource={image}
                        />
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
