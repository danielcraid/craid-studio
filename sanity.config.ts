import {defineConfig} from 'sanity'
import {structureTool, type DefaultDocumentNodeResolver} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {SplitPreview} from './components/SplitPreview'

// All types that should get a live preview tab
const previewTypes = [
  'heroModule',
  'navigationModule',
  'philosophyModule',
  'servicesModule',
  'teamModule',
  'doroModule',
  'reportModule',
  'footerModule',
  'page',
]

// Live Preview as DEFAULT view, Form as second tab
const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (previewTypes.includes(schemaType)) {
    return S.document().views([
      S.view.component(SplitPreview).title('Live Preview'),
      S.view.form(),
    ])
  }
  return S.document()
}

export default defineConfig({
  name: 'default',
  title: 'CRAiD Website',

  projectId: 'v2qn2ahe',
  dataset: 'production',

  plugins: [
    structureTool({defaultDocumentNode}),
    presentationTool({
      previewUrl: 'https://craidrelaunch2026v002.vercel.app',
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
