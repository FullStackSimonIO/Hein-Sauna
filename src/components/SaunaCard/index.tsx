// src/components/SaunaCard/index.tsx
'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { Sauna } from '@/payload-types'

export type SaunaCardProps = Pick<
  Sauna,
  'name' | 'slug' | 'previewImage' | 'previewDescription' | 'uvp' | 'price' | 'discount' | 'ctaLink'
>

export const SaunaCard: React.FC<SaunaCardProps> = ({
  name,
  slug,
  previewImage,
  previewDescription,
  uvp,
  price,
  discount,
  ctaLink,
}) => {
  // uvp und price absichern
  const uvpNumber = typeof uvp === 'number' ? uvp : undefined
  const priceNumber = typeof price === 'number' ? price : undefined
  // Rabatt berechnen, nur wenn priceNumber da
  const finalPrice =
    priceNumber != null && typeof discount === 'number'
      ? priceNumber * (1 - discount / 100)
      : priceNumber

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm">
      {previewImage && (
        <div className="h-48 w-full relative">
          <Media resource={previewImage} fill className="object-cover" />
        </div>
      )}

      <div className="p-4 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>

        {previewDescription && (
          <RichText data={previewDescription} className="text-gray-600 text-sm mb-4 line-clamp-3" />
        )}

        {/* Preis‐Bereich */}
        {(uvpNumber != null || finalPrice != null) && (
          <div className="mt-auto flex items-baseline gap-2">
            {uvpNumber != null && (
              <span className="text-sm line-through text-gray-400">€{uvpNumber.toFixed(2)}</span>
            )}
            {finalPrice != null && (
              <span className="text-lg font-bold">€{finalPrice.toFixed(2)}</span>
            )}
            {typeof discount === 'number' && (
              <span className="ml-auto text-sm text-green-600">-{discount}%</span>
            )}
          </div>
        )}

        {/* Call‐To‐Action Button */}
        {ctaLink && (
          <div className="mt-4">
            <CMSLink />
          </div>
        )}
      </div>
    </article>
  )
}
