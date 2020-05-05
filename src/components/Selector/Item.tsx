import React from 'react'

import styled from 'styled-components'

type Props = {
  changeMap: (id: string) => void
  mapId: string
  name: string
  hasDownload?: boolean
}

export const Item = ({
  changeMap,
  mapId,
  name,
  hasDownload = false,
}: Props) => {
  const handleMapClick = () => {
    changeMap(mapId)
  }

  return (
    <Wrapper>
      <Name onClick={handleMapClick}>{name}</Name>
      {hasDownload && (
        <Download
          href={`https://archive.thearkose.com/${mapId}.zip`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='far fa-file-archive ' />
        </Download>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  background-color: #191919;
  border-bottom: #222222 2px solid;
  white-space: nowrap;
  transition: all 0.5s;
  display: flex;
`

const Name = styled.div`
  width: 100%;
  padding: 18px 20px 14px;

  &:hover {
    background-color: #272727;
    color: #ffffff;
    cursor: pointer;
  }
`

const Download = styled.a`
  padding: 18px 20px 14px;
  border-left: 2px #292929 solid;
  display: block;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    background-color: #272727;
    color: #ffffff;
    cursor: pointer;
  }
`
