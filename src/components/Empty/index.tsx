import React from 'react'

import styled from 'styled-components'

export const Empty = () => (
  <MessageWrapper>
    <Message>
      <i className='fas fa-arrow-left' /> 請選擇地圖
    </Message>
  </MessageWrapper>
)

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
