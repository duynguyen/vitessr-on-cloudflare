import React, { Component } from 'react';
import { withMappable } from '@adobe/aem-react-editable-components';

const { VITE_AEM_HOST, VITE_AEM_SITE } = import.meta.env;

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    },
    resourceType: `${VITE_AEM_SITE}/components/image`
};

export default class Image extends Component {
    get content() {
        return <img
                className="object-fill"
                src={VITE_AEM_HOST + this.props.src}
                alt={this.props.alt}
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

export const AEMImage = withMappable(Image, ImageEditConfig);