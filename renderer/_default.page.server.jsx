import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import Layout from '../components/Layout'
import { getPageTitle } from './getPageTitle'

export { render }
export { passToClient }

const passToClient = ['pageProps', 'documentProps', 'someAsyncProps']

function render(pageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>,
  )
  
  const title = getPageTitle(pageContext)
  
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
  
  return {
    documentHtml,
    // We can return a `pageContext` promise
    pageContext: (async () => {
      return {
        someAsyncProps: 42,
      }
    })(),
  }
}
