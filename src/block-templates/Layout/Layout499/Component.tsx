// @ts-nocheck
'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@relume_io/relume-ui'
import type { Layout499 as Layout499Props } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Layout499: React.FC<Layout499Props> = ({ tagline, title, richText, links, tabs }) => {
  // Standard-Tab setzen (erster Tab)
  const defaultTab = tabs?.[0]?.value ?? ''

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Header Section */}
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
          {richText && (
            <RichText className="mb-6 text-gray-700" data={richText} enableGutter={false} />
          )}
          {links && links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {links.map(({ link }, i) => (
                <CMSLink key={i} size="lg" {...link} />
              ))}
            </div>
          )}
        </div>

        {/* Tabs Section */}
        <Tabs
          defaultValue={defaultTab}
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          {/* Tabs List */}
          <TabsList className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-1 items-center gap-x-4">
            {tabs?.map((tab, id) => (
              <TabsTrigger
                key={id}
                value={tab.value}
                className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left data-[state=active]:border-l-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary md:pl-8"
              >
                <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tab.heading}
                </h3>
                {tab.description && <RichText className="text-gray-700" data={tab.description} />}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {tabs?.map((tab, index) => (
            <TabsContent key={index} value={tab.value} className="data-[state=active]:animate-tabs">
              {/* Media (Bild oder Video) */}
              {tab.media && typeof tab.media === 'object' && (
                <Media
                  imgClassName="w-full object-cover rounded-lg shadow-lg"
                  resource={tab.media}
                />
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
