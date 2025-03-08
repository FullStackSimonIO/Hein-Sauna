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
import { Logo1 } from './LogoSections/Logo1/Component'
import { Logo2 } from './LogoSections/Logo2/Component'
import { Logo3 } from './LogoSections/Logo3/Component'
import { Logo4 } from './LogoSections/Logo4/Component'
import { Team1 } from './TeamSections/Team1/Component'
import { Team2 } from './TeamSections/Team2/Component'
import { Team16 } from './TeamSections/Team16/Component'
import { Team18 } from './TeamSections/Team18/Component'
import { Team21 } from './TeamSections/Team21/Component'
import { Team22 } from './TeamSections/Team22/Component'
import { Gallery27 } from './GallerySections/Gallery27/Component'
import { Gallery26 } from './GallerySections/Gallery26/Component'
import { Gallery21 } from './GallerySections/Gallery21/Component'
import { Gallery15 } from './GallerySections/Gallery15/Component'
import { Gallery19 } from './GallerySections/Gallery19/Component'
import { Gallery8 } from './GallerySections/Gallery8/Component'
import { Gallery10 } from './GallerySections/Gallery10/Component'
import { Gallery13 } from './GallerySections/Gallery13/Component'
import { Gallery7 } from './GallerySections/Gallery7/Component'
import { Gallery24 } from './GallerySections/Gallery24/Component'
import { Gallery1 } from './GallerySections/Gallery1/Component'
import { Gallery9 } from './GallerySections/Gallery9/Component'
import { Gallery20 } from './GallerySections/Gallery20/Component'
import { Stats2 } from './StatsSection/Stats2/Component'
import { Stats4 } from './StatsSection/Stats4/Component'
import { Stats13 } from './StatsSection/Stats13/Component'
import { Stats23 } from './StatsSection/Stats23/Component'

const blockComponents = {
  // ! Standard Blocks
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  // ! CTA Components
  cta7: CTA7,
  cta25: Cta25,
  cta1: Cta1,
  cta37: Cta37,
  cta38: Cta38,
  cta33: Cta33,
  cta15: Cta15,
  // ! Header Components
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
  // ! Contact Components
  contact1: Contact1,
  contact6: Contact6,
  contact24: Contact24,
  // ! FAQ Components
  faq1: Faq1,
  faq7: Faq7,
  faq3: Faq3,
  faq4: Faq4,
  faq11: Faq11,
  faq13: Faq13,
  faq14: Faq14,
  faq8: Faq8,
  // ! Testimonial Components
  testimonial17: Testimonial17,
  test23: Testimonial23,
  test32: Testimonial32,
  test1: Testimonial1,
  test3: Testimonial3,
  test18: Testimonial18,
  test21: Testimonial21,
  test13: Testimonial13,
  test26: Testimonial26,
  // ! Logo Components
  logo1: Logo1,
  logo2: Logo2,
  logo3: Logo3,
  logo4: Logo4,
  // ! Team Components
  team1: Team1,
  team2: Team2,
  team16: Team16,
  team18: Team18,
  team21: Team21,
  team22: Team22,
  // ! Gallery Components
  gallery27: Gallery27,
  gallery26: Gallery26,
  gallery21: Gallery21,
  gallery15: Gallery15,
  gallery19: Gallery19,
  gallery8: Gallery8,
  gallery10: Gallery10,
  gallery13: Gallery13,
  gallery7: Gallery7,
  gallery24: Gallery24,
  gallery1: Gallery1,
  gallery9: Gallery9,
  gallery20: Gallery20,
  // ! Portfolio Components

  // ! Event Components

  // ! Stats Components
  stats2: Stats2,
  stats4: Stats4,
  stats13: Stats13,
  stats23: Stats23,
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
