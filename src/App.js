import React from 'react'
import logo from './images/logo.svg'
import './App.css'

const Header = () => (
  <header id="header" className="header">
    <div className="container">
      <div className={"logo"}>
        <img src={logo} alt="logo" />
        <div className={"name"}>
          <div>The Arkose</div>
          <div>Online Map</div>
        </div>
      </div>
      <a className="back" href="https://thearkose.com">Official Website</a>
    </div>
  </header>
)

class Body extends React.PureComponent {
  state = {
    show: false,
    mapId: null
  }

  changeMap = (mapId) => {
    this.setState({
      show: false,
      mapId
    })
  }

  render() {
    return (
      <React.Fragment>
        <MapSelector changeMap={this.changeMap} />
        <Map mapId={this.state.mapId} />
      </React.Fragment>
    );
  }
}

const Map = (props) => (props.mapId ?
  <iframe title={"map"} id="mainFrame" className="mainFrame"
    src={`https://services.thearkose.com/${props.mapId}/`} /> :
  <div className="mainFrameBG"><div className="mainFrameBGInner">
    <i class="fas fa-arrow-left" />  請選擇地圖</div>
  </div>)

class MapSelector extends React.PureComponent {
  state = {
    show: false
  }

  toggleNav = () => {
    this.setState({
      show: !this.state.show
    })
  }

  onChangeMap = (mapId) => {
    this.props.changeMap(mapId)
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className={"nav-outer " + (this.state.show ? "show" : "")}>
        <div className="nav-button">
          <i className="fas fa-caret-right" onClick={this.toggleNav} />
        </div>
        <div className={"nav-inner"}>
          <div className="cate">1.12</div>
          <ul className="selector">
            <ListBtn onClick={this.onChangeMap} mapId="90">火柴人小品休閒伺服器</ListBtn>
            <ListBtn onClick={this.onChangeMap} mapId="91">Project TheArkose</ListBtn>
          </ul>
          <div className="cate">1.13</div>
          <ul className="selector">
            <ListBtn onClick={this.onChangeMap} mapId="92">Project TheArkose</ListBtn>
          </ul>
        </div>
      </div>
    )
  }
}

class ListBtn extends React.PureComponent {
  onClick = () => {
    this.props.onClick(this.props.mapId)
  }
  render() {
    return (
      <li onClick={this.onClick}>{this.props.children}</li>
    )
  }
}


class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
