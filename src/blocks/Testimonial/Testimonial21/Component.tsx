'use client'

import RichText from '@/components/RichText'
import { BiSolidStar } from 'react-icons/bi'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import type { Testimonial21 as Testimonial21Props } from '@/payload-types'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

export const Testimonial21: React.FC<Testimonial21Props> = ({
  testimonials,
  heading,
  richText,
  links,
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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

  const renderTestimonials = () => (
    <div className="flex gap-6 md:gap-8">
      {testimonials?.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} index={index} />
      ))}
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id="testimonial-21"
      className="relative overflow-hidden py-16 md:py-24 lg:py-28 bg-background"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-200/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-orange-200/10 to-transparent rounded-full blur-3xl" />

      <motion.div
        className=" relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header Section */}
        <motion.div
          className="mb-12 max-w-4xl  px-[5%] text-center md:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <motion.h1
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-luxury-heading), serif' }}
            variants={itemVariants}
          >
            {heading}
          </motion.h1>
          {richText && (
            <motion.div variants={itemVariants}>
              <RichText
                className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                data={richText}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div className="overflow-hidden" variants={itemVariants}>
          <div className="flex min-w-[200%] animate-loop-testimonials-luxury hover:animation-pause">
            {renderTestimonials()}
            {renderTestimonials()}
          </div>
        </motion.div>

        {/* CTA Links */}
        {links && links?.length > 0 && (
          <motion.div
            className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
            variants={itemVariants}
          >
            {links.map(({ link }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <CMSLink
                  {...link}
                  className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-center font-medium rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl backdrop-blur-sm border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-lg"
                >
                  <span
                    className="relative z-10 tracking-wide font-medium text-sm md:text-base"
                    style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
                  >
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CMSLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

const TestimonialCard: React.FC<{
  testimonial: Testimonial21Props['testimonials'][0]
  index: number
}> = ({ testimonial, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <motion.div
      className="group mr-6 md:mr-8 flex w-[320px] sm:w-[380px] md:w-[420px] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] flex-col justify-between relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/90"
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Quote icon decoration */}
      <div className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Quote className="h-6 w-6 text-amber-600" />
      </div>

      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Stars */}
        <div className="mb-6 flex gap-1">
          {Array.from({ length: testimonial.numberOfStars }, (_, starIndex) => (
            <motion.div
              key={starIndex}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + starIndex * 0.1,
                ease: 'backOut',
              }}
            >
              <BiSolidStar className="size-5 md:size-6 text-amber-400 drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <div className="flex-1 mb-6">
          {testimonial.quote && (
            <div
              className="text-slate-700 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
            >
              <RichText data={testimonial.quote} />
            </div>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          {testimonial.avatar && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-sm opacity-50 scale-110" />
              <Media
                resource={testimonial.avatar}
                className="relative size-12 md:size-14 min-h-12 md:min-h-14 min-w-12 md:min-w-14 rounded-full object-cover border-2 border-white shadow-lg"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p
              className="font-semibold text-slate-900 text-sm md:text-base truncate"
              style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}
            >
              {testimonial.name}
            </p>
            <p className="text-slate-600 text-xs md:text-sm leading-tight">
              <span style={{ fontFamily: 'var(--font-luxury-body), sans-serif' }}>
                {testimonial.position}
              </span>
              {testimonial.companyName && (
                <span className="block text-amber-700 font-medium">{testimonial.companyName}</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-3xl border border-amber-200/0 group-hover:border-amber-200/50 transition-all duration-500" />
    </motion.div>
  )
}
