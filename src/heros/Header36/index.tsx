import BlurText from '@/components/BlurText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'

export const Header36: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  return (
    <section
      id="hero-section"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="text-6xl font-bold text-headingDark md:text-9xl lg:text-10xl">
          <BlurText text={title} />
        </h1>
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
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
      <div>
        {Array.isArray(media) && media.length > 0 && (
          <Media imgClassName="-z-10 object-cover" priority resource={media[0]!.image} />
        )}
      </div>
    </section>
  )
}
