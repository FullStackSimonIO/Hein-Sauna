'use client'
import React, { useState } from 'react'
import type { ShowroomPreview as ShowroomPreviewProps } from '@/payload-types'

export const ShowroomPreview: React.FC<ShowroomPreviewProps> = ({ link }) => {
  const [active, setActive] = useState(false)

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">Virtueller Rundgang durch den Showroom</h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg touch-none">
          {/* 1. Vorschau-Overlay */}
          {!active && (
            <div
              className="absolute inset-0 z-10 bg-black/30 flex flex-col items-center justify-center text-white p-4 cursor-pointer"
              onClick={() => setActive(true)}
            >
              <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r="42" opacity="0.5" />
                <polygon points="35,30 55,42 35,54" fill="#fff" />
              </svg>
              <span className="text-lg font-medium">Tippe hier, um die Tour zu starten</span>
            </div>
          )}

          {/* 2. Das eigentliche iFrame, pointer-events erst nach Tap einschalten */}
          <iframe
            src={link}
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              pointerEvents: active ? 'auto' : 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}
