'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import clsx from 'clsx'
import type { Gallery9 as Gallery9Props } from '@/payload-types'

export const Gallery9: React.FC<Gallery9Props> = ({ heading, description, images }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          {description && <RichText data={description} />}
        </div>
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-2 gap-6 md:auto-cols-auto md:grid-cols-[2fr_1fr_1fr] md:gap-8">
          {images?.map((image, index) => (
            <a
              key={index}
              href={image?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('inline-block size-full', {
                'col-start-1 col-end-2 row-start-1 row-end-3': index === 0,
              })}
            >
              <div className="size-full">
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
