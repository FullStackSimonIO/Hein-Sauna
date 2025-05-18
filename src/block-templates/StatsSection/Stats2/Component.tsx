// @ts-nocheck
'use client'

import RichText from '@/components/RichText'
import { Stats2 as Stats2Props } from '@/payload-types'

export const Stats2: React.FC<Stats2Props> = ({ heading, description, stats }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
          {description && (
            <RichText className="text-lg leading-[1.5] md:text-xl" data={description} />
          )}
        </div>
        <div className="grid 3w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
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
    </section>
  )
}
