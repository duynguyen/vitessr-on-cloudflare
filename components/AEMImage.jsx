import React, { Component } from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';

const { VITE_AEM_HOST, VITE_AEM_SITE } = import.meta.env;

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    },
    resourceType: `core/wcm/components/text/v2/image`
};

export class Image extends Component {
    get content() {
        return <img
                className="object-fill"
                src={VITE_AEM_HOST + this.props.src}
                alt={this.props.alt || 'aem-image'}
                title={this.props.title ? this.props.title : this.props.alt} />;
    }

    render() {
        if(ImageEditConfig.isEmpty(this.props)) {
            return null;
        }
        return (
            <div>
                {this.content}
            </div>
        );
    }
}

export const AEMImage = (props) => <EditableComponent config={ImageEditConfig} {...props}><Image/></EditableComponent>;