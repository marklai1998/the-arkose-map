import React, { useState } from 'react'

import { Header } from './components/Header'
import { createGlobalStyle } from 'styled-components'
import { Selector } from './components/Selector'
import { MapFrame } from './components/MapFrame'

export const App = () => {
  const [mapId, setMapId] = useState<string | null>(null)
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Selector setMapId={setMapId} />
      <MapFrame mapId={mapId} />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rajdhani', Microsoft JhengHei, sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    color: #222222;
    text-decoration: none;
    transition: all 0.5s;
  }

  a:hover {
    color: #222222;
    text-decoration: none;
  }

  div {
    transition: all 0.5s;
  }

  img {
    transition: all 0.5s;
  }
`
