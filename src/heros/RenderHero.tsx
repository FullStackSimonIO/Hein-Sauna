import React from 'react'

import type { Page } from '@/payload-types'
import { Header1 } from './Header1'
import { Header76 } from './Header76'
import { Header78 } from './Header78'
import { Header127 } from './Header127'
import { Header83 } from './Header83'
import { Header104 } from './Header104'
import { Header5 } from './Header5'
import { Header9 } from './Header9'
import { Header19 } from './Header19'
import { Header26 } from './Header26'
import { Header30 } from './Header30'
import { Header36 } from './Header36'
import { Header37 } from './Header37'
import { Header77 } from './Header77'

const heroes = {
  header1: Header1,
  header5: Header5,
  header9: Header9,
  header36: Header36,
  header127: Header127,
  /*highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  header19: Header19,
  header26: Header26,
  header30: Header30,
  header37: Header37,
  header76: Header76,
  header77: Header77,
  header78: Header78,
  header83: Header83,
  header104: Header104,
  */
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
