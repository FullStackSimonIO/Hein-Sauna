'use client'

import { Media } from '@/components/Media'
import { Button } from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import type { Portfolio as PortfolioProps } from '@/payload-types'

export const Portfolio17: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <section id="relume">
      {projects?.map((project, index) => (
        <div key={index} className="sticky top-0 flex h-screen items-center justify-center px-[5%]">
          <div className="absolute inset-0">
            {project?.image && (
              <Media resource={project.image} className="size-full object-cover" />
            )}
            <span className="absolute inset-0 z-10 bg-black/50" />
          </div>
          <div className="relative z-20 mx-auto flex max-w-lg flex-col items-center text-center text-text-alternative md:text-md">
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">{project.heading}</h2>
            {project.description && <RichText data={project.description} />}
            {project.button && (
              <Button {...project.button} className="mt-6 h-12 text-base md:mt-8">
                {project.button.title}
              </Button>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
