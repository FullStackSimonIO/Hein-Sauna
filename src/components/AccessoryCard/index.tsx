// components/AccessoryCard.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Accessory } from '@/payload-types'
import { motion } from 'framer-motion'
import { ShoppingBag, Tag } from 'lucide-react'

type ViewMode = 'grid' | 'list'

type AccessoryCardProps = {
  accessory: Accessory
  viewMode?: ViewMode
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ accessory, viewMode = 'grid' }) => {
  const { slug, title, richText, image, oldPrice, newPrice, categories } = accessory
  const displayPrice = newPrice ?? oldPrice
  const hasDiscount = newPrice && newPrice < (oldPrice || 0)

  if (viewMode === 'list') {
    return (
      <Link
        href={`/zubehoer/${slug}`}
        className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image */}
          <div className="relative w-full md:w-80 h-64 md:h-48 overflow-hidden">
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative w-full h-full overflow-hidden"
            >
              {image && (
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.05 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Media resource={image} fill className="object-cover w-full h-full" />
                </motion.div>
              )}

              {/* Discount Badge */}
              {hasDiscount && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Sale
                </div>
              )}

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover CTA */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={{
                  rest: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <ShoppingBag className="w-6 h-6 text-slate-800" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3
                className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
              >
                {title}
              </h3>

              {/* Categories */}
              {categories && Array.isArray(categories) && categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {categories.slice(0, 2).map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                      style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                    >
                      <Tag className="w-3 h-3" />
                      {typeof category === 'object' ? category.name : category}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              {richText && (
                <div
                  className="text-slate-600 mb-4 line-clamp-2"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  <RichText data={richText} />
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                {hasDiscount && (
                  <span className="line-through text-sm text-slate-400">
                    €{oldPrice?.toFixed(2)}
                  </span>
                )}
                <span
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  €{displayPrice?.toFixed(2)}
                </span>
              </div>

              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Ansehen
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/zubehoer/${slug}`}
      className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/50"
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative w-full h-full overflow-hidden"
          >
            {image && (
              <motion.div
                className="absolute inset-0"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Media resource={image} fill className="object-cover w-full h-full" />
              </motion.div>
            )}

            {/* Discount Badge */}
            {hasDiscount && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                Sale
              </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover CTA */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                rest: { opacity: 0, scale: 0.8 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl border border-white/20">
                <ShoppingBag className="w-6 h-6 text-slate-800" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3
              className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
            >
              {title}
            </h3>

            {/* Categories */}
            {categories && Array.isArray(categories) && categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {categories.slice(0, 2).map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                    style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                  >
                    <Tag className="w-3 h-3" />
                    {typeof category === 'object' ? category.name : category}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            {richText && (
              <div
                className="text-slate-600 mb-4 line-clamp-3"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              >
                <RichText data={richText} />
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-2">
              {hasDiscount && (
                <span className="line-through text-sm text-slate-400">€{oldPrice?.toFixed(2)}</span>
              )}
              <span
                className="text-2xl font-bold text-slate-900"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              >
                €{displayPrice?.toFixed(2)}
              </span>
            </div>

            {/* Hover CTA Button */}
            <motion.div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium text-center shadow-lg">
                Jetzt ansehen
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AccessoryCard
