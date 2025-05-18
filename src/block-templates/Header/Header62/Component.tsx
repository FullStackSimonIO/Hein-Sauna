// @ts-nocheck
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { Header62 as Header62Props } from '@/payload-types'

export const Header62: React.FC<Header62Props> = ({ tagline, title, richText, links }) => {
  return (
    <section id="header-62" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
        {richText && (
          <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
        )}
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </section>
  )
}
