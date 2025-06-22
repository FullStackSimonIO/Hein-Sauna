'use client'

import React from 'react'
import type { Blog35 as Blog35Props } from '@/payload-types'
import { Card } from '@/components/Card'
import { Button } from '@/components/ui/button' // Button Komponente falls vorhanden (ShadCN oder eigene)
import { Badge } from '@/components/ui/badge'

export const Blog35: React.FC<Blog35Props> = (props) => {
  const { categoryLabel, heading, subheading, posts } = props

  return (
    <section id="blog-preview" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto w-full max-w-2xl">
            {categoryLabel && (
              <Badge className="bg-accent text-background mb-6">{categoryLabel}</Badge>
            )}
            {heading && (
              <h2 className="text-4xl text-paragraph font-bold md:text-5xl lg:text-6xl mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-muted-foreground text-base md:text-lg">{subheading}</p>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div key={index} className="h-full">
                  <Card
                    className="h-full border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    doc={result}
                    relationTo="posts"
                    showCategories
                  />
                </div>
              )
            }
            return null
          })}
        </div>

        {/* Button unten */}
        <div className="flex justify-center mt-16">
          <Button variant="outline" size="lg">
            View all
          </Button>
        </div>
      </div>
    </section>
  )
}
