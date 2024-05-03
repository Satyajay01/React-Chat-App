import "./useInfo.css"

import React from 'react'

const useInfo = () => {
  return (
    <div className="useInfo">
      <div className="user">
        <img src="./avatar.png" alt="" srcset="" />
        <h4>John Doe</h4>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" srcset="" />
        <img src="./video.png" alt="" srcset="" />
        <img src="./edit.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default useInfo