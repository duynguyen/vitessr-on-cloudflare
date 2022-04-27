import { MapTo } from '@adobe/aem-react-editable-components'
import { Text, TextEditConfig } from './AEMText'
import { Title, TitleEditConfig } from './AEMTitle'
import Image, { ImageEditConfig } from './AEMImage'

const { VITE_AEM_SITE } = import.meta.env;

MapTo(`${VITE_AEM_SITE}/components/title`)(Title, TitleEditConfig)
MapTo(`${VITE_AEM_SITE}/components/text`)(Text, TextEditConfig)
MapTo(`${VITE_AEM_SITE}/components/image`)(Image, ImageEditConfig)