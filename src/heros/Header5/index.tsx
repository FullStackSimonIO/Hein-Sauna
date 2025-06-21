'use client'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Page } from '@/payload-types'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

import { Parallax } from '@/components/Animations/ParallaxScroll'
import ShinyText from '@/components/ShinyText'

export const Header5: React.FC<Page['hero']> = ({ title, richText, links, media }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section id="header-5" className="relative px-[5%]">
      <Parallax>
        <div className="container">
          <div className="flex flex-col justify-center items-center text-center max-h-[60rem] min-h-screen py-16 md:py-24 lg:py-28">
            <div className="w-full max-w-xl">
              <h1 className="mb-5 text-6xl font-bold text-heading md:mb-6 md:text-9xl lg:text-11xl">
                <ShinyText text={title} />
              </h1>

              {richText && <RichText className="mb-6 text-paragraph" data={richText} />}

              <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex justify-center gap-4">
                    {links &&
                      links.map(({ link }, i) => (
                        <li key={i}>
                          <CMSLink {...link} />
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              <motion.button
                onClick={toggleMute}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-6 right-6 z-30 p-2 rounded-full cursor-pointer backdrop-blur-md bg-white/20 text-white shadow-md transition hover:bg-white/30 active:scale-95 pointer-events-auto"
                aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
              >
                {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="absolute inset-0 -z-10">
        {Array.isArray(media) && media.length > 0 && (
          <>
            {typeof media[0]?.image === 'object' && media[0].image.mimeType?.startsWith('video') ? (
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                src={(media[0].image as any).url}
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
            ) : (
              <Media fill imgClassName="-z-10 object-cover" priority resource={media[0]!.image} />
            )}
          </>
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}
