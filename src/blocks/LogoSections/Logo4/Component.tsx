'use client'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import type { Logo4 as Logo4Props } from '@/payload-types'

export const Logo4: React.FC<Logo4Props> = ({ heading, description, links, logos }) => {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            {description && <RichText data={description} />}
            {links && links?.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {links.map(({ link }, index) => (
                  <CMSLink key={index} {...link} />
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {logos?.map((logo, index) =>
              logo ? (
                <div
                  key={index}
                  className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]"
                >
                  <Media resource={logo.logo} className="max-h-12 md:max-h-14" />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
