// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Gallery10 as Gallery10Props } from '@/payload-types'

export const Gallery10: React.FC<Gallery10Props> = ({ heading, description, images }) => {
  return (
    <section id="gallery-10" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          {description && <RichText className="md:text-md" data={description} />}
        </div>
        <div className="gap-8 space-y-8 md:columns-3">
          {images?.map((image, index) => {
            const imageUrl = image?.url || undefined
            return (
              <a
                key={index}
                href={imageUrl}
                target={imageUrl ? '_blank' : undefined}
                rel={imageUrl ? 'noopener noreferrer' : undefined}
                className="block w-full"
              >
                {image?.image && (
                  <Media resource={image.image} className="w-full h-full object-cover" />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
