import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { Header47 as Header47Props } from '@/payload-types'

export const Header47: React.FC<Header47Props> = ({ tagline, title, richText, links }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">{title}</h1>
          </div>

          <div className="w-full max-w-lg">
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
    </section>
  )
}
