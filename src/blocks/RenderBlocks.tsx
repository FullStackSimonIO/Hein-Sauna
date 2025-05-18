import { Contact24 } from './contact/Contact24/Component'
import { Contact1 } from './contact/Contact1/Component'
import { CTA1 } from './cta/CTA1/Component'
import { CTA7 } from './cta/CTA7/Component'

/* PLOP_IMPORTS */

import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { CTA15 } from './cta/CTA15/Component'

const blockComponents = {
  cta15: CTA15,
  cta7: CTA7,
  cta1: CTA1,
  contact1: Contact1,
  contact24: Contact24,
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
