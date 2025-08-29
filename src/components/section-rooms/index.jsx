import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const {roomList = []} = props

  return (
    <ul className='room-list'>
      {
        roomList?.slice(0,8).map(item => {
          return <RoomItem itemData={item} key={item.id}/>
        })
      }
    </ul>
  )
})

SectionRooms.propTypes = {
  roomList:PropTypes.array
}

export default SectionRooms