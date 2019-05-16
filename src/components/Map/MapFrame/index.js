import React from 'react'

import './index.css'

export const MapFrame = ({ mapId }) =>
  mapId ? (
    <iframe
      title='map'
      id='mainFrame'
      className='mainFrame'
      src={`https://dynmap.thearkose.com/${mapId}/`}
    />
  ) : (
    <div className='mainFrameBG'>
      <div className='mainFrameBGInner'>
        <i class='fas fa-arrow-left' /> 請選擇地圖
      </div>
    </div>
  )
