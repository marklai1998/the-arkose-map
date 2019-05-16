import React from 'react'
import logo from '../../images/logo.svg'

import './index.css'

export const Header = () => (
  <header id='header' className='header'>
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
        <div className='name'>
          <div>The Arkose</div>
          <div>Online Map</div>
        </div>
      </div>
      <a className='back' href='https://thearkose.com'>
        Official Website
      </a>
    </div>
  </header>
)
