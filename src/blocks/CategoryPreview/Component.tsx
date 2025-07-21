// components/blocks/CategoryPreview/Component.tsx
'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion, useInView } from 'framer-motion'
import type { Category } from '@/payload-types'
import { ArrowRight, Sparkles, Crown, Shield, Star } from 'lucide-react'

type Props = {
  title?: string
  intro?: any
  categories?: { category: Category[] }[]
}

export const CategoryPreviewsBlock: React.FC<Props> = ({ title, intro, categories = [] }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Aus jedem Array-Item die Kategorie(n) extrahieren und flachlegen
  const cats: Category[] = categories.flatMap((item) =>
    Array.isArray(item.category) ? item.category : [item.category],
  )

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  // Category icons mapping
  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('premium') || name.includes('luxus')) return Crown
    if (name.includes('outdoor') || name.includes('garten')) return Star
    if (name.includes('infrarot') || name.includes('wellness')) return Sparkles
    return Shield
  }

  return (
    <section
      ref={sectionRef}
      className="bg-background px-6 py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-orange-100/30 to-transparent rounded-full blur-3xl" />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Überschrift + Intro */}
        <motion.div className="mx-auto max-w-4xl text-center" variants={itemVariants}>
          {title && (
            <h2
              className="text-3xl md:text-6xl lg:text-7xl text-headingDark font-bold mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
            >
              {title}
            </h2>
          )}
          {intro && (
            <div
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
            >
              <RichText data={intro} />
            </div>
          )}
        </motion.div>

        {/* Karten-Grid */}
        <div className="mx-auto container grid grid-cols-1 gap-8 md:gap-12 lg:gap-16">
          {cats.map((category, index) => {
            const IconComponent = getCategoryIcon(category.name || '')

            return (
              <motion.div
                key={category.id || index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/saunen/${category.slug}`}
                  className="group block relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 bg-white/90 backdrop-blur-sm border border-white/50"
                >
                  {/* Bild mit erweiterten Animationen */}
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative w-full overflow-hidden h-48 md:h-80 lg:h-[36rem]"
                  >
                    {category.previewImage && (
                      <motion.div
                        className="absolute inset-0"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.08 },
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      >
                        <Media
                          resource={category.previewImage}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                    )}

                    {/* Gradient Overlays für bessere Lesbarkeit */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

                    {/* Hover Overlay mit Luxus-Effekten */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-orange-900/40"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl"
                      variants={{
                        rest: { scale: 0, opacity: 0, rotate: -45 },
                        hover: { scale: 1, opacity: 1, rotate: 0 },
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Premium Badge für bestimmte Kategorien */}
                    {category.name?.toLowerCase().includes('premium') && (
                      <motion.div
                        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white text-sm font-medium shadow-xl"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Crown className="h-4 w-4" />
                        <span style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}>
                          Premium
                        </span>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Enhanced Text-Fußbereich */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10"
                    variants={{
                      rest: { y: 20 },
                      hover: { y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Backdrop für bessere Lesbarkeit */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm" />

                    <div className="relative z-10">
                      {/* Category Name mit Icon */}
                      <motion.div
                        className="flex items-center gap-3 mb-4"
                        variants={{
                          rest: { x: 0 },
                          hover: { x: 10 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <h3
                          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                          style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
                        >
                          {category.name}
                        </h3>
                      </motion.div>

                      {/* Description */}
                      {category.description && (
                        <motion.div
                          className="mb-6"
                          variants={{
                            rest: { opacity: 0.8 },
                            hover: { opacity: 1 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className="text-sm md:text-base lg:text-lg text-white/90 line-clamp-3 leading-relaxed max-w-2xl"
                            style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                          >
                            <RichText data={category.description} className="text-paragraph" />
                          </div>
                        </motion.div>
                      )}

                      {/* Enhanced CTA Button */}
                      <motion.div
                        variants={{
                          rest: { scale: 1, x: 0 },
                          hover: { scale: 1.05, x: 15 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="group/btn relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm rounded-full text-slate-800 font-semibold shadow-2xl border border-white/50 overflow-hidden">
                          {/* Button background animation */}
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                          <span
                            className="relative z-10 text-sm md:text-base font-medium tracking-wide group-hover/btn:text-white transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                          >
                            Zur Kategorie
                          </span>

                          <motion.div
                            className="relative z-10"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover/btn:text-white transition-colors duration-300" />
                          </motion.div>

                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                          />
                        </div>
                      </motion.div>

                      {/* Decorative elements */}
                      <motion.div
                        className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100"
                        variants={{
                          rest: { scale: 0, rotate: 0 },
                          hover: { scale: 1, rotate: 45 },
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Sparkles className="h-8 w-8 text-amber-400" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Subtle border animation */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent"
                    variants={{
                      rest: {
                        borderColor: 'rgba(255, 255, 255, 0)',
                        boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)',
                      },
                      hover: {
                        borderColor: 'rgba(245, 158, 11, 0.3)',
                        boxShadow: '0 0 30px 0 rgba(245, 158, 11, 0.2)',
                      },
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default CategoryPreviewsBlock
