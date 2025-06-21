'use client'

import React, { Fragment } from 'react'

import { Layout1 } from './Layout/Layout1/Component'
import { Saunen } from '@/payload-types'
import Layout209 from './Layout/Layout209/Component'
import SaunaCarouselBlock from './Gallery/SaunaCarouselBlock/Component'
import AccessoryPreviewsBlock from './AccessoriesPreview/Component'
import { Faq1 } from './FAQ/FAQ1/Component'
import Contact1 from './Contact/Contact1/Component'

// Falls du weitere Blöcke brauchst:
export const blockComponents = {
  layout1: Layout1,
  layout209: Layout209,
  saunaCarousel: SaunaCarouselBlock,
  accessoryPreviews: AccessoryPreviewsBlock,
  faq1: Faq1,
  contact1: Contact1,
}

type Props = {
  blocks: Exclude<Saunen['layout'], undefined> // safer als unknown
}

export const RenderSaunaBlocks: React.FC<Props> = ({ blocks }) => {
  if (!Array.isArray(blocks)) return null

  return (
    <>
      {blocks.map((block, i) => {
        const Block = blockComponents[block.blockType as keyof typeof blockComponents]
        if (!Block) return null
        return (
          <div className="my-16" key={i}>
            {/* @ts-expect-error there may be some mismatch between the expected types here */}
            <Block {...block} disableInnerContainer />
          </div>
        )
      })}
    </>
  )
}
