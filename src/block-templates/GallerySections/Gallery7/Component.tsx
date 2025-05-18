// @ts-nocheck
'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import clsx from 'clsx'
import type { Gallery7 as Gallery7Props } from '@/payload-types'

export const Gallery7: React.FC<Gallery7Props> = ({ heading, description, images }) => {
  return (
    <section id="gallery-7" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          {description && <RichText data={description} className="text-lg md:text-xl" />}
        </div>
        <div className="grid auto-cols-fr justify-center gap-6 md:grid-cols-2 md:gap-8">
          {images?.map((image, index) => (
            <a
              key={index}
              href={image?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('inline-block w-full', {
                'col-start-1 col-end-2 row-start-1 row-end-3': index === 0,
              })}
            >
              <div
                className={clsx('relative size-full', {
                  'pt-[100%]': index === 0,
                  'pt-[56.25%]': index !== 0,
                })}
              >
                {image?.image && (
                  <Media resource={image.image} className="absolute inset-0 object-cover" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
