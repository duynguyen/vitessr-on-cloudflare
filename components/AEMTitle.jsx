import React from 'react'
import { EditableComponent } from '@adobe/aem-react-editable-components'
import { TitleV2IsEmptyFn } from '@adobe/aem-core-components-react-base'

const { VITE_AEM_SITE } = import.meta.env

export const TitleEditConfig = {
    emptyLabel: 'Title',
    isEmpty: TitleV2IsEmptyFn,
    resourceType: `core/wcm/components/text/v2/title`
}

export const Title = ({ text }) => {
    return (<h2 className="text-2xl font-semibold my-2">{text}</h2>)
};

export const AEMTitle = (props) => <EditableComponent config={TitleEditConfig} {...props}><Title/></EditableComponent>