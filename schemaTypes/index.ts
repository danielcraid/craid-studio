import heroModule from './heroModule'
import philosophyModule from './philosophyModule'
import servicesModule from './servicesModule'
import teamModule from './teamModule'
import doroModule from './doroModule'
import reportModule from './reportModule'
import navigationModule from './navigationModule'
import footerModule from './footerModule'
import page from './page'
import {heroBlock, textBlock, imageBlock, ctaBlock} from './blocks'

export const schemaTypes = [
  // Module (Startseite)
  navigationModule,
  heroModule,
  philosophyModule,
  servicesModule,
  teamModule,
  doroModule,
  reportModule,
  footerModule,
  // Seiten
  page,
  // Bausteine (für modulare Seiten)
  heroBlock,
  textBlock,
  imageBlock,
  ctaBlock,
]
