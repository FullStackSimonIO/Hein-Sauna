// @ts-nocheck
'use client'

import React from 'react'
import { Button } from '@relume_io/relume-ui'
import { BiSolidStar } from 'react-icons/bi'
import type { Testimonial32 as Testimonial32Props } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const Testimonial32: React.FC<Testimonial32Props> = ({
  heading,
  richText,
  links,
  testimonials,
}) => {
  return (
    <section id="testimonial-32" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            {richText && <RichText data={richText} />}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {links &&
                links?.length > 0 &&
                links.map(({ link }, index) => (
                  <CMSLink key={index} {...link}>
                    <Button>{link.label}</Button>
                  </CMSLink>
                ))}
            </div>
          </div>
          <div>
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="sticky mb-8 border border-border-primary bg-background-primary p-8"
                style={{ top: `${30 + index * 2}%` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialCard: React.FC<{ testimonial: Testimonial32Props['testimonials'][0] }> = ({
  testimonial,
}) => {
  return (
    <div>
      <div className="rb-5 mb-5 md:mb-6">
        <div className="rb-6 mb-6 flex items-center">
          {Array.from({ length: testimonial.numberOfStars }, (_, starIndex) => (
            <BiSolidStar key={starIndex} className="mr-1 size-6 text-yellow-500" />
          ))}
        </div>
        <blockquote className="md:text-md">{testimonial.quote}</blockquote>
      </div>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
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
  )
}
