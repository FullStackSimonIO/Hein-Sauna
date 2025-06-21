'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout209 as Layout209Props } from '@/payload-types'
import AnimateOnScroll from '@/components/Animations/AnimateOnScroll'
import { FlyInFromLeft } from '@/components/Animations/FlyInFromLeft'

export const Layout209: React.FC<Layout209Props> = ({ heading, richText, image, listItems }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          {/* Links: Bild */}
          <div className="order-2 md:order-1">
            <FlyInFromLeft>
              {image && <Media resource={image} className="w-full object-cover" />}
            </FlyInFromLeft>
          </div>

          {/* Rechts: Text & Liste */}
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl text-headingDark">
              {heading}
            </h3>
            {richText && (
              <RichText className="mb-5 md:mb-6 md:text-md text-paragraphDark" data={richText} />
            )}

            {/* Staggered Reveal erst beim Scroll-Into-View */}
            <div className="grid grid-cols-1 gap-4 py-2">
              <AnimateOnScroll animation="stagger" stagger={0.15}>
                {listItems.map((item, i) => (
                  <div key={i} className="flex self-start  pb-2">
                    {item.icon && (
                      <div className="flex-none">
                        <Media resource={item.icon} className="size-6" />
                      </div>
                    )}
                    {item.richText && (
                      <RichText className="md:text-md text-paragraphDark" data={item.richText} />
                    )}
                  </div>
                ))}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout209
