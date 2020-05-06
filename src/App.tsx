import React, { useState } from 'react'

import { Header } from './components/Header'
import styled, { createGlobalStyle } from 'styled-components'
import { Selector } from './components/Selector'
import { Empty } from './components/Empty'

export const App = () => {
  const [mapId, setMapId] = useState<string | null>(null)
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Selector setMapId={setMapId} />
      {mapId ? (
        <Iframe src={`https://dynmap.thearkose.com/${mapId}/`} />
      ) : (
        <Empty />
      )}
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

const Iframe = styled.iframe`
  width: 100%;
  position: absolute;
  height: calc(100% - 90px);
  border: none;
  z-index: -1;
`
