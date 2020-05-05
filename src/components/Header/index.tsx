import React from 'react'
import logo from '../../images/logo.svg'
import styled from 'styled-components'

export const Header = () => (
  <Wrapper>
    <div className='container'>
      <LogoWrapper>
        <Logo src={logo} alt='logo' />
        <Name className='name'>
          <div>The Arkose</div>
          <div>Online Map</div>
        </Name>
      </LogoWrapper>
      <BackBtn href='https://thearkose.com'>Official Website</BackBtn>
    </div>
  </Wrapper>
)

const Wrapper = styled.header`
  background: #222 50% 50%;
  color: white;
  width: 100%;
  background-size: cover;
  height: 90px;
  top: 0;
  min-height: 90px;
  border-bottom: #eee8be 10px solid;
`

const BackBtn = styled.a`
  color: #222222;
  background-color: #f5d168;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  float: right;
  margin-top: 25px;
`

const LogoWrapper = styled.div`
  padding: 10px 0;
  display: inline-block;
`

const Logo = styled.img`
  height: 60px;
  vertical-align: bottom;
`

const Name = styled.div`
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;

  & div:first-child {
    font-size: 20px;
    line-height: 10px;
    margin-right: 20px;
    margin-top: 20px;
  }

  & div:last-child {
    float: right;
    font-size: 15px;
  }
`
