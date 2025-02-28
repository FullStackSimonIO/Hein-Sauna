import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

export const Header19: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            {media && !Array.isArray(media) && typeof media === 'object' && (
              <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
            )}
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{title}</h1>
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}{' '}
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
      </div>
    </section>
  )
}
