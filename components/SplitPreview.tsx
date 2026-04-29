import {type ComponentType, useState, useCallback} from 'react'

const PREVIEW_URL = 'https://craidrelaunch2026v002.vercel.app'

// Module types that get their own isolated preview
const moduleTypes = [
  'heroModule',
  'navigationModule',
  'philosophyModule',
  'servicesModule',
  'teamModule',
  'doroModule',
  'reportModule',
  'footerModule',
]

function getPreviewUrl(doc: any) {
  const type = doc?._type || ''

  // Module → isolated preview (only that module)
  if (moduleTypes.includes(type)) {
    return `${PREVIEW_URL}/preview/${type}`
  }

  // Service Detail → /services/<slug>
  if (type === 'serviceDetail') {
    const slug = doc?.slug?.current
    return slug ? `${PREVIEW_URL}/services/${slug}` : PREVIEW_URL
  }

  // Page → show the page by slug
  if (type === 'page') {
    const slug = doc?.slug?.current
    if (slug && slug !== 'home') {
      return `${PREVIEW_URL}/${slug}`
    }
    return PREVIEW_URL
  }

  return PREVIEW_URL
}

export const SplitPreview: ComponentType<any> = (props) => {
  const doc = props.document?.displayed
  const url = getPreviewUrl(doc)
  const [iframeKey, setIframeKey] = useState(0)

  const handleReload = useCallback(() => {
    setIframeKey((k: number) => k + 1)
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      {/* Preview toolbar */}
      <div
        style={{
          padding: '6px 12px',
          background: '#101828',
          color: '#94a3b8',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1e293b',
          flexShrink: 0,
        }}
      >
        <span style={{opacity: 0.7}}>{url}</span>
        <button
          onClick={handleReload}
          style={{
            background: '#7c3aed',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '3px 10px',
            cursor: 'pointer',
            fontSize: '11px',
          }}
        >
          Reload
        </button>
      </div>
      {/* Preview iframe */}
      <iframe
        key={iframeKey}
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          flex: 1,
          background: '#fff',
        }}
        title="Website Preview"
      />
    </div>
  )
}
