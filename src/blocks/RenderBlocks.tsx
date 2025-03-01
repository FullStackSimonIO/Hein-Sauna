import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { CTA7 } from './CTA/CTA7/Component'
import { Cta25 } from './CTA/CTA25/Component'
import { Cta1 } from './CTA/CTA1/Component'
import { Cta37 } from './CTA/CTA37/Component'
import { Cta38 } from './CTA/CTA38/Component'
import { Cta33 } from './CTA/CTA33/Component'
import { Cta15 } from './CTA/CTA15/Component'
import { Header64 } from './Header/Header64/Component'
import { Header62 } from './Header/Header62/Component'
import { Header47 } from './Header/Header47/Component'
import { Header50 } from './Header/Header50/Component'
import { Layout366 } from './Layout/Layout366/Component'
import { Layout422 } from './Layout/Layout422/Component'
import { Layout415 } from './Layout/Layout415/Component'
import { Layout458 } from './Layout/Layout458/Component'
import { Layout499 } from './Layout/Layout499/Component'
import { Layout38 } from './Layout/Layout38/Component'
import { Layout66 } from './Layout/Layout66/Component'
import { Layout90 } from './Layout/Layout90/Component'
import { Layout364 } from './Layout/Layout364/Component'
import { Layout348 } from './Layout/Layout348/Component'
import { Layout349 } from './Layout/Layout349/Component'
import { Layout423 } from './Layout/Layout423/Component'
import { Layout353 } from './Layout/Layout353/Component'
import { Layout414 } from './Layout/Layout414/Component'
import { Layout417 } from './Layout/Layout417/Component'
import { Layout351 } from './Layout/Layout351/Component'
import { Layout484 } from './Layout/Layout484/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  cta7: CTA7,
  cta25: Cta25,
  cta1: Cta1,
  cta37: Cta37,
  cta38: Cta38,
  cta33: Cta33,
  cta15: Cta15,
  header64: Header64,
  header62: Header62,
  header47: Header47,
  header50: Header50,
  layout366: Layout366,
  layout422: Layout422,
  layout415: Layout415,
  layout458: Layout458,
  layout499: Layout499,
  layout38: Layout38,
  layout66: Layout66,
  layout90: Layout90,
  layout364: Layout364,
  layout348: Layout348,
  layout349: Layout349,
  layout423: Layout423,
  layout353: Layout353,
  layout414: Layout414,
  layout417: Layout417,
  layout351: Layout351,
  layout484: Layout484,
}

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
