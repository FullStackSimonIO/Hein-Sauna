// components/SaunaCard.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Sauna } from '@/payload-types'

export type SaunaCardProps = Pick<
  Sauna,
  'name' | 'slug' | 'previewImage' | 'previewDescription' | 'uvp' | 'price' | 'discount'
> & {
  categorySlug: string
}

export const SaunaCard: React.FC<SaunaCardProps> = ({
  name,
  slug,
  categorySlug,
  previewImage,
  previewDescription,
  uvp,
  price,
  discount,
}) => {
  const uvpNumber = typeof uvp === 'number' ? uvp : undefined
  const priceNumber = typeof price === 'number' ? price : undefined
  const finalPrice =
    priceNumber != null && typeof discount === 'number'
      ? priceNumber * (1 - discount / 100)
      : priceNumber

  return (
    <Link
      href={`/saunen/${categorySlug}/${slug}`}
      className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      aria-label={`Mehr Infos zu ${name}`}
    >
      <div className="flex flex-col h-full bg-white border border-gray-100">
        {/* Bild */}
        {previewImage && (
          <div className="aspect-[4/3] relative w-full overflow-hidden">
            <Media
              resource={previewImage}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Inhalt */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>

          {previewDescription && (
            <RichText
              data={previewDescription}
              className="text-gray-600 text-sm mb-4 line-clamp-3"
            />
          )}

          {/* Preisbereich */}
          {(uvpNumber != null || finalPrice != null) && (
            <div className="mt-auto flex items-end gap-2">
              {uvpNumber != null && (
                <span className="text-sm text-gray-400 line-through">€{uvpNumber.toFixed(2)}</span>
              )}
              {finalPrice != null && (
                <span className="text-lg font-bold text-gray-800">€{finalPrice.toFixed(2)}</span>
              )}
              {typeof discount === 'number' && (
                <span className="ml-auto text-sm text-green-600 font-medium">-{discount}%</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default SaunaCard
