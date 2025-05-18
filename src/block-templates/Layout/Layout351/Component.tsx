// @ts-nocheck
// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import type { Layout351 as Layout351Props } from '@/payload-types'

export const Layout351: React.FC<Layout351Props> = ({ tagline, title, richText, features }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleSetIsActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section id="layout-351" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
          {richText && (
            <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
          )}
        </div>
        <div className="flex w-full flex-col overflow-hidden border-b border-l border-r border-border-primary lg:h-[90vh] lg:flex-row lg:border-r-0 lg:border-t">
          {features?.map((feature, index) => (
            <FeatureCard
              key={index}
              isActive={activeIndex === index}
              setIsActive={() => handleSetIsActive(index)}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({
  isActive,
  setIsActive,
  heading,
  description,
  media,
}: {
  isActive: boolean
  setIsActive: () => void
  heading: string
  description?: string | null
  media?: any
}) => {
  const isMobile = useMediaQuery('(max-width: 991px)')
  return (
    <motion.div
      className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-border-primary"
      onClick={setIsActive}
      initial={false}
      animate={{ width: isMobile ? '100%' : isActive ? '100%' : '5rem' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
        <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
          {heading}
        </p>
      </div>
      <motion.div
        className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
        initial={false}
        animate={{ height: isActive ? 'auto' : '0px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
          <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <p className="md:text-md">{description}</p>
          {media && typeof media === 'object' && (
            <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
              <Media imgClassName="w-full object-cover rounded-lg shadow-lg" resource={media} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
