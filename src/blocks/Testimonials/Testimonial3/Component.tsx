import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { Testimonial3 as Testimonial3Props } from '@/payload-types'

export const Testimonial3: React.FC<Testimonial3Props> = ({
  heading,
  description,
  testimonials,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          {description && <RichText data={description} className="md:text-md" />}
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="mb-6 md:mb-8">
                {testimonial.image && <Media resource={testimonial.image} className="size-14" />}
              </div>
              {testimonial.quote && <RichText data={testimonial.quote} className="md:text-md" />}
              <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                <div className="mb-3 md:mb-4">
                  {testimonial.avatar && (
                    <Media resource={testimonial.avatar} className="size-12 rounded-full" />
                  )}
                </div>
                <p className="font-semibold">{testimonial.name}</p>
                <p>
                  <span>{testimonial.position}</span>, <span>{testimonial.companyName}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
