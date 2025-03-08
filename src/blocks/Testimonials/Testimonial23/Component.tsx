'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import type { Testimonial23 as Testimonial23Props } from '@/payload-types'
import type { CarouselApi } from '@relume_io/relume-ui'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@relume_io/relume-ui'
import clsx from 'clsx'

import { useEffect, useState } from 'react'

export const Testimonial23: React.FC<Testimonial23Props> = ({
  heading,
  description,
  testimonials,
}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            {description && <p className="md:text-md">{description}</p>}
          </div>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: 'start',
          }}
          className="overflow-hidden md:px-3.5"
        >
          <div className="relative">
            <CarouselContent className="ml-0 md:flex-row">
              {testimonials?.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="mr-4 basis-full pl-0 md:mr-0 md:basis-1/2 md:px-4 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-ml-3.5 hidden md:flex md:size-12 lg:size-14" />
            <CarouselNext className="-mr-3.5 hidden md:flex md:size-12 lg:size-14" />
          </div>
        </Carousel>
        <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx('relative mx-[3px] inline-block size-2 rounded-full', {
                'bg-black': current === index + 1,
                'bg-neutral-darker/40': current !== index + 1,
              })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard: React.FC<{ testimonial: Testimonial23Props['testimonials'][0] }> = ({
  testimonial,
}) => {
  return (
    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
      <div className="mb-8 md:mb-10 lg:mb-12">
        {testimonial.avatar &&
          typeof testimonial.avatar === 'object' &&
          !Array.isArray(testimonial.avatar) && (
            <Media
              imgClassName="w-full object-cover rounded-lg shadow-lg"
              priority
              resource={testimonial.avatar}
            />
          )}
      </div>
      <blockquote className="md:text-md">{testimonial.quote}</blockquote>
      <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
        {testimonial.avatar &&
          typeof testimonial.avatar === 'object' &&
          !Array.isArray(testimonial.avatar) && (
            <Media
              imgClassName="w-full object-cover rounded-lg shadow-lg"
              priority
              resource={testimonial.avatar}
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
