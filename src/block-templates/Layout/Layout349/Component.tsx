// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout349 as Layout349Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const Layout349: React.FC<Layout349Props> = ({ contents }) => {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight
      const currentScrollPosition = window.scrollY + sectionHeight / 2
      const currentSection = Math.floor(currentScrollPosition / sectionHeight)
      setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          {/* Content Section */}
          <div className="grid grid-cols-1 gap-12 md:block">
            {contents.map((content, index) => (
              <div key={index} className="flex flex-col items-start justify-center md:h-screen">
                {/* Text Section */}
                <p className="mb-3 font-semibold md:mb-4">{content.tagline}</p>
                <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {content.title}
                </h2>
                {content.richText && <RichText data={content.richText} />}

                {/* Buttons */}
                {content.links && Array.isArray(content.links) && (
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {content.links.map(({ link }, i) => (
                      <CMSLink key={i} size="lg" {...link} />
                    ))}
                  </div>
                )}

                {/* Mobile Media */}
                <div className="mt-10 block w-full md:hidden">
                  {content.media && typeof content.media === 'object' && (
                    <Media
                      imgClassName="w-full object-cover rounded-lg shadow-lg"
                      resource={content.media}
                    />
                  )}
                </div>

                {/* Background Transition */}
                <div
                  className={clsx(
                    'fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300',
                    {
                      'opacity-100': activeSection === 0 || activeSection === 2,
                      'opacity-0': activeSection !== 0 && activeSection !== 2,
                    },
                  )}
                />
              </div>
            ))}
          </div>

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
                {content.media && typeof content.media === 'object' && (
                  <Media
                    imgClassName="w-full object-cover rounded-lg shadow-lg"
                    resource={content.media}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
