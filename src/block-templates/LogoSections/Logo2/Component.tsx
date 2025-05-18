// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import type { Logo2 as Logo2Props } from '@/payload-types'

export const Logo2: React.FC<Logo2Props> = ({ heading, logos }) => {
  return (
    <section id="logo-2" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container grid grid-cols-1 items-start justify-start gap-x-12 gap-y-8 md:grid-cols-[max-content_1fr] md:items-center md:justify-between md:gap-y-4 lg:gap-x-16">
        <h1 className="font-bold leading-[1.2] md:max-w-[16rem] md:text-md md:leading-[1.2] lg:max-w-xxs">
          {heading}
        </h1>
        <div className="grid grid-cols-2 items-center justify-end gap-x-4 gap-y-4 pt-4 sm:grid-cols-3 md:gap-x-8 md:pt-0 lg:grid-cols-5">
          {logos?.map((logo, index) =>
            logo ? (
              <div
                key={index}
                className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0"
              >
                <Media resource={logo.logo} className="max-h-12 md:max-h-14" />
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
