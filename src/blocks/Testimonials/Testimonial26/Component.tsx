'use client'

import { BiSolidStar } from 'react-icons/bi'
import type { Testimonial26 as Testimonial26Props } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const Testimonial26: React.FC<Testimonial26Props> = ({
  heading,
  description,
  testimonials,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          {description && <RichText data={description} />}
        </div>
        <div className="columns-1 gap-x-8 after:block md:columns-2">
          {testimonials?.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ✅ Fix for TypeScript issue
type TestimonialType = NonNullable<Testimonial26Props['testimonials']>[number]

const TestimonialCard: React.FC<TestimonialType> = ({
  quote,
  numberOfStars,
  avatar,
  name,
  position,
  companyName,
}) => (
  <div className="mb-8 flex w-full break-inside-avoid flex-col items-start justify-between border border-border-primary p-6 md:p-8">
    <div className="mb-5 flex md:mb-6">
      {Array.from({ length: numberOfStars }, (_, starIndex) => (
        <BiSolidStar key={starIndex} className="size-6 text-yellow-500" />
      ))}
    </div>
    <blockquote className="md:text-md">{quote}</blockquote>
    <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
      {avatar && (
        <Media
          resource={avatar}
          className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
        />
      )}
      <div>
        <p className="font-semibold">{name}</p>
        <p>
          <span>{position}</span>
          {companyName && `, ${companyName}`}
        </p>
      </div>
    </div>
  </div>
)
