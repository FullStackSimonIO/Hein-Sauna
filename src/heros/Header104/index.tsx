'use client'

import { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Header104: React.FC<Page['hero']> = ({ title, richText, media, links }) => {
  return (
    <section id="hero-section" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl overflow-hidden text-center">
        {/* ✅ Überschrift mit Media-Images */}
        <h1 className="mb-5 text-3xl font-bold leading-[1.2] sm:text-6xl md:mb-6 md:text-9xl lg:text-[5rem]">
          {title.split(' ').map((word, index) => {
            const mediaItem = media?.[index]?.image
            return (
              <span key={index} className="relative">
                {mediaItem && typeof mediaItem === 'object' && 'url' in mediaItem ? (
                  <span
                    className="bg-contain bg-no-repeat pr-16 [background-position-x:100%] [background-position-y:center] sm:pr-[5.75rem] md:pr-[7.5rem] lg:pr-[11.5rem]"
                    style={{
                      backgroundImage: `url('${mediaItem.url}')`,
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  ` ${word} `
                )}
              </span>
            )
          })}
        </h1>

        {/* ✅ RichText Beschreibung */}
        {richText && <RichText className="md:text-md" data={richText} />}

        {/* ✅ Buttons & Links */}
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
    </section>
  )
}
