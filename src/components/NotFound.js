import React from 'react'
import "../styles/NotFound.css"

import MissionFailed from "../images/mission-failed.png"


function NotFound() {
  return (
    <div className='not-found-container'>
      <picture>
          < img className="mission-failed" alt ="Mission Failed" src={MissionFailed}/>
        </picture>

      <h1>Page Not Found!</h1>
      
    </div>

  )
}

export default NotFound