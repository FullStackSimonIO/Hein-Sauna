// components/ExpandableRichText.tsx
'use client'

import React, { useState, useRef, useEffect, HTMLAttributes } from 'react'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'

type ExpandableRichTextProps = HTMLAttributes<HTMLDivElement> & {
  data: any
  initialLines?: number
}

export const ExpandableRichText: React.FC<ExpandableRichTextProps> = ({
  data,
  initialLines = 3,
  className,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false)
  const [needsToggle, setNeedsToggle] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const fullHeight = el.scrollHeight
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight)
    const maxAllowed = lineHeight * initialLines
    setNeedsToggle(fullHeight > maxAllowed + 1)
  }, [data, initialLines])

  return (
    <div className={cn('relative', className)} {...rest}>
      <div
        ref={containerRef}
        className={cn(
          'text-gray-700 transition-[max-height] duration-300 ease-in-out overflow-hidden line-clamp-3',
          expanded ? 'max-h-[2000px]' : `max-h-[calc(${initialLines}*1.6em)]`,
        )}
      >
        <RichText data={data} />
      </div>
      {needsToggle && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
        >
          {expanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </button>
      )}
    </div>
  )
}
