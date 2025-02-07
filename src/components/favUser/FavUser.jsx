import React from 'react'
import '../favUser/favUser.css'
import { Avatar } from '@mui/material'

export default function FavUser() {
  return (
    <div className='favUserContainer'>
        <div className="favUserContainerDetails">
            <Avatar/>
                karthik
        </div>
        <button className='UserAddToFavButton1'>remove</button>
    </div>
  )
}
