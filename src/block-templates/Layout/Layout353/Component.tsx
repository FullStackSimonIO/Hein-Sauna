// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { Layout353 as Layout353Props } from '@/payload-types'

export const Layout353: React.FC<Layout353Props> = ({
  tagline,
  title,
  richText,
  links,
  featureSections,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          {/* Linke Spalte: Überschrift, Text, Buttons */}
          <div className="static md:sticky md:top-[30%]">
            {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h2>
            {richText && <RichText className="md:text-md" data={richText} />}
            {links && Array.isArray(links) && links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map(({ link }, i) => (
                  <CMSLink key={i} size="lg" {...link} />
                ))}
              </div>
            )}
          </div>

          {/* Rechte Spalte: Features mit Media */}
          <div>
            {featureSections?.map((section, index) => (
              <div
                key={index}
                className="sticky mb-8 border border-border-primary bg-background-primary p-8 rounded-lg shadow-lg"
                style={{ top: `${30 + index * 5}%` }}
              >
                {/* Media (Bild oder Video) */}
                {section.media && typeof section.media === 'object' && (
                  <div className="mb-3 md:mb-4">
                    <Media
                      imgClassName="w-full object-cover rounded-lg shadow-lg"
                      resource={section.media}
                    />
                  </div>
                )}
                {/* Feature Titel & Beschreibung */}
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
                {section.description && (
                  <RichText className="text-gray-700" data={section.description} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
