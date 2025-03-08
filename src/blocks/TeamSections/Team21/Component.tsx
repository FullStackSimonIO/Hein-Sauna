'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { useMediaQuery } from '@relume_io/relume-ui'
import React from 'react'
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

import type { Team21 as Team21Props } from '@/payload-types'

export const Team21: React.FC<Team21Props> = ({ tagline, heading, description, teamMembers }) => {
  const isMobile = useMediaQuery('(max-width: 767px)')

  const shouldAddMarginTop = (index: number) => [1, 3, 7].includes(index)

  const shouldAddAnotherDiv = (index: number) => [0, 2, 3, 4, 6].includes(index)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div className="static top-[50vh] mx-auto mt-20 max-w-lg translate-y-[-50%] text-center md:sticky">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText data={description} />}
        </div>

        <div className="relative z-10 grid auto-cols-fr grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {teamMembers?.map((member, index) => (
            <React.Fragment key={index}>
              <TeamMember member={member} className={shouldAddMarginTop(index) ? 'md:mt-16' : ''} />
              {!isMobile && (
                <>
                  {index !== 7 && <div className="size-full" />}
                  {shouldAddAnotherDiv(index) && <div className="size-full" />}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

const TeamMember = ({
  member,
  className,
}: {
  member: Team21Props['teamMembers'][number]
  className?: string
}) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'dribbble':
        return <BiLogoDribbble className="size-6" />
      case 'linkedin':
        return <BiLogoLinkedinSquare className="size-6" />
      case 'twitter':
        return <FaXTwitter className="size-6" />
      default:
        return null
    }
  }

  return (
    <div className={`flex flex-col text-center ${className}`}>
      {member.image && (
        <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
          <Media
            resource={member.image}
            className="size-20 min-h-20 min-w-20 rounded-full object-cover"
          />
        </div>
      )}
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
        <h6 className="md:text-md">{member.jobTitle}</h6>
      </div>
      {member.description && <RichText data={member.description} />}
      {member.socialLinks && member.socialLinks?.length > 0 && (
        <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
          {member.socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
