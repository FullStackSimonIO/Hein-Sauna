// components/blocks/CategoryPreview/Component.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'framer-motion'
import type { Category } from '@/payload-types'

type Props = {
  title?: string
  intro?: any
  categories?: { category: Category[] }[]
}

export const CategoryPreviewsBlock: React.FC<Props> = ({ title, intro, categories = [] }) => {
  // Aus jedem Array-Item die Kategorie(n) extrahieren und flachlegen
  const cats: Category[] = categories.flatMap((item) =>
    Array.isArray(item.category) ? item.category : [item.category],
  )

  return (
    <section className="bg-background px-6 py-16 md:py-24 lg:py-32">
      {/* Überschrift + Intro */}
      <div className="mx-auto max-w-3xl text-center">
        {title && (
          <h2 className="text-3xl md:text-7xl lg:text-10xl text-accent font-bold mb-4">{title}</h2>
        )}
        {intro && (
          <RichText
            className="prose prose-invert prose-headings:font-semibold mx-auto mb-12"
            data={intro}
          />
        )}
      </div>

      {/* Karten-Grid */}
      <div className="mx-auto container grid grid-cols-1 gap-8">
        {cats.map((category, index) => (
          <Link
            key={index}
            href={`/saunen/${category.slug}`}
            className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Bild mit Zoom-Animation */}
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
                relative w-full overflow-hidden
                h-48         /* Mobile: 12rem */
                md:h-80      /* ab md: 20rem */
                lg:h-[36rem] /* ab lg: 36rem */
              "
            >
              {category.previewImage && (
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <Media
                    resource={category.previewImage}
                    fill
                    className="object-cover w-full h-full"
                  />
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

            {/* Text-Fußbereich */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <h3 className="text-xl md:text-5xl font-semibold text-white mb-2 uppercase underline">
                {category.name}
              </h3>
              {category.description && (
                <RichText
                  className="text-sm text-white/90 line-clamp-3 mb-4"
                  data={category.description}
                />
              )}
              <span className="inline-block px-4 py-2 border border-white text-white rounded-full text-sm font-medium group-hover:bg-white group-hover:text-background transition-colors duration-200">
                Zur Kategorie →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryPreviewsBlock
