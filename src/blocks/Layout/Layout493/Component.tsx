'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCirclePlay } from 'react-icons/fa6'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { Layout493 as Layout493Props } from '@/payload-types'

export const Layout493: React.FC<Layout493Props> = ({ tagline, title, richText, links, tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative">
          <div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
            <div className="mb-8 w-full md:w-auto">
              {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
              {richText && <RichText className="md:text-md" data={richText} />}
            </div>

            {/* Tab Navigation */}
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                {tabs?.map((tab: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={clsx(
                      'cursor-pointer border-b border-border-primary py-4 transition-opacity',
                      {
                        'opacity-100': activeTab === index,
                        'opacity-50': activeTab !== index,
                      },
                    )}
                  >
                    <h2 className="text-xl font-bold md:text-2xl">{tab.heading}</h2>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeTab === index ? 'auto' : 0,
                        opacity: activeTab === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      {tab.description && <RichText data={tab.description} />}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait" initial={false}>
                {tabs?.map((tab: any, index: number) => {
                  if (activeTab !== index) return null
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="relative bottom-0 left-auto right-0 top-0 flex size-full items-center justify-center md:absolute md:w-1/2 md:pl-6 lg:pl-10"
                    >
                      {tab.media && typeof tab.media === 'object' && (
                        <Media
                          imgClassName="w-full object-cover rounded-lg shadow-lg"
                          priority
                          resource={tab.media}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Links */}
            {links && links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map(({ link }: any, i: number) => (
                  <CMSLink key={i} size="lg" {...link} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
