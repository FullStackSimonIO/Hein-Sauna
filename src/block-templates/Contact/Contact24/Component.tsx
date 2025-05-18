// @ts-nocheck
'use client'

import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from 'react-icons/bi'
import { JSX } from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { Contact24 as Contact24Props } from '@/payload-types'

export const Contact24: React.FC<Contact24Props> = ({ tagline, heading, contacts, richText }) => {
  // Mapping für Icons basierend auf `iconType`
  const iconMap: Record<string, JSX.Element> = {
    email: <BiEnvelope className="size-8 md:size-10" />,
    phone: <BiPhone className="size-8 md:size-10" />,
    address: <BiMap className="size-8 md:size-10" />,
    message: <BiMessageDetail className="size-8 md:size-10" />,
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {richText && <RichText className="md:text-md" data={richText} />}
        </div>

        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={index}>
              {/* Dynamisches Icon basierend auf `iconType` */}
              <div className="rb-5 mb-5 md:mb-6">{iconMap[contact.iconType] || null}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              {contact.links &&
                contact.links.map((link, index) => <CMSLink key={index} {...link} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
