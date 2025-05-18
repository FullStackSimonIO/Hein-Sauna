// @ts-nocheck
'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import clsx from 'clsx'
import type { Layout458 as Layout458Props } from '@/payload-types'

export const Layout458: React.FC<Layout458Props> = ({
  tagline,
  title,
  richText,
  links,
  features,
}) => {
  return (
    <section id="layout-458" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <div className="rb-12 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">{title}</h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            {richText && <RichText className="md:text-md" data={richText} />}
            {links && links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map(({ link }, i) => (
                  <CMSLink key={i} size="lg" {...link} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={clsx('w-full', {
                'md:mt-[25%]': index === 1,
                'md:mt-[50%]': index === 2,
              })}
            >
              {/* Feature Image */}
              <div className="rb-6 mb-6 w-full md:mb-8">
                {feature.media && typeof feature.media === 'object' && (
                  <Media
                    imgClassName="w-full object-cover rounded-lg shadow-lg"
                    priority
                    resource={feature.media}
                  />
                )}
              </div>

              {/* Feature Content */}
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {feature.heading}
              </h2>
              {feature.description && (
                <RichText className="text-gray-700" data={feature.description} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
