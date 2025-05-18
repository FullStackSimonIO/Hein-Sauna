// @ts-nocheck
'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import React from 'react'
import type { Layout419 as Layout419Props } from '@/payload-types'

export const Layout419: React.FC<Layout419Props> = ({ links, title, tagline, richText, data }) => {
  return (
    <section id="layout-419" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        {/* Linke Seite: Titel, Text & Links */}
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
                {title && (
                  <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    {title}
                  </h2>
                )}
                {richText && (
                  <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
                )}

                {/* Links */}
                {links && Array.isArray(links) && (
                  <div className="mt-5 flex flex-wrap gap-4 md:mt-6">
                    {links.map((link, i) => (
                      <CMSLink key={i} size="lg" {...link} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Rechte Seite: Dynamische Daten */}
        <div>
          {data?.map((item, index) => (
            <div
              key={index}
              className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10"
            >
              <div className="max-w-md">
                {/* Bild */}
                {item.img && (
                  <div className="mb-6 md:mb-8">
                    <Media
                      imgClassName="w-full object-cover rounded-lg shadow-lg"
                      priority
                      resource={item.img}
                    />
                  </div>
                )}

                {/* Überschrift & Beschreibung */}
                {item.subheading && (
                  <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">{item.subheading}</h3>
                )}
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
