// @ts-nocheck
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { Header50 as Header50Props } from '@/payload-types'

export const Header50: React.FC<Header50Props> = ({ title, tagline, richText, media, links }) => {
  return (
    <section id="header-50" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            {title}
          </h1>
          {richText && (
            <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
          )}
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...link} />
            })}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {media && typeof media === 'object' && !Array.isArray(media) && (
          <Media
            imgClassName="w-full object-cover rounded-lg shadow-lg"
            priority
            resource={media}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}
