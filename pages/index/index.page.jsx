import React from 'react'
import ResponsiveGrid from '../../components/AEMResponsiveGrid'
import { Utils } from '@adobe/aem-react-editable-components'
import { getItemFromPageModel } from '../../lib/pages'

export { Page }

function Page({ model }) {
  const responsiveGridModel = getItemFromPageModel(model, 'root/responsivegrid')
  const responsiveGridModelProps = Utils.modelToProps(responsiveGridModel)
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-2 lg:py-6">
    <ResponsiveGrid
      {...responsiveGridModelProps}
      model = {responsiveGridModel}
      pagePath='/content/wknd-app/us/en/home'
      itemPath='root/responsivegrid'
    />
  </div>
  )
}
