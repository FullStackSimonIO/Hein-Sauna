import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { CTA7 as CTA7Props } from '@/payload-types'

export const CTA7: React.FC<CTA7Props> = ({ links, title, richText }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              {title}
            </h2>
            {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </section>
  )
}
