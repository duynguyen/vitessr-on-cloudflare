import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';

const { VITE_AEM_SITE } = import.meta.env;

export const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    },
    resourceType: `${VITE_AEM_SITE}/components/text`
};

export const Text = (props) => {
    const { richText, text } = props;
    const textCss = "text-gray-800 py-4 sm:py-2 lg:py-6";
    const richTextContent = () => (
        <div className={textCss} dangerouslySetInnerHTML={{__html: text}} />
    );
    const normalTextContent = () => (
        <div className={textCss}>{text}</div>
    );
    return richText ? richTextContent() : normalTextContent();
};

export const AEMText = (props) => <EditableComponent config={TextEditConfig} {...props}><Text/></EditableComponent>;