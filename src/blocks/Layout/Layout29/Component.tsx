// components/Layout29.tsx
import React from 'react'
import type { Layout29 as Layout29Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { FadeIn } from '@/components/Animations/FadeIn'

export const Layout29: React.FC<Layout29Props> = ({ features, links, media }) => {
  return (
    <FadeIn>
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
            {/* Linke Spalte: Feature-Grid + Links */}
            <div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
                {features &&
                  features.map((feature, index) => (
                    <div key={index}>
                      {/* Feature-Media (einzelnes Upload-Objekt) */}
                      {feature.media && (
                        <div className="mb-3 md:mb-4">
                          <Media resource={feature.media} />
                        </div>
                      )}
                      <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                        {feature.heading}
                      </h2>
                      {/* RichText für die Beschreibung */}
                      <div>
                        <RichText data={feature.description} />
                      </div>
                    </div>
                  ))}
              </div>

              {/* Link-Gruppe unter den Features */}
              {Array.isArray(links) && links.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>

            {/* Rechte Spalte: Haupt-Media (Upload-Objekt) */}
            <div>{media && <Media resource={media} />}</div>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
