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
import type { Gallery13 as Gallery13Props } from '@/payload-types'

export const Gallery13: React.FC<Gallery13Props> = ({ heading, description, images }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container text-center">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText data={description} />}
        </div>
      </div>
      {/* for all available options: https://www.embla-carousel.com/api/options/ */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: 'start',
        }}
        className="overflow-hidden"
      >
        <CarouselContent className="ml-0">
          {images?.map((image, index) => (
            <CarouselItem key={index} className="relative h-dvh pl-0">
              {image?.image && <Media resource={image.image} />}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-mt-8 ml-8 hidden lg:flex" />
        <CarouselNext className="-mt-8 mr-8 hidden lg:flex" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          {images?.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx(
                'relative mx-[3px] inline-block size-2 rounded-full',
                current === index + 1 ? 'bg-white' : 'bg-white/40',
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
