import { ExpandableRichText } from '@/components/ExpandableRichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

export const Header9: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  return (
    <section id="relume" className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 -z-10">
          {Array.isArray(media) && media.length > 0 && (
            <Media fill imgClassName="-z-10 object-cover" priority resource={media[0]!.image} />
          )}
        </div>
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <h1 className="text-6xl font-bold text-text-primary md:text-9xl lg:text-10xl">
              {title}
            </h1>
            <div>
              {richText && <ExpandableRichText className="mb-6 " data={richText} />}
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
      </div>
    </section>
  )
}
