// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout66 as Layout66Props } from '@/payload-types'

export const Layout66: React.FC<Layout66Props> = ({ title, richText, features }) => {
  return (
    <section id="layout-66" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Titel & Beschreibung */}
        <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{title}</h3>
          <div>
            {richText && <RichText className="mb-5 md:mb-6 md:text-md" data={richText} />}

            {/* Features mit Bildern/Videos */}
            {features && Array.isArray(features) && features.length > 0 && (
              <div className="grid grid-cols-1 gap-4 py-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {/* Media (Bild oder Video) */}
                    {feature.media && typeof feature.media === 'object' && (
                      <div className="mr-4 flex-none w-20 h-20">
                        <Media
                          imgClassName="w-full h-full object-cover rounded-lg shadow-lg"
                          resource={feature.media}
                        />
                      </div>
                    )}

                    {/* Beschreibung */}
                    <div className="flex-1">
                      {feature.description && (
                        <RichText className="text-gray-700" data={feature.description} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
