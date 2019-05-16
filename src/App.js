import React from 'react'

import { Header } from './components/Header'
import { Map } from './components/Map'

import './App.css'

class App extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Map />
      </React.Fragment>
    )
  }
}

export default App
