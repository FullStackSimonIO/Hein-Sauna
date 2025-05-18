// @ts-nocheck
'use client'

import { BiSolidStar } from 'react-icons/bi'
import type { Testimonial18 as Testimonial18Props } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const Testimonial18: React.FC<Testimonial18Props> = ({
  heading,
  richText,
  testimonials,
  links,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          {richText && <RichText data={richText} />}
        </div>
        <div className="columns-1 gap-x-8 md:columns-2 lg:columns-3">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="mb-8 inline-block w-full border border-border-primary p-6 md:p-8"
            >
              <div className="mb-5 flex md:mb-6">
                {Array.from({ length: testimonial.numberOfStars }, (_, starIndex) => (
                  <BiSolidStar key={starIndex} className="mr-1 size-6 text-yellow-500" />
                ))}
              </div>
              {richText && <RichText data={testimonial.quote} />}
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                {testimonial.avatar && (
                  <Media
                    resource={testimonial.avatar}
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    <span>{testimonial.position}</span>
                    {testimonial.companyName && `, ${testimonial.companyName}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {links && links?.length > 0 && (
          <div className="mt-12 flex justify-center gap-4 md:mt-16">
            {links.map(({ link }, index) => (
              <CMSLink key={index} {...link} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
