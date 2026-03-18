import {type ComponentType} from 'react'

const PREVIEW_URL = 'https://craidrelaunch2026v002.vercel.app'

const sectionMap: Record<string, string> = {
  heroModule: '#hero',
  navigationModule: '',
  philosophyModule: '#philosophy',
  servicesModule: '#services',
  teamModule: '#team',
  doroModule: '#doro',
  reportModule: '#report',
  footerModule: '#footer',
}

export const WebPreview: ComponentType<any> = (props) => {
  const doc = props.document?.displayed
  const type = doc?._type || ''

  let url = PREVIEW_URL

  if (type === 'page') {
    // Pages: use slug as path, "home" = startseite
    const slug = doc?.slug?.current
    if (slug && slug !== 'home') {
      url = `${PREVIEW_URL}/${slug}`
    }
  } else if (sectionMap[type] !== undefined) {
    // Module: show homepage with anchor to section
    url = `${PREVIEW_URL}/${sectionMap[type]}`
  }

  return (
    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div
        style={{
          padding: '8px 16px',
          background: '#1a1a2e',
          color: '#fff',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>Preview: {url}</span>
        <button
          onClick={() => {
            const iframe = document.querySelector('#web-preview-iframe') as HTMLIFrameElement
            if (iframe) iframe.src = iframe.src
          }}
          style={{
            background: '#e500ff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '4px 12px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Reload
        </button>
      </div>
      <iframe
        id="web-preview-iframe"
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          flex: 1,
        }}
        title="Website Preview"
      />
    </div>
  )
}
