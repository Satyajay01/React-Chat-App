import React from 'react'
import '../list/list.css'
import UserInfo from "./userInfo/UseInfo"
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List