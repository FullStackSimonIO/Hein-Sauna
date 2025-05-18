// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { Testimonial1 as Testimonial1Props } from '@/payload-types'

export const Testimonial1: React.FC<Testimonial1Props> = ({
  logo,
  richText,
  avatar,
  name,
  position,
  companyName,
  links,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            {logo && <Media priority resource={logo} className="size-16 min-h-16 min-w-16" />}
          </div>
          {richText && <RichText data={richText} />}
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              {avatar && (
                <Media
                  priority
                  resource={avatar}
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">{name}</p>
              <p>
                <span>{position}</span>
                {companyName && `, ${companyName}`}
              </p>
            </div>
          </div>
          {links && links?.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {links.map(({ link }, index) => (
                <CMSLink key={index} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
