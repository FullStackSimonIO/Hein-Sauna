import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

export const Header30: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {title}
            </h1>
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
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
      <div className="absolute inset-0 z-0">
        {Array.isArray(media) && media.length > 0 && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media[0]!.image} />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}
