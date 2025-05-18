// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout38 as Layout38Props } from '@/payload-types'

export const Layout38: React.FC<Layout38Props> = ({ title, richText, media }) => {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      {/* Inhalt */}
      <div className="container relative z-10">
        <div className="flex items-center">
          <div className="w-full max-w-md">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
              {title}
            </h3>
            {richText && <RichText className="text-text-alternative md:text-md" data={richText} />}
          </div>
        </div>
      </div>

      {/* Hintergrundbild oder Video */}
      {media && typeof media === 'object' && (
        <div className="absolute inset-0 z-0">
          <Media
            imgClassName="w-full object-cover rounded-lg shadow-lg"
            priority
            resource={media}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
    </section>
  )
}
