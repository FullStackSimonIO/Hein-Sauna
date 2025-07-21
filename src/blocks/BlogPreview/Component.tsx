'use client'

import React, { useState, useMemo, useRef } from 'react'
import type { Blog35 as Blog35Props, Post } from '@/payload-types'
import { Card } from '@/components/Card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { motion, useInView } from 'framer-motion'
import {
  Search,
  Filter,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Eye,
} from 'lucide-react'

type PostType = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'updatedAt' | 'publishedAt'>

const POSTS_PER_PAGE = 9

export const Blog35: React.FC<Blog35Props> = (props) => {
  const { categoryLabel, heading, subheading, posts } = props
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>()
    posts?.forEach((post) => {
      if (post && typeof post === 'object' && post.categories && Array.isArray(post.categories)) {
        post.categories.forEach((cat) => {
          if (typeof cat === 'object' && cat.name) {
            categorySet.add(cat.name)
          }
        })
      }
    })
    return Array.from(categorySet).sort()
  }, [posts])

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    if (!posts) return []

    const filtered = posts.filter((post) => {
      if (!post || typeof post !== 'object') return false

      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.meta?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.categories?.some(
          (cat) =>
            typeof cat === 'object' && cat.name?.toLowerCase().includes(searchTerm.toLowerCase()),
        )

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        post.categories?.some((cat) => typeof cat === 'object' && cat.name === selectedCategory)

      return matchesSearch && matchesCategory
    })

    // Sort
    filtered.sort((a, b) => {
      if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return 0

      switch (sortBy) {
        case 'title':
          return (a.title || '').localeCompare(b.title || '')
        case 'oldest':
          return (
            new Date(a.publishedAt || a.updatedAt || 0).getTime() -
            new Date(b.publishedAt || b.updatedAt || 0).getTime()
          )
        case 'newest':
        default:
          return (
            new Date(b.publishedAt || b.updatedAt || 0).getTime() -
            new Date(a.publishedAt || a.updatedAt || 0).getTime()
          )
      }
    })

    return filtered
  }, [posts, searchTerm, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, sortBy])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="blog-preview"
      className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-100/20 to-transparent rounded-full blur-3xl" />

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Enhanced Header */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <div className="mx-auto w-full max-w-4xl">
            {categoryLabel && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 px-4 py-2 text-sm font-medium shadow-lg">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {categoryLabel}
                </Badge>
              </motion.div>
            )}
            {heading && (
              <motion.h2
                className="text-4xl text-paragraph font-bold md:text-5xl lg:text-6xl mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
                variants={itemVariants}
              >
                {heading}
              </motion.h2>
            )}
            {subheading && (
              <motion.p
                className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                variants={itemVariants}
              >
                {subheading}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Enhanced Controls */}
        <motion.div className="mb-8 space-y-4" variants={itemVariants}>
          {/* Top Controls Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Durchsuchen Sie Artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 text-slate-700 hover:bg-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              >
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </button>
            </div>
          </div>

          {/* Expandable Filters */}
          <motion.div
            initial={false}
            animate={{
              height: showFilters ? 'auto' : 0,
              opacity: showFilters ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg">
              {/* Category Filter */}
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-slate-700 mb-2"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  Kategorie
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  <option value="all">Alle Kategorien</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex-1">
                <label
                  className="block text-sm font-medium text-slate-700 mb-2"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  Sortierung
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'title')}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  <option value="newest">Neueste zuerst</option>
                  <option value="oldest">Älteste zuerst</option>
                  <option value="title">Titel A-Z</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Info */}
          <motion.div
            className="flex items-center justify-between text-sm text-slate-600"
            style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
            variants={itemVariants}
          >
            <span>
              {filteredAndSortedPosts.length}{' '}
              {filteredAndSortedPosts.length === 1 ? 'Artikel' : 'Artikel'} gefunden
            </span>
            {totalPages > 1 && (
              <span>
                Seite {currentPage} von {totalPages}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {paginatedPosts.map((result) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <motion.div
                  key={`${result.slug}-${currentPage}`}
                  className="h-full"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <EnhancedBlogCard doc={result} relationTo="posts" showCategories />
                </motion.div>
              )
            }
            return null
          })}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedPosts.length === 0 && (
          <motion.div className="text-center py-12" variants={itemVariants}>
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-blue-600" />
              </div>
              <h3
                className="text-xl font-semibold text-slate-800 mb-2"
                style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
              >
                Keine Artikel gefunden
              </h3>
              <p
                className="text-slate-600"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              >
                Versuchen Sie andere Suchbegriffe oder Filter
              </p>
            </div>
          </motion.div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="mt-12 flex justify-center items-center gap-2"
            variants={itemVariants}
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-white shadow-lg'
                }`}
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </motion.div>
        )}

        {/* Enhanced CTA Button */}
        <motion.div className="flex justify-center mt-16" variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 hover:border-blue-400 text-blue-700 hover:text-blue-800 shadow-xl"
              style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                <Eye className="w-5 h-5" />
                Alle Artikel ansehen
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Enhanced Blog Card Component
const EnhancedBlogCard: React.FC<{
  doc: PostType
  relationTo: 'posts'
  showCategories?: boolean
}> = ({ doc, relationTo, showCategories }) => {
  const { slug, categories, meta, title, publishedAt, updatedAt } = doc
  const { description, image: metaImage } = meta || {}
  const hasCategories = categories && categories.length > 0
  const href = `/${relationTo}/${slug}`
  const publishDate = publishedAt || updatedAt

  return (
    <article className="group h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50">
      {/* Enhanced Image Section */}
      <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        {metaImage && typeof metaImage !== 'string' ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-full w-full"
          >
            <Media
              resource={metaImage}
              fill
              className="object-cover w-full h-full"
              priority={false}
            />
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-slate-400 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-2" />
              <span className="text-sm">Kein Bild</span>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-slate-700 shadow-lg">
          <Clock className="w-3 h-3 inline mr-1" />5 min read
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Categories */}
        {showCategories && hasCategories && (
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.slice(0, 2).map((category, index) => {
              if (typeof category === 'object') {
                return (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
                    style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                  >
                    {category.name || 'Kategorie'}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}

        {/* Title */}
        {title && (
          <h3
            className="text-xl font-semibold leading-tight text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-3"
            style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
          >
            <a href={href} className="no-underline">
              {title}
            </a>
          </h3>
        )}

        {/* Description */}
        {description && (
          <p
            className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow"
            style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
          >
            {description.replace(/\s/g, ' ')}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="w-3 h-3" />
            <span style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}>
              {publishDate ? new Date(publishDate).toLocaleDateString('de-DE') : 'Datum unbekannt'}
            </span>
          </div>

          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              Lesen
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
