// @ts-nocheck
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { Layout424 as Layout424Props } from '@/payload-types'

export const Layout424: React.FC<Layout424Props> = ({ tagline, headings }) => {
  const { scrollYProgress } = useScroll()

  const headingOneTransform = {
    opacity: useTransform(scrollYProgress, [0, 0.22], [1, 0]),
    y: useTransform(scrollYProgress, [0, 0.22], ['0%', '-100%']),
  }
  const headingTwoTransform = {
    opacity: useTransform(scrollYProgress, [0, 0.22, 0.22, 0.44], [0, 1, 1, 0]),
    y: useTransform(scrollYProgress, [0, 0.22, 0.22, 0.44], ['0%', '-100%', '-100%', '-200%']),
  }
  const headingThreeTransform = {
    opacity: useTransform(scrollYProgress, [0.22, 0.44, 0.44, 0.66], [0, 1, 1, 0]),
    y: useTransform(
      scrollYProgress,
      [0.22, 0.44, 0.44, 0.66],
      ['-100%', '-200%', '-200%', '-300%'],
    ),
  }
  const headingFourTransform = {
    opacity: useTransform(scrollYProgress, [0.44, 0.66], [0, 1]),
    y: useTransform(scrollYProgress, [0.44, 0.66], ['-200%', '-300%']),
  }

  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <div className="text-center">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <div className="h-[3.25rem] overflow-hidden sm:h-[4.5rem] md:h-[7.25rem]">
                {headings.map((heading, index) => (
                  <motion.h2
                    key={index}
                    className="whitespace-nowrap text-7xl font-bold leading-[1.2] md:text-[6rem]"
                    style={
                      [
                        headingOneTransform,
                        headingTwoTransform,
                        headingThreeTransform,
                        headingFourTransform,
                      ][index]
                    }
                  >
                    {heading.heading}
                  </motion.h2>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 mt-[100vh]" />
        </div>
      </div>
    </section>
  )
}
