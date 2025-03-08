import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from '@relume_io/relume-ui'

import { RxPlus } from 'react-icons/rx'

import type { FAQ11 as FAQ11Props } from '@/payload-types'

export const Faq11: React.FC<FAQ11Props> = ({
  heading,
  description,
  questions,
  footerHeading,
  footerDescription,
  links,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            {description && (
              <RichText className="mb-6 text-gray-700" data={description} enableGutter={false} />
            )}
          </div>
        </div>
        <Accordion
          type="multiple"
          className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                {question.title}
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
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
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
