// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import clsx from 'clsx'
import type { Gallery8 as Gallery8Props } from '@/payload-types'

export const Gallery8: React.FC<Gallery8Props> = ({ heading, description, images }) => {
  return (
    <section id="gallery-8" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          {description && <RichText data={description} />}
        </div>

        <div className="gap-x-8 md:columns-2">
          {images?.map((image, index) => {
            const imageUrl = image?.url || undefined

            return (
              <a
                key={index}
                href={imageUrl}
                target={imageUrl ? '_blank' : undefined}
                rel={imageUrl ? 'noopener noreferrer' : undefined}
                className="mb-8 inline-block w-full"
              >
                <div
                  className={clsx('relative inline-block w-full', {
                    'pt-[100%]': index % 3 === 0,
                    'pt-[66.66%]': index % 3 !== 0,
                  })}
                >
                  {image?.image && (
                    <Media
                      resource={image.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
