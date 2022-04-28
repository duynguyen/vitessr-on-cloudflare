import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';
import { SeparatorV1IsEmptyFn } from '@adobe/aem-core-components-react-base';

export const SeparatorEditConfig = {
    emptyLabel: 'Separator',
    isEmpty: SeparatorV1IsEmptyFn,
    resourceType: `core/wcm/components/separator/v1/separator`
};

export const Separator = () => {
    return <><br /></>;
};

export const AEMSeparator = (props) => <EditableComponent config={SeparatorEditConfig} {...props}><Separator/></EditableComponent>;