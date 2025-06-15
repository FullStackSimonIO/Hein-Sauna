// components/AccessoryCard.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Accessory } from '@/payload-types'
import { motion } from 'framer-motion'

type AccessoryCardProps = {
  accessory: Accessory
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ accessory }) => {
  const { slug, title, richText, image, oldPrice, newPrice } = accessory
  const displayPrice = newPrice ?? oldPrice

  return (
    <Link
      href={`/zubehoer/${slug}`}
      className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Container als Column-Flex, damit wir Content stretch'en können */}
      <div className="flex flex-col h-full bg-white">
        {/* Bild */}
        <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="
                relative w-full overflow-hidden
                h-48         /* Mobile: 12rem */
                md:h-80      /* ab md: 20rem */
                lg:h-[24rem] /* ab lg: 36rem */
              "
          >
            {image && (
              <motion.div
                className="absolute inset-0"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Media resource={image} fill className="object-cover w-full h-full" />
              </motion.div>
            )}
            {/* dunkles Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Textbereich: flex-grow sorgt dafür, dass alle Cards die gleiche Höhe haben */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-headingDark mb-2">{title}</h3>

          {/* Beschreibung auf max. 3 Zeilen clampen */}
          {richText && (
            <RichText data={richText} className="text-sm text-gray-700 mb-4 line-clamp-3" />
          )}

          {/* Spacer, damit Price unten klebt */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-2">
              {newPrice && (
                <span className="line-through text-sm text-gray-400">€{oldPrice?.toFixed(2)}</span>
              )}
              <span className="text-lg font-bold text-gray-900">€{displayPrice?.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AccessoryCard
