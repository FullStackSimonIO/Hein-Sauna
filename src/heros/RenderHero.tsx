import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { Header1 } from './Header1'
import { Header76 } from './Header76'
import { Header78 } from './Header78'
import { Header127 } from './Header127'
import { Header83 } from './Header83'
import { Header104 } from './Header104'
import { Header5 } from './Header5'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  header1: Header1,
  header76: Header76,
  header78: Header78,
  header83: Header83,
  header127: Header127,
  header104: Header104,
  header5: Header5,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
