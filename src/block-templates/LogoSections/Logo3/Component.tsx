// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import type { Logo3 as Logo3Props } from '@/payload-types'

export const Logo3: React.FC<Logo3Props> = ({ heading, logos }) => {
  return (
    <section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
          {heading}
        </h1>
      </div>
      <div className="flex items-center pt-7 md:pt-0">
        {Array.from({ length: 2 }).map((_, loopIndex) => (
          <div key={loopIndex} className="flex shrink-0 animate-loop-horizontally items-center">
            {logos?.map((logo, logoIndex) =>
              logo ? (
                <Media
                  key={`${loopIndex}-${logoIndex}`}
                  resource={logo.logo}
                  className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
                />
              ) : null,
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
