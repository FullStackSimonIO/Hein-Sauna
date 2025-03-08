'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Team18 as Team18Props } from '@/payload-types'
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

export const Team18: React.FC<Team18Props> = ({
  tagline,
  heading,
  description,
  links,
  teamMembers,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText data={description} />}
          {links && links.length > 0 && (
            <div className="mt-12 flex justify-center gap-4 md:mt-16">
              {links.map(({ link }, index) => (
                <CMSLink key={index} {...link} />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers?.map((member, index) => <TeamMember key={index} member={member} />)}
        </div>
      </div>
    </section>
  )
}

const TeamMember = ({ member }: { member: Team18Props['teamMembers'][number] }) => {
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
    <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
      {member.image && (
        <div className="w-full overflow-hidden">
          <Media resource={member.image} className="aspect-square size-full object-cover" />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <div className="mb-3 md:mb-4">
          <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
          <h6 className="md:text-md">{member.jobTitle}</h6>
        </div>
        {member.description && <RichText data={member.description} />}
        {member.socialLinks && member.socialLinks?.length > 0 && (
          <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
            {member.socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
