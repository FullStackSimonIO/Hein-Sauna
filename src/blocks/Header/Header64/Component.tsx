// @ts-nocheck
import RichText from '@/components/RichText'

import type { Header64 as Header64Props } from '@/payload-types'

export const Header64: React.FC<Header64Props> = ({ richText, title }) => {
  return (
    <section id="header-64" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-[#04cbf7]">
          {title}
        </h1>
        {richText && (
          <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
        )}
      </div>
    </section>
  )
}
