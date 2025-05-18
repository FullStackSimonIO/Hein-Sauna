// @ts-nocheck
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { Stats4 as Stats4Props } from '@/payload-types'

export const Stats4: React.FC<Stats4Props> = ({ heading, description, image, stats }) => {
  return (
    <section id="stats-4" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 flex flex-col items-start">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          {description && <RichText data={description} />}
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {stats &&
            stats.map((stat, index) => (
              <div key={index} className="w-full border-l-2 border-border-alternative pl-8">
                <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                  {stat.percentage}
                </p>
                <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                  {stat.heading}
                </h3>
              </div>
            ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {image && <Media resource={image} className="size-full object-cover" />}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}
