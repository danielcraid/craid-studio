import heroModule from './heroModule'
import philosophyModule from './philosophyModule'
import servicesModule from './servicesModule'
import teamModule from './teamModule'
import doroModule from './doroModule'
import reportModule from './reportModule'
import navigationModule from './navigationModule'
import footerModule from './footerModule'
import page from './page'
import serviceDetail from './serviceDetail'
import {heroBlock, textBlock, imageBlock, ctaBlock, richTextBlock} from './blocks'

export const schemaTypes = [
  // Module (wiederverwendbare Sections)
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
  serviceDetail,
  // Bausteine (für freie Inhalte auf Seiten)
  heroBlock,
  textBlock,
  imageBlock,
  ctaBlock,
  richTextBlock,
]
