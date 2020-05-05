import React from 'react'

import styled from 'styled-components'

type Props = {
  mapId: string | null
}

export const MapFrame = ({ mapId }: Props) =>
  mapId ? (
    <Iframe
      title='map'
      id='mainFrame'
      className='mainFrame'
      src={`https://dynmap.thearkose.com/${mapId}/`}
    />
  ) : (
    <MessageWrapper>
      <Message>
        <i className='fas fa-arrow-left' /> 請選擇地圖
      </Message>
    </MessageWrapper>
  )

const Iframe = styled.iframe`
  width: 100%;
  position: absolute;
  height: calc(100% - 90px);
  border: none;
  z-index: -1;
`

const MessageWrapper = styled.div`
  background-color: #272727;
  width: 100%;
  position: absolute;
  height: calc(100% - 90px);
`

const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: #dbd5af;
`
