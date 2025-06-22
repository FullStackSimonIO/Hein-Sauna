'use client'

import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Media } from '@/components/Media'
import type { Post } from '@/payload-types'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}
  const hasCategories = categories && categories.length > 0
  const titleToUse = titleFromProps || title
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'rounded-2xl overflow-hidden bg-background shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 group',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-[3/2] bg-muted">
        {metaImage && typeof metaImage !== 'string' ? (
          <Media resource={metaImage} className="h-full w-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
            No image
          </div>
        )}
      </div>

      <div className="p-6">
        {showCategories && hasCategories && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories.map((category, index) => {
              if (typeof category === 'object') {
                return (
                  <span
                    key={index}
                    className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {category.name || 'Kategorie'}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}

        {titleToUse && (
          <h3 className="text-xl font-semibold leading-snug text-foreground group-hover:text-accent transition-colors">
            <Link href={href} ref={link.ref} className="no-underline">
              {titleToUse}
            </Link>
          </h3>
        )}

        {description && (
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description.replace(/\s/g, ' ')}
          </p>
        )}
      </div>
    </article>
  )
}
