'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { CTA1 as CTA1Props } from '@/payload-types'

export const CTA1: React.FC<CTA1Props> = ({ title, richText, media, links }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* ✅ Linke Seite mit Text */}
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
            {richText && (
              <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
            )}
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex md:justify-center gap-4">
                  {links.map(({ link }, i) => (
                    <li key={i}>
                      <CMSLink size="lg" {...link} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* ✅ Rechte Seite mit Bild aus der Media Collection */}
          <div>
            {media && typeof media === 'object' && !Array.isArray(media) && (
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                priority
                resource={media}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
