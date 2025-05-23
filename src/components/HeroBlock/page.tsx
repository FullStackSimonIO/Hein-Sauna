// components/HeroBlock/page.tsx
'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Category } from '@/payload-types'

type HeroBlockProps = {
  name: string
  richText?: Category['description']
  image?: Category['previewImage']
}

const HeroBlock: React.FC<HeroBlockProps> = ({ name, richText, image }) => {
  return (
    <section className="relative w-full h-96 overflow-hidden flex items-center justify-center text-center bg-black">
      {image && (
        <div className="absolute inset-0">
          <Media resource={image} fill className="object-cover w-full h-full brightness-75" />
        </div>
      )}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
        {richText && <RichText className="prose prose-invert mx-auto" data={richText} />}
      </div>
    </section>
  )
}

export default HeroBlock
