'use client'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Volume2, VolumeX, Award, Star, Shield } from 'lucide-react'

import { Parallax } from '@/components/Animations/ParallaxScroll'
import ShinyText from '@/components/ShinyText'

export const Header5: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    setIsVisible(isInView)
  }, [isInView])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const trustIndicators = [
    { icon: Shield, text: 'Made in Germany' },
    { icon: Award, text: 'Premium Qualität' },
    { icon: Star, text: 'Maßgeschneidert' },
  ]

  return (
    <section ref={sectionRef} id="header-5" className="relative px-[5%] overflow-hidden">
      <Parallax>
        <motion.div className="container relative z-10" style={{ y }}>
          <motion.div
            className="flex flex-col justify-center items-center text-center max-h-[60rem] min-h-screen py-16 md:py-24 lg:py-28"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {/* Trust Indicators - Mobile optimized */}
            <motion.div
              className="mb-8 md:mb-10 flex flex-wrap justify-center gap-4 md:gap-8"
              variants={itemVariants}
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center gap-3 px-4 py-3 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md border border-white/30 text-white text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-1 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/30 group-hover:from-amber-400/40 group-hover:to-amber-600/40 transition-all duration-300">
                    <indicator.icon className="h-4 w-4 md:h-5 md:w-5 text-amber-200" />
                  </div>
                  <span
                    className="hidden sm:inline tracking-wide font-medium"
                    style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                  >
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <div className="w-full max-w-4xl px-4">
              <motion.h1
                ref={titleRef}
                className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight font-serif"
                style={{ fontFamily: 'var(--font-luxury-heading), var(--font-heading), serif' }}
                variants={itemVariants}
              >
                <ShinyText text={title} />
              </motion.h1>

              {richText && (
                <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                  <RichText
                    className="text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
                    style={{
                      fontFamily: 'var(--font-luxury-body), var(--font-paragraph), sans-serif',
                    }}
                    data={richText}
                  />
                </motion.div>
              )}

              <motion.div
                className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 md:mt-10"
                variants={itemVariants}
              >
                {Array.isArray(links) && links.length > 0 && (
                  <motion.ul
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 w-full sm:w-auto"
                    variants={containerVariants}
                  >
                    {links &&
                      links.map(({ link }, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full sm:w-auto"
                        >
                          <CMSLink
                            {...link}
                            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-center font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl backdrop-blur-sm border border-white/30 bg-gradient-to-r from-white/20 to-white/10 text-white hover:from-white/30 hover:to-white/20 hover:border-white/50"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </CMSLink>
                        </motion.li>
                      ))}
                  </motion.ul>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Parallax>

      {/* Enhanced luxury video controls */}
      <motion.button
        onClick={toggleMute}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 p-3 md:p-4 rounded-full cursor-pointer backdrop-blur-md bg-gradient-to-br from-white/25 to-white/15 text-white shadow-2xl border border-white/30 transition-all duration-500 hover:from-white/35 hover:to-white/25 hover:shadow-3xl hover:border-white/40 active:scale-95 pointer-events-auto group"
        aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isMuted ? (
          <VolumeX className="h-5 w-5 md:h-6 md:w-6 relative z-10" />
        ) : (
          <Volume2 className="h-5 w-5 md:h-6 md:w-6 relative z-10" />
        )}
      </motion.button>

      {/* Enhanced background with better mobile optimization */}
      <div className="absolute inset-0 -z-10">
        {Array.isArray(media) && media.length > 0 && (
          <>
            {typeof media[0]?.image === 'object' && media[0].image.mimeType?.startsWith('video') ? (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                src={(media[0].image as { url: string }).url}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
              />
            ) : (
              <Media fill imgClassName="-z-10 object-cover" priority resource={media[0]!.image} />
            )}
          </>
        )}

        {/* Enhanced gradient overlay for better readability and luxury */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Luxury texture overlay with warm tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-amber-800/5 to-amber-600/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-900/10 via-transparent to-yellow-900/5" />

        {/* Subtle vignette effect */}
        <div
          className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 100%)',
          }}
        />
      </div>
    </section>
  )
}
