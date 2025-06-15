'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Gallery10 as Gallery10Props } from '@/payload-types'
import { useState, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

export const Gallery10: React.FC<Gallery10Props> = ({ heading, description, images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold md:text-6xl lg:text-7xl">{heading}</h2>
          {description && (
            <RichText className="text-base md:text-lg text-gray-700" data={description} />
          )}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {images?.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="cursor-pointer overflow-hidden rounded-lg w-full"
            >
              {img.image && (
                <Media resource={img.image} imgClassName="w-full h-auto object-cover rounded-lg" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeLightbox}
        >
          {/* Prevent backdrop click closing when clicking inside content */}
          <div className="relative max-w-full max-h-full px-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl p-2 focus:outline-none"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 focus:outline-none"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            {/* Next Arrow */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 focus:outline-none"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center">
              <Media
                resource={images[currentIndex]?.image}
                imgClassName="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
