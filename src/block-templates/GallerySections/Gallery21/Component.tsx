// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@relume_io/relume-ui'
import type { CarouselApi } from '@relume_io/relume-ui'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Gallery21 as Gallery21Props } from '@/payload-types'

export const Gallery21: React.FC<Gallery21Props> = ({ heading, description, images }) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <section id="gallery-21" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText data={description} />}
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: 'start',
          }}
        >
          <CarouselContent className="ml-0">
            {images?.map((image, index) => (
              <CarouselItem key={index} className="basis-full pl-0 pr-6 md:basis-1/2 md:pr-8">
                {image && <Media resource={image.image} />}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="rt-8 mt-8 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              {images?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx('mx-[3px] inline-block size-2 rounded-full', {
                    'bg-black': current === index + 1,
                    'bg-neutral-light': current !== index + 1,
                  })}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
