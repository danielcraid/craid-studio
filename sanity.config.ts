import {defineConfig} from 'sanity'
import {structureTool, type DefaultDocumentNodeResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {WebPreview} from './components/WebPreview'

// All module types that should get a preview tab
const previewTypes = [
  'heroModule',
  'navigationModule',
  'philosophyModule',
  'servicesModule',
  'teamModule',
  'doroModule',
  'reportModule',
  'footerModule',
]

// Add Website Preview tab to all module documents
const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (previewTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view.component(WebPreview).title('Website Preview'),
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
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
