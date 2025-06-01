/* PLOP_IMPORTS */

import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { ArchiveBlock } from '@/block-templates/ArchiveBlock/Component'
import { Header64 } from './Header/Header64/Component'
import { CategoryPreviewsBlock } from './CategoryPreview/Component'
import { Testimonial21 } from './Testimonial/Testimonial21/Component'
import { CTA1 } from './CTA/CTA1/Component'
import AccessoryPreviewsBlock from './AccessoriesPreview/Component'
import { Layout348 } from './Layout/Layout348/Component'
import { Faq1 } from './FAQ/FAQ1/Component'
import { CTA15 } from './CTA/CTA15/Component'
import { Team18 } from './Team/Team18/Component'
import { Timeline17 } from './Timeline/Component'
import { Layout29 } from './Layout/Layout29/Component'

const blockComponents = {
  header64: Header64,
  archive: ArchiveBlock,
  categoryPreviews: CategoryPreviewsBlock,
  test21: Testimonial21,
  cta1: CTA1,
  accessoryPreviews: AccessoryPreviewsBlock,
  layout348: Layout348,
  faq1: Faq1,
  cta15: CTA15,
  team18: Team18,
  timeline17: Timeline17,
  layout29: Layout29,

  /* PLOP_EXPORTS */
} // ! Block Komponenten hier importieren

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
