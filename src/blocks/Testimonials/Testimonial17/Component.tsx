'use client'

import { Media } from '@/components/Media'
import { BiSolidStar } from 'react-icons/bi'
import type { Testimonial17 as Testimonial17Props } from '@/payload-types'

export const Testimonial17: React.FC<Testimonial17Props> = ({
  heading,
  description,
  testimonials,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          {description && <p className="md:text-md">{description}</p>}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
            >
              <div className="mb-5 flex md:mb-6">
                {Array.from({ length: testimonial.numberOfStars }, (_, starIndex) => (
                  <BiSolidStar key={starIndex} className="mr-1 size-6 text-yellow-500" />
                ))}
              </div>
              <blockquote className="md:text-md">{testimonial.quote}</blockquote>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                {testimonial.avatar && (
                  <Media
                    priority
                    resource={testimonial.avatar}
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
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
      </div>
    </section>
  )
}
