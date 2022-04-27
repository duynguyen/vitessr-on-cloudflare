import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { PageShell } from './PageShell'
import { getPageTitle } from './getPageTitle'
import { ModelManager } from '@adobe/aem-spa-page-model-manager'
import CustomModelClient from '../lib/CustomModelClient'
import '../components/import-components'
import 'virtual:windi.css'

let root
const container = document.getElementById("page-view")

function onTransitionStart() {
  console.log("Page transition start");
  document.querySelector("#page-content").classList.add("page-transition")
}
function onTransitionEnd() {
  console.log("Page transition end");
  document.querySelector("#page-content").classList.remove("page-transition")
}

const { hydrationPromise } = useClientRouter({
  render(pageContext) {
    const { Page, pageProps } = pageContext
    const page = (
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    )
    const modelClient = new CustomModelClient(import.meta.env.VITE_AEM_HOST)
    ModelManager.initializeAsync({
      modelClient,
    })
    if (pageContext.isHydration) {
      root = ReactDOMClient.hydrateRoot(container, page)
    } else {
      root.render(page);
    }
    document.title = getPageTitle(pageContext)
  },
  ensureHydration: false,
  prefetch: true,
  onTransitionStart,
  onTransitionEnd,
});

hydrationPromise.then(() => {
  console.log("Hydration finished; page is now interactive.")
})