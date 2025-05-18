// @ts-nocheck
'use client'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { Stats13 as Stats13Props } from '@/payload-types'

export const Stats13: React.FC<Stats13Props> = ({
  tagline,
  heading,
  description,
  links,
  stats,
}) => {
  return (
    <section id="stats-13" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            {description && <RichText data={description} />}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {links && links.map(({ link }, i) => <CMSLink key={i} size="lg" {...link} />)}
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-8 lg:gap-y-12">
            {stats.map((stat, index) => (
              <div key={index} className="w-full border-l-2 border-border-primary pl-8">
                <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                  {stat.percentage}
                </p>
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">{stat.heading}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
