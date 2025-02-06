import { Avatar } from '@mui/material'
import React from 'react'
import '../user/user.css'

export default function User({user}) {
  return (
    <div className='UserContainer'>
      <Avatar className='UserContainerLogo'/>
      <div className="UserDetails">
         <span className='UserDetailsUserName'>{user}</span>
         <span className='UserDetailsName'>{user}</span>
      </div>
      
      <button className='UserAddToFavButton'>Add To quick List</button>
    </div>
  )
}
