'use client'

import RichText from '@/components/RichText'
import { BiSolidStar } from 'react-icons/bi'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import type { Testimonial21 as Testimonial21Props } from '@/payload-types'

export const Testimonial21: React.FC<Testimonial21Props> = ({
  testimonials,
  heading,
  richText,
  links,
}) => {
  const renderTestimonials = () => (
    <div className="flex">
      {testimonials?.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  )

  return (
    <section id="testimonial-21" className="overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="container mb-12 max-w-lg px-[5%] text-center md:mb-18 lg:mb-20">
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-accent">
          {heading}
        </h1>
        {richText && <RichText data={richText} />}
      </div>
      <div className="flex animate-loop-testimonials">
        {renderTestimonials()}
        {renderTestimonials()}
      </div>
      {links && links?.length > 0 && (
        <div className="mt-12 flex justify-center gap-4 md:mt-16">
          {links.map(({ link }, index) => (
            <CMSLink key={index} reference={link.reference} />
          ))}
        </div>
      )}
    </section>
  )
}

const TestimonialCard: React.FC<{ testimonial: Testimonial21Props['testimonials'][0] }> = ({
  testimonial,
}) => (
  <div className="mr-8 flex w-[25rem] min-w-[25rem] flex-col items-start justify-between border border-accent p-6 md:p-8 overflow-hidden rounded-2xl">
    <div className="mb-5 flex md:mb-6">
      {Array.from({ length: testimonial.numberOfStars }, (_, starIndex) => (
        <BiSolidStar key={starIndex} className="size-6 text-yellow-500" />
      ))}
    </div>
    {testimonial.quote && <RichText data={testimonial.quote} />}
    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
      {testimonial.avatar && (
        <Media
          resource={testimonial.avatar}
          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
        />
      )}
      <div>
        <p className="font-semibold text-accent">{testimonial.name}</p>
        <p>
          <span>{testimonial.position}</span>
          {testimonial.companyName && `, ${testimonial.companyName}`}
        </p>
      </div>
    </div>
  </div>
)
