import React from 'react'
import './Homepage.css'
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'
import Status from './timeline/posts/status'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="homepage_nav">
          <Sidenav />
        </div>
        <div className='status_post'>
          <Status />
        </div>
        <div className="homepage_timeline">
          <Timeline />            
        </div>
    </div>
  )
}

export default Homepage