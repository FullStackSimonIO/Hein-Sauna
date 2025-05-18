// @ts-nocheck
'use client'

import { Button } from '@relume_io/relume-ui'
import type { Team2 as Team2Props } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

export const Team2: React.FC<Team2Props> = ({
  tagline,
  heading,
  description,
  teamMembers,
  footer,
}) => {
  return (
    <section id="team-2" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText data={description} />}
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {teamMembers?.map((member, index) => <TeamMember key={index} member={member} />)}
        </div>
        {footer && (
          <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footer.heading}
            </h4>
            {footer.description && <RichText data={footer.description} />}
            {footer.button && (
              <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
                <Button {...footer.button}>{footer.button.title}</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

const TeamMember = ({ member }: { member: Team2Props['teamMembers'][number] }) => {
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
    <div className="flex flex-col text-center">
      {member.image && (
        <div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
          <Media resource={member.image} className="absolute inset-0 size-full object-cover" />
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
