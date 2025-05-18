// @ts-nocheck
'use client'

import { useMediaQuery } from '@relume_io/relume-ui'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Layout488 as Layout488Props } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Layout488: React.FC<Layout488Props> = ({
  leftHeading,
  rightHeading,
  mobileHeading,
  media,
  description,
}) => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // 🔹 Transformationen basierend auf Scroll-Fortschritt
  const useCreateTransform = (mobileValues: number[], desktopValues: number[]) =>
    useTransform(scrollYProgress, [0, 0.6], isMobile ? mobileValues : desktopValues)

  const leftHeadingTranslate = { x: useTransform(scrollYProgress, [0, 0.6], ['10rem', '0rem']) }
  const rightHeadingTranslate = { x: useTransform(scrollYProgress, [0, 0.6], ['-10rem', '0rem']) }
  const imageScale = useCreateTransform([0.7, 1], [0.2, 1])

  const overlayMotion = {
    width: useTransform(
      scrollYProgress,
      [0.6, 1],
      isMobile ? ['10vw', '250vw'] : ['10vw', '200vw'],
    ),
    height: useTransform(
      scrollYProgress,
      [0.6, 1],
      isMobile ? ['10vw', '250vw'] : ['10vw', '200vw'],
    ),
  }

  return (
    <section ref={sectionRef} id="relume" className="relative h-[200vh]">
      <div className="sticky top-0 grid h-svh grid-cols-[60%] content-center items-center justify-center justify-items-center gap-4 overflow-hidden px-[5%] md:grid-cols-[40%_max-content_40%] md:gap-8 lg:h-screen">
        {/* Linke Überschrift (Desktop) */}
        {leftHeading && (
          <motion.h2
            className="relative z-10 hidden justify-self-end whitespace-nowrap text-[4rem] font-bold md:flex lg:text-[6rem]"
            style={leftHeadingTranslate}
          >
            {leftHeading}
          </motion.h2>
        )}

        {/* Hauptbild + Overlay */}
        <motion.div
          className="relative order-first flex w-full min-w-16 max-w-[24rem] items-center justify-center md:order-none"
          style={{ scale: imageScale }}
        >
          {media && typeof media === 'object' && (
            <Media imgClassName="w-full object-cover rounded-full shadow-lg" resource={media} />
          )}
          <motion.div
            className="absolute -z-10 rounded-full bg-neutral-lightest"
            style={overlayMotion}
          />
        </motion.div>

        {/* Rechte Überschrift (Desktop) */}
        {rightHeading && (
          <motion.h2
            className="relative z-10 hidden justify-self-start whitespace-nowrap text-[4rem] font-bold md:flex lg:text-[6rem]"
            style={rightHeadingTranslate}
          >
            {rightHeading}
          </motion.h2>
        )}

        {/* Mobile Überschrift */}
        {mobileHeading && (
          <motion.h2 className="relative z-10 mt-10 flex justify-self-center whitespace-nowrap text-3xl font-bold leading-[1.2] sm:text-8xl md:hidden">
            {mobileHeading}
          </motion.h2>
        )}
      </div>
    </section>
  )
}
