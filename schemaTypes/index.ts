import heroModule from './heroModule'
import purposeModule from './purposeModule'
import philosophyModule from './philosophyModule'
import servicesModule from './servicesModule'
import venturesModule from './venturesModule'
import teamModule from './teamModule'
import doroModule from './doroModule'
import reportModule from './reportModule'
import navigationModule from './navigationModule'
import footerModule from './footerModule'
import page from './page'
import serviceDetail from './serviceDetail'
import insightItem from './insightItem'
import {heroBlock, textBlock, imageBlock, ctaBlock, richTextBlock} from './blocks'

export const schemaTypes = [
  // Module (wiederverwendbare Sections)
  navigationModule,
  heroModule,
  purposeModule,
  philosophyModule,
  servicesModule,
  venturesModule,
  teamModule,
  doroModule,
  reportModule,
  footerModule,
  // Seiten
  page,
  serviceDetail,
  insightItem,
  // Bausteine (für freie Inhalte auf Seiten)
  heroBlock,
  textBlock,
  imageBlock,
  ctaBlock,
  richTextBlock,
]
