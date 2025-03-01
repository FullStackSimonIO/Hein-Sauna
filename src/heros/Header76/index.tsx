'use client'
import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const Header76: React.FC<Page['hero']> = ({ title, richText, media = [], links }) => {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
        {richText && <RichText className="mb-6 text-black" data={richText} enableGutter={false} />}
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 🔥 Animierte Bilder-Grid */}
      <div className="relative h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          {Array.isArray(media) &&
            media.map((imageObj, index) => (
              <div key={index} className="relative w-full pt-[120%] animate-scrollUp">
                {imageObj.image && typeof imageObj.image === 'object' && (
                  <Media
                    fill
                    imgClassName="-z-10 object-cover"
                    priority
                    resource={imageObj.image}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
