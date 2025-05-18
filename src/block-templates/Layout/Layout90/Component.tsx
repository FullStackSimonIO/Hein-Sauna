// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout90 as Layout90Props } from '@/payload-types'

export const Layout90: React.FC<Layout90Props> = ({ media, title, richText }) => {
  return (
    <section id="layout-90" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Titel & Beschreibung */}
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{title}</h3>
          {richText && <RichText className="text-gray-700" data={richText} />}
        </div>

        {/* Bild oder Video */}
        {media && typeof media === 'object' && (
          <Media
            imgClassName="w-full object-cover rounded-lg shadow-lg"
            resource={media}
            priority
          />
        )}
      </div>
    </section>
  )
}
