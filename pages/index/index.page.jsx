import React from 'react'
import { getItemFromPageModel } from '../../lib/pages'
// import { ResponsiveGrid } from '@adobe/aem-react-editable-components'
import { AEMTitle } from '../../components/AEMTitle'
import { AEMText } from '../../components/AEMText'
import { AEMImage } from '../../components/AEMImage'

export { Page }

function Page({ model }) {
  // console.log('model')
  // console.log(model)
  const responsiveGridModel = getItemFromPageModel(model, 'root/responsivegrid')
  const titleModel = getItemFromPageModel(model, 'root/responsivegrid/title')
  // console.log('responsiveGridModel')
  // console.log(responsiveGridModel)
  const responsiveGridModelProps = modelToProps(responsiveGridModel)
  const titleModelProps = modelToProps(titleModel)
  // console.log('responsiveGridModelProps')
  // console.log(responsiveGridModelProps)
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-2 lg:py-6">
      <AEMTitle
        model = {titleModelProps}
        pagePath={import.meta.env.VITE_AEM_PATH}
        itemPath='root/responsivegrid/title'
      />
      <AEMText
        model = {modelToProps(getItemFromPageModel(model, 'root/responsivegrid/text'))}
        pagePath={import.meta.env.VITE_AEM_PATH}
        itemPath='root/responsivegrid/text'
      />
      <AEMImage
        model = {modelToProps(getItemFromPageModel(model, 'root/responsivegrid/image'))}
        pagePath={import.meta.env.VITE_AEM_PATH}
        itemPath='root/responsivegrid/image'
      />
      {/* <ResponsiveGrid
        model = {responsiveGridModelProps}
        pagePath={import.meta.env.VITE_AEM_PATH}
        itemPath='root/responsivegrid'
      /> */}
    </div>
  )
}

function transformToCQ(propKey) {
  const tempKey = propKey.substr(1);

  return 'cq' + tempKey.substr(0, 1).toUpperCase() + tempKey.substr(1);
}

function modelToProps(item) {
  if (!item || !Object.keys(item).length) {
    return { cqPath: '' };
  }

  const keys = Object.getOwnPropertyNames(item);
  const props = {};

  keys.forEach((key) => {
    let propKey = key;

    if (propKey.startsWith(':')) {
      propKey = transformToCQ(propKey);
    }

    props[propKey] = item[key] || '';
  });

  return props;
}