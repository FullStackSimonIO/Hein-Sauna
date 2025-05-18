// @ts-nocheck
'use client'

import clsx from 'clsx'
import { Button } from '@relume_io/relume-ui'
import React from 'react'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { Layout356 as Layout356Props } from '@/payload-types'

export function Layout356({ features }: Layout356Props) {
  return (
    <section id="layout-356" className="relative">
      <div className="sticky top-0">
        {features?.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="relative -top-32 h-0" />
            <div
              className={clsx(
                'relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0',
                { 'top-0 lg:mb-32': index === 0 },
                { 'lg:top-16 lg:-mt-16 lg:mb-16': index === 1 },
                { 'lg:top-32 lg:mb-16': index === 2 },
              )}
            >
              <FeatureCard feature={feature} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Layout356Props['features'][0] }) {
  return (
    <div className="px-[5%]">
      <div className="container">
        <a href={feature.anchor?.url ?? '#'} className="flex h-16 w-full items-center underline">
          <span className="mr-5 font-semibold md:mr-6 md:text-md">{feature.anchor?.number}</span>
          <h1 className="font-semibold md:text-md">{feature.anchor?.title}</h1>
        </a>
        <div className="py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
            <div>
              {feature.tagline && <p className="mb-3 font-semibold md:mb-4">{feature.tagline}</p>}
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {feature.heading}
              </h2>
              {feature.richText && (
                <RichText
                  className="mb-6 text-gray-700"
                  data={feature.richText}
                  enableGutter={false}
                />
              )}
              {feature.links && feature.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4 md:mt-6">
                  {feature.links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              {feature.media && typeof feature.media === 'object' && (
                <Media
                  imgClassName="w-full object-cover rounded-lg shadow-lg"
                  priority
                  resource={feature.media}
                />
              )}
              {feature.links && feature.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4 md:mt-6">
                  {feature.links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
