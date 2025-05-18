// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import React from 'react'
import { BiSolidStar } from 'react-icons/bi'
import type { Testimonial13 as Testimonial13Props } from '@/payload-types'
import RichText from '@/components/RichText'

export const Testimonial13: React.FC<Testimonial13Props> = ({
  media,
  numberOfStars,
  name,
  richText,
  position,
  logo,
  quote,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            {media && <Media resource={media} className="aspect-square w-full object-cover" />}
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 flex md:mb-8">
              {Array.from({ length: numberOfStars }, (_, starIndex) => (
                <BiSolidStar key={starIndex} className="size-6 text-yellow-500" />
              ))}
            </div>
            {quote && <blockquote className="text-xl font-bold md:text-2xl">{quote}</blockquote>}
            {richText && <RichText data={richText} className="mt-4 text-gray-700 md:text-md" />}
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p className="font-semibold">{name}</p>
                <p>{position}</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
              <div>{logo && <Media resource={logo} className="size-12 rounded-full" />}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
