'use client'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@relume_io/relume-ui'

import type { FAQ1 as FAQ1Props } from '@/payload-types'

export const Faq1: React.FC<FAQ1Props> = ({
  heading,
  richText,
  questions,
  footerHeading,
  footerDescription,
  links,
}) => {
  return (
    <section id="faq-1" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl text-accent font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {richText && (
            <RichText className="mb-6 text-paragraphDark" data={richText} enableGutter={false} />
          )}
        </div>
        <Accordion type="multiple">
          {questions?.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 md:mb-6 border-headingDark"
            >
              <AccordionTrigger className="md:py-5 md:text-md text-headingDark ">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.richText && (
                  <RichText
                    className="mb-6 text-paragraphDark"
                    data={question.richText}
                    enableGutter={false}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-headingDark">
            {footerHeading}
          </h4>
          <p className="md:text-md text-paragraphDark">{footerDescription}</p>
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
