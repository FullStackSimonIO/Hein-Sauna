/* PLOP_IMPORTS */

import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { ArchiveBlock } from '@/block-templates/ArchiveBlock/Component'
import Contact1 from './contact/Contact1/Component'

const blockComponents = {
  contact1: Contact1,
  archive: ArchiveBlock,
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
