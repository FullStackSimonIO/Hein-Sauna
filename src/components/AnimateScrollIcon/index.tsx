// components/AnimateScrollIcon.tsx
import React from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * Animiertes Scroll-Icon mit Beschriftung, das am unteren Ende der Section angezeigt wird.
 */
export const AnimateScrollIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={`${className} flex flex-col items-center space-y-1 cursor-pointer`}>
      <span className="text-sm font-medium text-gray-500">Mehr erfahren</span>
      <ChevronDown className="w-8 h-8 text-gray-500 animate-bounce" />
    </div>
  )
}
