import { MapTo } from '@adobe/aem-react-editable-components'
import { AEMText } from './AEMText'
import { AEMTitle } from './AEMTitle'
import { AEMImage } from './AEMImage'

const { VITE_AEM_SITE } = import.meta.env

MapTo(`${VITE_AEM_SITE}/components/title`)(AEMTitle)
MapTo(`${VITE_AEM_SITE}/components/text`)(AEMText)
MapTo(`${VITE_AEM_SITE}/components/image`)(AEMImage)