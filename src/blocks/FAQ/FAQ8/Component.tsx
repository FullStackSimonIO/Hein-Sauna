import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { FAQ8 as FAQ8Props } from '@/payload-types'

export const Faq8: React.FC<FAQ8Props> = ({ heading, headingDescription, links, questions }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
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
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
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
      </div>
    </section>
  )
}
