'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Layout364 as Layout364Props } from '@/payload-types'

export const Layout364: React.FC<Layout364Props> = ({ tagline, title, richText, sections }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <div className="mb-12 md:mb-18 lg:mb-20 text-center">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
          {richText && <RichText className="text-gray-700" data={richText} />}
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {sections?.map((section, index) => (
            <div key={index} className="border border-border-primary p-6 md:p-8 lg:p-12">
              {/* Media */}
              {section.media && typeof section.media === 'object' && (
                <div className="mb-5 md:mb-6">
                  <Media
                    imgClassName="w-full object-cover rounded-lg shadow-lg"
                    resource={section.media}
                  />
                </div>
              )}

              {/* Title & Description */}
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                {section.heading}
              </h3>
              <p>{section.description}</p>

              {/* Links */}
              {section.links && Array.isArray(section.links) && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {section.links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" {...link} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
