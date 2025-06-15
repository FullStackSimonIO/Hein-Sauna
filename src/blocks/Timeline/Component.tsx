'use client'

import React from 'react'
import type { Timeline17 as Timeline17Props } from '@/payload-types'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'

export const Timeline17: React.FC<Timeline17Props> = ({ tagline, heading, subheading, steps }) => {
  return (
    <section id="timeline-section" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            {tagline && (
              <Badge className="font-semibold mb-3 md:mb-4 bg-accent text-background">
                {tagline}
              </Badge>
            )}

            {heading && (
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl text-headingDark lg:text-8xl">
                {heading}
              </h2>
            )}
            {subheading && <RichText className="text-paragraph" data={subheading} />}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row">
          <div className="absolute top-1.5 left-0 z-10 hidden h-1 w-16 bg-gradient-to-r text-headingDark from-background-primary to-transparent md:block" />

          <div className="flex flex-col md:flex-row">
            {steps?.map((step, index) => (
              <div key={index} className="relative flex gap-4 md:flex-col md:gap-0">
                {/* Timeline Line & Dot */}
                <div className="flex flex-col items-center md:mb-4 md:w-full md:flex-row">
                  <div className="h-2 w-[3px] bg-headingDark md:h-[3px] md:w-full" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-accent shadow-[0_0_0_8px_white]" />
                  <div className="h-full w-[3px] bg-headingDark md:h-[3px] md:w-full" />
                </div>

                {/* Step Content */}
                <div className="mb-6 px-3 md:mb-0 md:text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl text-accent">{step.title}</h3>
                  {step.description && (
                    <RichText className="text-paragraphDark" data={step.description} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1.5 right-0 z-0 hidden h-1 w-16 bg-gradient-to-l from-background-primary to-transparent md:block" />
        </div>
      </div>
    </section>
  )
}
