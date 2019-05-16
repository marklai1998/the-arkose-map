import React, { useState } from 'react'

import { MapFrame } from './MapFrame'
import { Selector } from './Selector'

export const Map = () => {
  const [mapId, setMapId] = useState(null)
  return (
    <React.Fragment>
      <Selector setMapId={setMapId} />
      <MapFrame mapId={mapId} />
    </React.Fragment>
  )
}
