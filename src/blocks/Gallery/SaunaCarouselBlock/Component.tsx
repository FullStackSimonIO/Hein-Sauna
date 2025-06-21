'use client'

import React, { useState } from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { useKeenSlider } from 'keen-slider/react'
import type { SaunaCarouselBlock as SaunaCarouselBlockType } from '@/payload-types'
import 'keen-slider/keen-slider.min.css'

export const SaunaCarouselBlock: React.FC<SaunaCarouselBlockType> = ({ heading, images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1.2, spacing: 24 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 1.5, spacing: 24 } },
      '(min-width: 1024px)': { slides: { perView: 2.2, spacing: 32 } },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

  if (images && !images.length) return null

  return (
    <section id="sauna-carousel" className="py-16 bg-backgroundLight overflow-hidden">
      <div>
        {heading && <h2 className="mb-6 text-3xl font-bold text-headingDark">{heading}</h2>}

        <div className="relative">
          {/* Prev/Next */}
          <button
            onClick={() => slider?.current?.prev()}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition"
          >
            ‹
          </button>
          <button
            onClick={() => slider?.current?.next()}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition"
          >
            ›
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {images &&
              images.map((img, idx) => (
                <div
                  key={idx}
                  className="
                  keen-slider__slide
                  snap-start flex-shrink-0
                  w-[80vw] sm:w-[60vw] lg:w-[40vw]
                  overflow-hidden rounded-2xl shadow-lg
                "
                >
                  {/* Bild-Container: feste Höhe */}
                  <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
                    <Media resource={img.image} fill imgClassName="object-cover w-full h-full" />
                  </div>

                  {/* Text darunter */}
                  <div className="p-4 bg-white">
                    {img.imageTitle && (
                      <h3 className="mb-2 text-xl font-semibold text-headingDark">
                        {img.imageTitle}
                      </h3>
                    )}
                    {img.imageDescription && (
                      <RichText className="text-gray-600 text-sm" data={img.imageDescription} />
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 flex space-x-2">
            {images &&
              images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => slider?.current?.moveToIdx(idx)}
                  className={`
                  w-3 h-3 rounded-full transition-colors
                  ${currentSlide === idx ? 'bg-accent' : 'bg-paragraphDark'}
                `}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaunaCarouselBlock
