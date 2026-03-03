import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {type StructureBuilder} from 'sanity/structure'

// Website URL for preview
const PREVIEW_URL = 'https://craidrelaunch2026v01.vercel.app'

// Map schema types to section anchors on the website
const sectionMap: Record<string, string> = {
  heroModule: '',
  navigationModule: '',
  philosophyModule: '#philosophy',
  servicesModule: '#services',
  teamModule: '#team',
  doroModule: '#doro',
  reportModule: '#report',
  footerModule: '#footer',
}

// Iframe preview component
const IframePreview = (props: {document: {displayed: {_type: string}}}) => {
  const type = props.document?.displayed?._type || ''
  const anchor = sectionMap[type] || ''
  const url = `${PREVIEW_URL}/${anchor}`

  return (
    <iframe
      src={url}
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        background: '#0a0a0f',
      }}
      title="Website Preview"
    />
  )
}

// Custom desk structure: each module type gets a form + preview side by side
const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton items with preview for each module
      ...Object.entries({
        navigationModule: 'Navigation',
        heroModule: 'Hero Section',
        philosophyModule: 'Philosophy Section',
        servicesModule: 'Services Section',
        teamModule: 'Team Section',
        doroModule: 'Doro / Digital Office Section',
        reportModule: 'Report Section',
        footerModule: 'Footer Section',
      }).map(([type, title]) =>
        S.listItem()
          .title(title)
          .child(
            S.documentTypeList(type)
              .title(title)
              .child((documentId: string) =>
                S.document()
                  .documentId(documentId)
                  .schemaType(type)
                  .views([
                    S.view.form(),
                    S.view
                      .component(IframePreview)
                      .title('Website Preview'),
                  ]),
              ),
          ),
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'CRAiD Website',

  projectId: 'v2qn2ahe',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
