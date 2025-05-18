// @ts-nocheck
import type { FAQ13 as FAQ13Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Faq13: React.FC<FAQ13Props> = ({
  heading,
  description,
  questions,
  footerHeading,
  footerDescription,
  links,
}) => {
  return (
    <section id="faq-13" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          {description && (
            <RichText className="mb-6 text-gray-700" data={description} enableGutter={false} />
          )}
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {questions.map((question, index) => (
            <div key={index}>
              <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">{question.title}</h2>
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
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          {footerDescription && (
            <RichText
              className="mb-6 text-gray-700"
              data={footerDescription}
              enableGutter={false}
            />
          )}{' '}
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
