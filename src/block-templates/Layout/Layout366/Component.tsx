//@ts-nocheck
'use client'

import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { Layout366 as Layout366Props } from '@/payload-types'
import RichText from '@/components/RichText'

export const Layout366: React.FC<Layout366Props> = ({ tag, title, txt, img, big, small }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{tag}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h2>
            {txt && <RichText className="mb-6 text-gray-700" data={txt} enableGutter={false} />}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {/* Big Card */}
            <div className="order-first flex flex-col items-stretch border border-border-primary lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
              {/* Media (Payload CMS Media Component) */}
              {img && typeof img === 'object' && !Array.isArray(img) && (
                <Media
                  imgClassName="w-full object-cover rounded-lg shadow-lg"
                  priority
                  resource={img}
                />
              )}
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">{big?.tag}</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {big?.head}
                  </h3>
                  <p>{big?.desc}</p>
                </div>
                {/* ✅ CMSLink für cardBig.links */}
                {big?.links && Array.isArray(big.links) && (
                  <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                    {big.links.map(({ link }, i) => (
                      <CMSLink key={i} size="lg" {...link} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Small Cards */}
            {small?.map((card, index) => (
              <div
                key={index}
                className="order-last flex flex-col border border-border-primary md:grid md:grid-cols-2 lg:order-none"
              >
                {/* Image */}
                {card.img && typeof card.img === 'object' && (
                  <Media
                    fill
                    imgClassName="w-full object-cover rounded-lg shadow-lg"
                    resource={card.img}
                  />
                )}
                {/* Text Content */}
                <div className="block flex-col justify-center p-6 md:flex">
                  <div>
                    <p className="mb-2 font-semibold">{card.tag}</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">{card.head}</h3>
                    <p>{card.desc}</p>
                  </div>
                  {/* ✅ CMSLink für cardsSmall.links */}
                  {card.links && Array.isArray(card.links) && (
                    <div className="mt-5 flex flex-wrap gap-4 md:mt-6">
                      {card.links.map(({ link }, i) => (
                        <CMSLink key={i} size="lg" {...link} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
