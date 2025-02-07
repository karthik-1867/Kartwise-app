import React from 'react'
import '../createExpenseAddUser/createExpenseAddUser.css'
import { Avatar } from '@mui/material'

export default function CreateExpenseAddUser() {
  return (
    <div className='CreateExpenseAddUserContainer'>
    <Avatar className='CreateExpenseAddUserLogo'/>
    <div className="CreateExpenseAddUserDetails">
       <span className='CreateExpenseAddUserUserName'>Karthik</span>
       <span className='CreateExpenseAddUserName'>Karthik</span>
    </div>
    
    <button className='CreateExpenseAddUserButton'>Add To quick List</button>
  </div>
  )
}
