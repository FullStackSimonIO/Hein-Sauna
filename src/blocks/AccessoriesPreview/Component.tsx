// components/blocks/AccessoryPreviews/Component.tsx
'use client'

import React, { useState, useMemo, useRef } from 'react'
import AccessoryCard from '@/components/AccessoryCard'
import type { Accessory } from '@/payload-types'
import { motion, useInView } from 'framer-motion'
import { Search, Filter, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react'

type Props = {
  title?: string
  accessories?: { accessory: Accessory }[]
}

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'newest' | 'oldest'
type ViewMode = 'grid' | 'list'

const ITEMS_PER_PAGE = 9

const AccessoryPreviewsBlock: React.FC<Props> = ({ title, accessories = [] }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [showFilters, setShowFilters] = useState(false)

  // Extract unique categories from accessories
  const categories = useMemo(() => {
    const categorySet = new Set<string>()
    accessories.forEach(({ accessory }) => {
      if (accessory.categories && Array.isArray(accessory.categories)) {
        accessory.categories.forEach((cat) => {
          if (typeof cat === 'object' && cat.name) {
            categorySet.add(cat.name)
          }
        })
      }
    })
    return Array.from(categorySet).sort()
  }, [accessories])

  // Filter and sort accessories
  const filteredAndSortedAccessories = useMemo(() => {
    const filtered = accessories.filter(({ accessory }) => {
      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        accessory.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accessory.categories?.some(
          (cat) =>
            typeof cat === 'object' && cat.name?.toLowerCase().includes(searchTerm.toLowerCase()),
        )

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        accessory.categories?.some(
          (cat) => typeof cat === 'object' && cat.name === selectedCategory,
        )

      return matchesSearch && matchesCategory
    })

    // Sort
    filtered.sort(({ accessory: a }, { accessory: b }) => {
      switch (sortBy) {
        case 'name-asc':
          return (a.title || '').localeCompare(b.title || '')
        case 'name-desc':
          return (b.title || '').localeCompare(a.title || '')
        case 'price-asc':
          return (a.newPrice || a.oldPrice || 0) - (b.newPrice || b.oldPrice || 0)
        case 'price-desc':
          return (b.newPrice || b.oldPrice || 0) - (a.newPrice || a.oldPrice || 0)
        case 'newest':
          return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime()
        case 'oldest':
          return new Date(a.updatedAt || 0).getTime() - new Date(b.updatedAt || 0).getTime()
        default:
          return 0
      }
    })

    return filtered
  }, [accessories, searchTerm, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedAccessories.length / ITEMS_PER_PAGE)
  const paginatedAccessories = filteredAndSortedAccessories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
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
    <section ref={sectionRef} className="px-6 py-16 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-orange-100/20 to-transparent rounded-full blur-3xl" />

      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        {title && (
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-headingDark font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
            variants={itemVariants}
          >
            {title}
          </motion.h2>
        )}

        {/* Controls */}
        <motion.div className="mb-8 space-y-4" variants={itemVariants}>
          {/* Top Controls Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Suche nach Produkten oder Kategorien..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
              />
            </div>

            {/* View Mode & Filter Toggle */}
            <div className="flex items-center gap-3">
              {/* View Mode */}
              <div className="hidden sm:flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Filter Toggle */}
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
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
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
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full p-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                >
                  <option value="newest">Neueste zuerst</option>
                  <option value="oldest">Älteste zuerst</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                  <option value="price-asc">Preis aufsteigend</option>
                  <option value="price-desc">Preis absteigend</option>
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
              {filteredAndSortedAccessories.length}{' '}
              {filteredAndSortedAccessories.length === 1 ? 'Produkt' : 'Produkte'} gefunden
            </span>
            {totalPages > 1 && (
              <span>
                Seite {currentPage} von {totalPages}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Accessories Grid */}
        <motion.div
          className={`grid gap-6 md:gap-8 ${
            viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}
          variants={containerVariants}
        >
          {paginatedAccessories.map(({ accessory }) => (
            <motion.div
              key={`${accessory.id}-${currentPage}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <AccessoryCard accessory={accessory} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedAccessories.length === 0 && (
          <motion.div className="text-center py-12" variants={itemVariants}>
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-amber-600" />
              </div>
              <h3
                className="text-xl font-semibold text-slate-800 mb-2"
                style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
              >
                Keine Produkte gefunden
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

        {/* Pagination */}
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
                    ? 'bg-amber-500 text-white shadow-lg'
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
      </motion.div>
    </section>
  )
}

export default AccessoryPreviewsBlock
