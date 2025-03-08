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
import { Layout493 } from './Layout/Layout493/Component'
import { Layout356 } from './Layout/Layout356/Component'
import { Layout486 } from './Layout/Layout486/Component'
import { Layout488 } from './Layout/Layout488/Component'
import { Layout352 } from './Layout/Layout352/Component'
import { Layout354 } from './Layout/Layout354/Component'
import { Layout412 } from './Layout/Layout412/Component'
import { Layout413 } from './Layout/Layout413/Component'
import { Layout419 } from './Layout/Layout419/Component'
import { Layout424 } from './Layout/Layout424/Component'
import { Layout425 } from './Layout/Layout425/Component'
import { Layout485 } from './Layout/Layout485/Component'
import { Layout517 } from './Layout/Layout517/Component'
import { Contact1 } from './Contact/Contact1/Component'
import { Contact6 } from './Contact/Contact6/Component'
import { Contact24 } from './Contact/Contact24/Component'
import { Faq1 } from './FAQ/FAQ1/Component'
import { Faq7 } from './FAQ/FAQ7/Component'
import { Faq3 } from './FAQ/FAQ3/Component'
import { Faq4 } from './FAQ/FAQ4/Component'
import { Faq11 } from './FAQ/FAQ11/Component'
import { Faq13 } from './FAQ/FAQ13/Component'
import { Faq14 } from './FAQ/FAQ14/Component'
import { Faq8 } from './FAQ/FAQ8/Component'
import { Testimonial17 } from './Testimonials/Testimonial17/Component'
import { Testimonial23 } from './Testimonials/Testimonial23/Component'
import { Testimonial32 } from './Testimonials/Testimonial32/Component'
import { Testimonial1 } from './Testimonials/Testimonial1/Component'
import { Testimonial3 } from './Testimonials/Testimonial3/Component'
import { Testimonial18 } from './Testimonials/Testimonial18/Component'
import { Testimonial21 } from './Testimonials/Testimonial21/Component'
import { Testimonial13 } from './Testimonials/Testimonial13/Component'
import { Testimonial26 } from './Testimonials/Testimonial26/Component'

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
  layout493: Layout493,
  layout356: Layout356,
  layout486: Layout486,
  layout488: Layout488,
  layout352: Layout352,
  layout354: Layout354,
  layout412: Layout412,
  layout413: Layout413,
  layout419: Layout419,
  layout424: Layout424,
  layout425: Layout425,
  layout485: Layout485,
  layout517: Layout517,
  contact1: Contact1,
  contact6: Contact6,
  contact24: Contact24,
  faq1: Faq1,
  faq7: Faq7,
  faq3: Faq3,
  faq4: Faq4,
  faq11: Faq11,
  faq13: Faq13,
  faq14: Faq14,
  faq8: Faq8,
  testimonial17: Testimonial17,
  test23: Testimonial23,
  test32: Testimonial32,
  test1: Testimonial1,
  test3: Testimonial3,
  test18: Testimonial18,
  test21: Testimonial21,
  test13: Testimonial13,
  test26: Testimonial26,
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
