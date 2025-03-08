'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Gallery1 as Gallery1Props } from '@/payload-types'

export const Gallery1: React.FC<Gallery1Props> = ({ heading, description, images }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          {description && <RichText data={description} />}
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-8">
          {images?.map((image, index) => (
            <a
              key={index}
              href={image?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="size-full"
            >
              <div className="w-full overflow-hidden">
                {image?.image && (
                  <Media resource={image.image} className="size-full object-cover" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
