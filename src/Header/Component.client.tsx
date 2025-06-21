// src/components/HeaderClient.tsx
'use client'

import { useMediaQuery } from '@relume_io/relume-ui'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useScrollDirection } from './hooks/useScrollDirection'
import { Media } from '@/components/Media'
import { FiPhone, FiUsers, FiBookOpen } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi2'
import type { Header as HeaderType } from '@/payload-types'
import { FaTimes } from 'react-icons/fa'
import { CMSLink } from '@/components/Link'
import { usePathname } from 'next/navigation'

export const HeaderClient: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 991px)')
  const scrollDirection = useScrollDirection()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  // 1) Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  // 2) Close menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname])

  const normalizeLink = (link: any) => ({
    ...link,
    url: link.url === '/home' ? '/' : link.url,
  })

  return (
    <motion.header
      className={`fixed z-50 top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-transform ${
        !isMobileMenuOpen && scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? '-100%' : '0%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          {data.logo && (
            <div className="relative w-[160px] h-[40px]">
              <Media resource={data.logo} fill imgClassName="object-contain" />
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {data.navItems?.map(({ link }, i) => {
            const fixed = normalizeLink(link)
            return (
              <CMSLink
                key={i}
                {...fixed}
                className="relative text-sm tracking-wide font-medium text-headingDark px-2 py-1 transition-all duration-300 ease-in-out hover:text-accent focus:text-accent group"
              >
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full" />
              </CMSLink>
            )
          })}

          {data?.ctaButton?.link?.url &&
            (() => {
              const fixedCta = normalizeLink(data.ctaButton.link)
              return (
                <CMSLink
                  {...fixedCta}
                  className="ml-4 px-5 py-2 rounded-full bg-primary text-headingDark font-medium hover:bg-primary/90 transition-all"
                >
                  {data.ctaButton.label || 'Angebot anfordern'}
                </CMSLink>
              )
            })()}
        </nav>

        {/* Hamburger Icon */}
        {!isMobileMenuOpen && (
          <button
            className="lg:hidden flex flex-col items-center space-y-1 z-[100]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <motion.span className="block w-6 h-0.5 bg-black" />
            <motion.span className="block w-6 h-0.5 bg-black" />
            <motion.span className="block w-6 h-0.5 bg-black" />
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-background z-[99] flex flex-col px-6 py-8 overflow-y-auto"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-headingDark text-3xl"
              >
                <FaTimes />
              </button>
            </div>

            {data.logo && (
              <div className="flex justify-center mb-8 mt-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Media resource={data.logo} className="w-[140px] h-auto" />
                </Link>
              </div>
            )}

            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
              {data.navItems?.map(({ link }, i) => {
                const fixed = normalizeLink(link)
                return (
                  <CMSLink key={i} {...fixed} className="text-headingDark text-lg font-medium" />
                )
              })}
            </div>

            {/* CTA Mobile */}
            {data?.ctaButton?.link?.url && (
              <div className="w-full max-w-sm mx-auto">
                {(() => {
                  const fixedCta = normalizeLink(data.ctaButton.link)
                  return (
                    <CMSLink
                      {...fixedCta}
                      className="w-full block text-center rounded-full border-2 border-primary px-6 py-3 text-headingDark font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      {data.ctaButton.label || 'Jetzt Angebot anfordern'}
                    </CMSLink>
                  )
                })()}
                {data?.disclaimer && (
                  <p className="mt-2 text-center text-xs text-background underline">
                    {data.disclaimer}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
