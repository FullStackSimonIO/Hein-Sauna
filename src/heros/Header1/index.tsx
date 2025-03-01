'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const Header1: React.FC<Page['hero']> = ({ links, media, richText, title }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section id="hero-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex md:justify-center gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
          <div>
            {Array.isArray(media) && media.length > 0 && (
              <Media imgClassName="-z-10 object-cover" priority resource={media[0]!.image} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
