// @ts-nocheck
'use client'

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { Media } from '@/components/Media'
import { useMediaQuery } from '@relume_io/relume-ui'
import type { Layout425 as Layout425Props, Media as MediaType } from '@/payload-types'

const imageClasses = {
  one: 'absolute -left-16 bottom-[80%] w-full max-w-[9rem] sm:-left-8 sm:max-w-[15rem] md:bottom-3/4 md:left-[20%] lg:max-w-xs',
  two: 'absolute -left-8 top-[72%] w-full max-w-[9rem] sm:-left-24 sm:top-[60%] sm:max-w-[15rem] md:left-auto md:top-[65%] lg:max-w-xs',
  three:
    'absolute top-[75%] w-full max-w-[9rem] sm:top-[65%] sm:max-w-[15rem] md:-right-[80%] md:top-[80%] lg:max-w-xs',
  four: 'absolute -right-8 bottom-[78%] w-full max-w-[9rem] sm:-right-24 sm:bottom-[72%] sm:max-w-[15rem] md:bottom-[70%] md:right-0 lg:max-w-xs',
  five: 'absolute -right-16 bottom-[15%] flex w-full max-w-[9rem] items-center sm:-right-12 sm:bottom-[12%] sm:max-w-[15rem] md:-bottom-[5%] md:right-[10%] lg:bottom-[-15%] lg:max-w-xs',
}

export const Layout425: React.FC<Layout425Props> = ({ content, images = [] }) => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(max-width: 991px)')
  const { scrollYProgress } = useScroll()

  const transforms = useLayoutTransforms(scrollYProgress, isMobile, isTablet)

  // **Fix: Sichere Zuweisung des Media-Objekts**
  const getMedia = (media: any): MediaType | null => {
    if (!media) return null
    return typeof media === 'object' && 'image' in media
      ? (media.image as MediaType)
      : (media as MediaType)
  }

  return (
    <section id="layout-425" className="relative h-[200vh] md:pb-[12%] lg:pb-[15%]">
      <div className="sticky top-0 z-10 flex min-h-[120vh] flex-col items-center justify-center overflow-hidden md:min-h-screen md:overflow-visible">
        {/* Linke Bildseite */}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center md:right-auto md:ml-[5%] md:w-[30%] md:justify-start">
          {images.length > 0 && getMedia(images[0]) && (
            <motion.div className={imageClasses.one} style={transforms.imageOne}>
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                resource={getMedia(images[0])}
              />
            </motion.div>
          )}
          {images.length > 1 && getMedia(images[1]) && (
            <motion.div className={imageClasses.two} style={transforms.imageTwo}>
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                resource={getMedia(images[1])}
              />
            </motion.div>
          )}
          {images.length > 2 && getMedia(images[2]) && (
            <motion.div className={imageClasses.three} style={transforms.imageThree}>
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                resource={getMedia(images[2])}
              />
            </motion.div>
          )}
        </div>

        {/* Rechte Bildseite */}
        <div className="absolute bottom-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center md:mx-[5%] md:w-[30%] md:justify-end">
          {images.length > 3 && getMedia(images[3]) && (
            <motion.div className={imageClasses.four} style={transforms.imageFour}>
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                resource={getMedia(images[3])}
              />
            </motion.div>
          )}
          {images.length > 4 && getMedia(images[4]) && (
            <motion.div className={imageClasses.five} style={transforms.imageFive}>
              <Media
                imgClassName="w-full object-cover rounded-lg shadow-lg"
                resource={getMedia(images[4])}
              />
            </motion.div>
          )}
        </div>

        {/* Text-Inhalt */}
        <motion.div className="relative z-10 -mt-[20%] md:mt-0" style={transforms.content}>
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container max-w-lg">
              <div className="text-center">
                {content?.tagline && (
                  <p className="mb-3 font-semibold md:mb-4">{content.tagline}</p>
                )}
                <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {content?.heading}
                </h1>
                {content?.description && <p className="md:text-md">{content.description}</p>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  )
}

type TransformParams = {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
  isTablet: boolean
}

const useCreateTransform = (
  { scrollYProgress, isMobile, isTablet }: TransformParams,
  mobileValues: [string, string],
  tabletValues: [string, string],
  desktopValues: [string, string],
) => {
  const values = isMobile ? mobileValues : isTablet ? tabletValues : desktopValues
  return useTransform(scrollYProgress, [0, 1], values)
}

export const useLayoutTransforms = (
  scrollYProgress: MotionValue<number>,
  isMobile: boolean,
  isTablet: boolean,
) => {
  const params = { scrollYProgress, isMobile, isTablet }

  return {
    content: {
      opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
      scale: useTransform(scrollYProgress, [0, 1], [0.95, 1]),
    },
    imageOne: {
      x: useCreateTransform(params, ['60%', '0%'], ['40%', '0%'], ['90%', '0%']),
      y: useCreateTransform(params, ['25vh', '0%'], ['60%', '0%'], ['70%', '0%']),
    },
    imageTwo: {
      x: useCreateTransform(params, ['50%', '0%'], ['80%', '0%'], ['90%', '0%']),
      y: useCreateTransform(params, ['-20vh', '0%'], ['-40%', '0%'], ['-50%', '0%']),
    },
    imageThree: {
      x: useCreateTransform(params, ['0%', '0%'], ['10%', '0%'], ['10%', '0%']),
      y: useCreateTransform(params, ['-45vh', '0%'], ['-140%', '0%'], ['-130%', '0%']),
    },
    imageFour: {
      x: useCreateTransform(params, ['-50%', '0%'], ['-70%', '0%'], ['-80%', '0%']),
      y: useCreateTransform(params, ['20vh', '0%'], ['60%', '0%'], ['60%', '0%']),
    },
    imageFive: {
      x: useCreateTransform(params, ['-70%', '0%'], ['-60%', '0%'], ['-60%', '0%']),
      y: useCreateTransform(params, ['-20vh', '0%'], ['-60%', '0%'], ['-60%', '0%']),
    },
  }
}
