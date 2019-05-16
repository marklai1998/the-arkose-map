import React from 'react'

import './index.css'

export class Selector extends React.PureComponent {
  state = {
    show: false
  }

  toggleNav = () => {
    this.setState({
      show: !this.state.show
    })
  }

  onChangeMap = mapId => {
    this.props.setMapId(mapId)
    this.setState({ show: false })
  }

  render () {
    return (
      <div className={'nav-outer ' + (this.state.show ? 'show' : '')}>
        <div className='nav-button'>
          <i className='fas fa-caret-right' onClick={this.toggleNav} />
        </div>
        <div className={'nav-inner'}>
          <div className='cate'>1.12</div>
          <ul className='selector'>
            <ListBtn changeMap={this.onChangeMap} mapId='90' hasDownload>
              火柴人小品休閒伺服器
            </ListBtn>
            <ListBtn changeMap={this.onChangeMap} mapId='91' hasDownload>
              Project TheArkose
            </ListBtn>
          </ul>
          <div className='cate'>1.13</div>
          <ul className='selector'>
            <ListBtn changeMap={this.onChangeMap} mapId='92'>
              Project TheArkose
            </ListBtn>
          </ul>
        </div>
      </div>
    )
  }
}

class ListBtn extends React.PureComponent {
  changeMap = () => {
    this.props.changeMap(this.props.mapId)
  }

  downloadArchive = () => {
    this.props.downloadArchive(this.props.mapId)
  }

  render () {
    return (
      <li>
        <div onClick={this.changeMap} className='itemName'>
          {this.props.children}
        </div>
        {this.props.hasDownload && (
          <a
            onClick={this.downloadArchive}
            className='download'
            href={`https://archive.thearkose.com/${this.props.mapId}.zip`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='far fa-file-archive ' />
          </a>
        )}
      </li>
    )
  }
}
