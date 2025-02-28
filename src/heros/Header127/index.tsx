'use client'
import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const Header127: React.FC<Page['hero']> = ({ title, richText, media = [], links }) => {
  // Sicherheit: Falls weniger als 3 Bilder vorhanden sind
  const [firstImage, secondImage, thirdImage] =
    Array.isArray(media) && media.length >= 3 ? media : [null, null, null]

  return (
    <section id="hero-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* ✅ Linke Seite: Hero-Text + Buttons */}
          <div>
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">{title}</h1>
            {richText && (
              <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
            )}
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex gap-4">
                  {links.map(({ link }, i) => (
                    <li key={i}>
                      <CMSLink
                        {...link}
                        className="px-6 py-3 text-lg font-medium border rounded-lg bg-black text-white hover:bg-gray-800"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* ✅ Rechte Seite: Drei überlappende Bilder */}
          <div className="relative flex w-full">
            {/* Unten links */}
            {firstImage && (
              <div className="absolute bottom-[10%] left-0 w-[45%]">
                <Media
                  resource={firstImage.image}
                  className="aspect-[3/2] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            )}

            {/* Mittleres Bild (zentral) */}
            {secondImage && (
              <div className="mx-[15%] w-full">
                <Media
                  resource={secondImage.image}
                  className="aspect-[2/3] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            )}

            {/* Oben rechts */}
            {thirdImage && (
              <div className="absolute top-[10%] right-0 w-[40%]">
                <Media
                  resource={thirdImage.image}
                  className="aspect-square w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
