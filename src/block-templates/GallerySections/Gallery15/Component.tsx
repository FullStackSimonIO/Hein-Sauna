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
import type { Gallery15 as Gallery15Props } from '@/payload-types'

export const Gallery15: React.FC<Gallery15Props> = ({ heading, description, images }) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
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
            className="overflow-hidden"
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {images?.map((image, index) => (
                  <CarouselItem key={index} className="px-0 md:px-16 lg:px-28">
                    <div className="relative w-full pt-[66.66%]">
                      {image && (
                        <Media
                          resource={image.image}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
            </div>

            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images?.map((_, index) => (
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
          </Carousel>
        </div>
      </div>
    </section>
  )
}
