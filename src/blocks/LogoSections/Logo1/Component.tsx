'use client'

import { Media } from '@/components/Media'
import type { Logo1 as Logo1Props } from '@/payload-types'

export const Logo1: React.FC<Logo1Props> = ({ heading, logos }) => {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
          {logos &&
            logos?.map((logo, index) =>
              logo ? (
                <Media key={index} resource={logo.logo} className="max-h-12 md:max-h-14" />
              ) : null,
            )}
        </div>
      </div>
    </section>
  )
}
