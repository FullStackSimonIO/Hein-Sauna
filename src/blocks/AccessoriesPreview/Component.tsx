// components/blocks/AccessoryPreviews/Component.tsx
'use client'

import React from 'react'
import AccessoryCard from '@/components/AccessoryCard'
import type { Accessory } from '@/payload-types'

type Props = {
  title?: string
  accessories?: { accessory: Accessory }[]
}

const AccessoryPreviewsBlock: React.FC<Props> = ({ title, accessories = [] }) => (
  <section className="px-6 py-16 bg-background">
    {title && (
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-accent font-bold text-center mb-12">
        {title}
      </h2>
    )}
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {accessories.map(({ accessory }, idx) => (
        <AccessoryCard key={idx} accessory={accessory} />
      ))}
    </div>
  </section>
)

export default AccessoryPreviewsBlock
