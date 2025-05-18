import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { CTA15 as CTA15Props } from '@/payload-types'

export const CTA15: React.FC<CTA15Props> = ({ title, richText, links, media }) => {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
          <h1 className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <div>
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
