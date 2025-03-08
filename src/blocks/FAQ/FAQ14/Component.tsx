'use client'

import type { FAQ14 as FAQ14Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { IconMap } from '@/components/IconMap/page'

export const Faq14: React.FC<FAQ14Props> = ({
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
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && <RichText className="md:text-md" data={description} />}
        </div>
        <div className="container grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:gap-y-16">
          {questions?.map((question, index) => (
            <Question
              key={index}
              question={question.title}
              answer={question.answer}
              icon={question.icon}
            />
          ))}
        </div>
        <div className="mt-12 text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          {footerDescription && <RichText className="md:text-md" data={footerDescription} />}
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

const Question: React.FC<{ question: string; answer: any; icon: string }> = ({
  question,
  answer,
  icon,
}) => {
  const IconComponent = IconMap[icon] || null

  return (
    <div className="flex w-full flex-col items-center text-center">
      <div className="rb-5 mb-5 md:mb-6">
        {IconComponent && <IconComponent className="w-12 h-12 text-gray-700" />}
      </div>
      <h3 className="mb-3 font-bold md:mb-4 md:text-md">{question}</h3>
      <RichText data={answer} />
    </div>
  )
}
