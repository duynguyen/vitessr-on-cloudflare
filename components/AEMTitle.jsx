import React from 'react'
import { withMappable } from '@adobe/aem-react-editable-components'
import { TitleV2IsEmptyFn } from '@adobe/aem-core-components-react-base'

const { VITE_AEM_SITE } = import.meta.env;

export const TitleEditConfig = {
    emptyLabel: 'Title',
    isEmpty: TitleV2IsEmptyFn,
    resourceType: `${VITE_AEM_SITE}/components/title`
};

export const Title = ({ text }) => {
    return (<h1 className="text-2xl font-semibold my-2">{text}</h1>)
};

export const AEMTitle = withMappable(Title, TitleEditConfig);