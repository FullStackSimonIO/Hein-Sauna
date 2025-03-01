import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { CTA25 as CTA25Props } from '@/payload-types'

export const Cta25: React.FC<CTA25Props> = ({ title, richText, links }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
        {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </section>
  )
}
