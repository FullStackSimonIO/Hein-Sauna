import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

export const Header26: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  return (
    <section id="hero-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
              {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex md:justify-center gap-4">
                    {links.map(({ link }, i) => {
                      return (
                        <li key={i}>
                          <CMSLink {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div>
            {Array.isArray(media) && media.length > 0 && (
              <Media imgClassName="-z-10 fill object-cover" priority resource={media[0]!.image} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
