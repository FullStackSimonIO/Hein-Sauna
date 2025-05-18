// @ts-nocheck
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@relume_io/relume-ui'

import type { FAQ3 as FAQ3Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Faq3: React.FC<FAQ3Props> = ({ heading, description, questions, links }) => {
  return (
    <section id="faq-3" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText className="md:text-md" data={description} />}
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
        <Accordion type="multiple">
          {questions?.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer && (
                  <RichText
                    className="mb-6 text-gray-700"
                    data={question.answer}
                    enableGutter={false}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
