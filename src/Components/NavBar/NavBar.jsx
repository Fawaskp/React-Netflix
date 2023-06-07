import React from 'react'
import './NavBar.css'
import userProfile from '/home/fawas/Documents/Coding/React/netflix/src/assets/userprofile.png'

function NavBar() {
  return (
    <div className='navbar'>
        <img className='main-logo' src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
        <img className='userprofile' src={userProfile} alt="Netflix Logo" />
    </div>
  )
}

export default NavBar
