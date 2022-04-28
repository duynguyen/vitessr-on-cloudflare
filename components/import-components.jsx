import { MapTo } from '@adobe/aem-react-editable-components'
import { AEMText } from './AEMText'
import { AEMTitle } from './AEMTitle'
import { AEMImage } from './AEMImage'
import { AEMSeparator } from './AEMSeparator'
import { AEMTeaser } from './AEMTeaser'
import { AEMContainer } from './AEMContainer'

MapTo(`core/wcm/components/text/v2/title`)(AEMTitle)
MapTo(`core/wcm/components/text/v2/text`)(AEMText)
MapTo(`core/wcm/components/text/v2/image`)(AEMImage)
MapTo(`core/wcm/components/separator/v1/separator`)(AEMSeparator)
MapTo(`core/wcm/components/text/v2/teaser`)(AEMTeaser)
MapTo(`core/wcm/components/container/v1/container`)(AEMContainer)