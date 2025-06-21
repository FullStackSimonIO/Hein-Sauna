'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout348 as Layout348Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'
import { FlyInFromRight } from '@/components/Animations/FlyInFromRight'
import { FlyInFromLeft } from '@/components/Animations/FlyInFromLeft'

export const Layout348: React.FC<Layout348Props> = ({ contents }) => {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          // wenn mehr als die Hälfte der Section im Viewport ist, aktivieren
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(index)
          }
        })
      },
      {
        threshold: [0.5], // 50% Sichtbarkeit
      },
    )

    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [contents])

  return (
    <section id="layout-348" className="px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          {/* Sticky Media Section */}
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {contents.map((content, index) => (
              <div
                key={index}
                className={clsx('absolute w-full transition-opacity duration-300', {
                  'opacity-100': activeSection === index,
                  'opacity-0': activeSection !== index,
                })}
              >
                {content.media && (
                  <FlyInFromLeft>
                    <Media
                      resource={content.media}
                      imgClassName="w-full object-cover overflow-hidden rounded-lg shadow-lg"
                    />
                  </FlyInFromLeft>
                )}
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 gap-12 md:block">
            {contents.map((content, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el
                }}
                data-index={index}
                className="flex flex-col items-start justify-center md:h-screen"
              >
                {/* Tagline */}
                <Badge className="font-semibold mb-3 md:mb-4 bg-accent text-background">
                  {content.tagline}
                </Badge>

                {/* Heading */}
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-headingDark">
                  {content.heading}
                </h2>

                {/* RichText */}
                {content.description && <RichText data={content.description} />}

                {/* Links */}
                {content.links && (
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {content.links.map(({ link }, i) => (
                      <CMSLink key={i} size="lg" {...link} />
                    ))}
                  </div>
                )}

                {/* Mobile Media */}
                <div className="mt-10 block w-full md:hidden">
                  {content.media && (
                    <Media
                      resource={content.media}
                      fill
                      imgClassName="w-full object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>

                {/* Background Transition (optional) */}
                <div
                  className={clsx(
                    'fixed inset-0 -z-10 bg-background transition-opacity duration-300',
                    {
                      'opacity-100': activeSection === index,
                      'opacity-0': activeSection !== index,
                    },
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
