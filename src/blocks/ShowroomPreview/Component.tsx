'use client'
import React from 'react'
import type { ShowroomPreview as ShowroomPreviewProps } from '@/payload-types'

export const ShowroomPreview: React.FC<ShowroomPreviewProps> = ({ link }) => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">Virtueller Rundgang durch den Showroom</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={link}
            width="100%"
            height="100%"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
