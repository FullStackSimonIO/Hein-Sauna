// @ts-nocheck
'use client'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { FAQ7 as FAQ7Props } from '@/payload-types'

export const Faq7: React.FC<FAQ7Props> = ({
  heading,
  headingDescription,
  questions,
  footerHeading,
  footerDescription,
  links,
}) => {
  return (
    <section id="faq-7" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {headingDescription && (
            <RichText
              className="mb-6 text-gray-700"
              data={headingDescription}
              enableGutter={false}
            />
          )}
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          {questions?.map((question, index) => (
            <div key={index}>
              <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">{question.question}</h2>
              {question.answer && (
                <RichText
                  className="mb-6 text-gray-700"
                  data={question.answer}
                  enableGutter={false}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          {footerDescription && (
            <RichText
              className="mb-6 text-gray-700"
              data={footerDescription}
              enableGutter={false}
            />
          )}
          <div className="mt-6 md:mt-8">
            {links && links?.length > 0 && (
              <ul className="flex md:justify-center gap-4">
                {links.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink size="lg" {...link} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
