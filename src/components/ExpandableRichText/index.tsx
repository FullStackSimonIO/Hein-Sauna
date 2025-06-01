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
  const [collapsedHeight, setCollapsedHeight] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const style = getComputedStyle(el)
    const lineHeight = parseFloat(style.lineHeight)
    const fullHeight = el.scrollHeight
    const maxAllowed = lineHeight * initialLines
    setCollapsedHeight(maxAllowed)
    setNeedsToggle(fullHeight > maxAllowed + 1)
  }, [data, initialLines])

  return (
    <div className={cn('relative', className)} {...rest}>
      <div
        ref={containerRef}
        className={cn(
          'text-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden',
        )}
        style={{
          maxHeight: expanded ? `${containerRef.current?.scrollHeight}px` : `${collapsedHeight}px`,
        }}
      >
        <RichText data={data} />
      </div>
      {needsToggle && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 ml-4 inline-block text-sm font-medium text-headingDark hover:underline"
        >
          {expanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </button>
      )}
    </div>
  )
}
