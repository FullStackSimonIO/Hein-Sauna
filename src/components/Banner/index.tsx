// src/components/Topbar.tsx
'use client'

import React from 'react'
import { Star } from 'lucide-react'
import Link from 'next/link'

export const Banner: React.FC = () => {
  return (
    <div className="bg-[#714f3c] text-gray-100 text-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6 lg:px-8">
        {/* Links: Kontakt */}
        <div className="flex items-center gap-2">
          <a href="tel:+491234567890" className="hover:text-white transition-colors">
            📞 +49 123 456 7890
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="mailto:service@hein-sauna.de"
            className="hidden md:inline hover:text-white transition-colors"
          >
            ✉️ service@hein-sauna.de
          </a>
        </div>

        {/* Mitte: Aufbau-Info */}
        <div className="hidden sm:flex items-center gap-2 text-gray-300">
          <span>⚙️ Installation in 2–3 Tagen</span>
          <span>|</span>
          <span>✅ 5 Jahre Garantie</span>
        </div>

        {/* Rechts: Ratings */}
        <div className="flex items-center gap-4">
          {/* Trustpilot */}
          <Link
            href="https://www.trustpilot.com/review/hein-sauna.de"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400" />
            ))}
            <span className="ml-1">4.8 Trustpilot</span>
          </Link>

          {/* Google */}
          <Link
            href="https://www.google.com/search?q=hein+sauna+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-green-400" />
            ))}
            <span className="ml-1">4.7 Google</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
