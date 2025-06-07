// components/Header1.tsx
'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { TrustBadge } from '@/components/TrustIcon'
import { AnimateScrollIcon } from '@/components/AnimateScrollIcon'
import { FadeIn } from '@/components/Animations/FadeIn'

export const Header1: React.FC<Page['hero']> = ({ links, media, richText, title }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  // Debug: Falls keine Links kommen, prüfe Shape
  // console.log('Header links:', links)

  return (
    <section id="hero-section" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* Text-Column */}
          <div>
            <FadeIn>
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-headingDark">
                {title}
              </h1>
            </FadeIn>

            {richText && (
              <RichText className="mb-6" data={richText} enableProse={true} enableGutter={false} />
            )}

            {/* Link-Liste */}
            {Array.isArray(links) && links.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map((item, i) => {
                  // Falls Shape { label, url }: passe an</span>
                  const linkProps = 'link' in item ? item.link : item
                  return (
                    <li key={i}>
                      <CMSLink {...linkProps} className="text-paragraph" />
                    </li>
                  )
                })}
              </ul>
            ) : null}

            {/* Trust-Element unter den Links */}
            <div className="mt-8">
              <TrustBadge />
            </div>
          </div>

          {/* Bild-Column */}
          <div className="relative">
            {Array.isArray(media) && media.length > 0 && (
              <Media imgClassName="shadow-lg rounded-2xl" priority resource={media[0]!.image} />
            )}

            {/* Scroll-Icon am unteren Bildschirmrand */}
          </div>
        </div>
      </div>
      <AnimateScrollIcon className="absolute bottom-4 left-1/2 transform -translate-x-1/2" />
    </section>
  )
}
