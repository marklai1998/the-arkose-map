import React, { useState } from 'react'

import { Item } from './Item'
import styled from 'styled-components'

type Props = {
  setMapId: (id: string) => void
}

export const Selector = ({ setMapId }: Props) => {
  const [visible, setVisible] = useState(false)

  const toggleNav = () => {
    setVisible((prev) => !prev)
  }

  const onChangeMap = (mapId: string) => {
    setMapId(mapId)
    setVisible(false)
  }

  return (
    <Wrapper visible={visible}>
      <Btn>
        <i className='fas fa-caret-right' onClick={toggleNav} />
      </Btn>
      <Nav>
        <CateTitle>1.12</CateTitle>
        <Cate>
          <Item
            name='火柴人小品休閒伺服器'
            changeMap={onChangeMap}
            mapId='90'
            hasDownload
          />
          <Item
            name='Project TheArkose'
            changeMap={onChangeMap}
            mapId='91'
            hasDownload
          />
        </Cate>
        <CateTitle>1.13</CateTitle>
        <Cate>
          <Item name='Project TheArkose' changeMap={onChangeMap} mapId='92' />
        </Cate>
        <CateTitle>1.14</CateTitle>
        <Cate>
          <Item name='Project TheArkose' changeMap={onChangeMap} mapId='93' />
        </Cate>
      </Nav>
    </Wrapper>
  )
}

const Btn = styled.div`
  position: absolute;
  right: 0;
  height: 50px;
  border-radius: 0 5px 5px 0;
  background-color: #dbd5af;
  display: table;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);

  & i {
    display: table-cell;
    vertical-align: middle;
    color: #222222;
    padding: 10px;
    transition: all 1s;
  }
`

const Nav = styled.div`
  color: #fff;
  background-color: #222222;
  height: 100%;
  margin-right: 26px;
`

const CateTitle = styled.div`
  background-color: white;
  color: #222222;
  font-size: 25px;
  padding: 10px 0;
  border-left: #f5d168 0px solid;
  transition: all 0.5s;
  overflow: hidden;
`

const Cate = styled.ul`
  list-style: none;
  padding-left: 0;
  overflow: hidden;
`

const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  height: 100%;
  width: ${({ visible }) => (visible ? '300px' : '26px')};
  overflow: hidden;
  z-index: 10;

  & ${Btn} i {
    ${({ visible }) => (visible ? 'transform: rotate(180deg);' : '')}
  }

  & ${CateTitle} {
    ${({ visible }) =>
      visible ? ' padding: 10px 20px; border-left: #f5d168 5px solid;' : ''}
  }
`
