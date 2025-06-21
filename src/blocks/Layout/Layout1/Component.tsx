'use client'

import React from 'react'
import type { Layout1 as Layout1Props } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const Layout1: React.FC<Layout1Props> = ({ tagline, title, richText, media, links }) => {
  return (
    <section id="layout-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="layout-section">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <Badge className="font-semibold mb-3 md:mb-4 bg-accent text-background">
              {tagline}
            </Badge>{' '}
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            {richText && <RichText data={richText} className="text-paragraphDark" />}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {links && Array.isArray(links) && (
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            {media && typeof media === 'object' && (
              <Media className="w-full h-auto object-cover" resource={media} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
