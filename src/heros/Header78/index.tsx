'use client'
import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { motion } from 'framer-motion'

export const Header78: React.FC<Page['hero']> = ({ title, richText, media = [], links }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
          {richText && (
            <RichText className="mb-6 text-white" data={richText} enableGutter={false} />
          )}
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

        {/* 🔥 Marquee-Effekt für Bilder */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          >
            {Array.isArray(media) &&
              media.map((imageObj, index) => (
                <div key={index} className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                  {imageObj.image && typeof imageObj.image === 'object' && (
                    <Media
                      fill
                      imgClassName="absolute inset-0 size-full object-cover"
                      priority
                      resource={imageObj.image}
                    />
                  )}
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
