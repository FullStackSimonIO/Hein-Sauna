// @ts-nocheck
'use client'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { CTA33 as CTA33Props } from '@/payload-types'

export const Cta33: React.FC<CTA33Props> = ({ title, richText, links, logos = [] }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              {(links || []).map(({ link }, i) => (
                <CMSLink key={i} size="lg" {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          {logos &&
            logos.map(({ image }, index) => (
              <div key={index} className="max-h-12 md:max-h-14">
                {image && typeof image === 'object' && (
                  <Media fill imgClassName="size-full object-contain" resource={image} />
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
