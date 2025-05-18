// @ts-nocheck
// 'use client'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@relume_io/relume-ui'

import type { Stats23 as Stats23Props } from '@/payload-types'

export const Stats23: React.FC<Stats23Props> = ({
  tagline,
  heading,
  description,
  defaultTabValue,
  tabs,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          {description && <RichText data={description} />}
        </div>
        <Tabs
          defaultValue={defaultTabValue}
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <div className="max-size-full flex items-center justify-center overflow-hidden">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:animate-tabs"
              >
                <div className="relative size-full">
                  {tab.image && <Media resource={tab.image} className="size-full object-cover" />}
                </div>
              </TabsContent>
            ))}
          </div>
          <TabsList className="grid grid-cols-1 items-center gap-x-4 gap-y-10">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="flex-col items-start justify-start whitespace-normal border-0 border-l-2 border-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                <h2 className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  {tab.percentage}
                </h2>
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">{tab.heading}</h3>
                {tab.description && <RichText data={tab.description} />}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}
