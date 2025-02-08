import React from 'react'
import '../menu/menu.css'
import { Groups, Home, Logout } from '@mui/icons-material'
import BookIcon from '@mui/icons-material/Book';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MessageIcon from '@mui/icons-material/Message';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='MenuContainer'>
      <div className="MenuWrapper">
         <div className="MenuSocial">
            <h1 className='title'>Social users</h1>
            <Link to="/" style={{textDecoration:'none',color:'inherit'}}>
            <div className="MenuItems">
              <Home/>
              <span>Home</span>
            </div>
            </Link>
            <Link to="/fav" style={{textDecoration:'none',color:'inherit'}}>
            <div className="MenuItems">
              <BookIcon/>
              <span>Fav user</span> 
            </div>
            </Link>
            <Link to="/expenseGroup" style={{textDecoration:'none',color:'inherit'}}>
            <div className="MenuItems">
              <Groups/>
              <span>Create expense group</span>
            </div>
            </Link>
         </div>
         <div className="MenuExpense">
          <h1 className='title'>Expense dashboard</h1>
          <Link to="/expenseSheet" style={{textDecoration:'none',color:'inherit'}}>
          <div className="MenuItems">
              <AttachMoneyIcon/>
              <span>Create expense</span>
          </div>
          </Link>
          <Link to="/expenseSummary" style={{textDecoration:'none',color:'inherit'}}>
          <div className="MenuItems">
            <QueryStatsIcon/>
            <span>Current expense status</span>
          </div>
          </Link>
          <Link to="/message" style={{textDecoration:'none',color:'inherit'}}>
          <div className="MenuItems">              
            <MessageIcon/>
            <span>Message</span>
          </div>
          </Link>
          <div className="MenuItems">
            <Logout/>
            <span>Logout</span>
          </div>
         </div>
         <div className="MenuExpense">
          <h1 className='title'>Quick access</h1>
          <div className="MenuItems">
              <Avatar/>
              <span>Ooty</span>
          </div>
          <div className="MenuItems">
            <Avatar/>
            <span>Manali</span>
          </div>
          <div className="MenuItems">              
            <Avatar/>
            <span>Coimature</span>
          </div>
          
         </div>
      </div>
    </div>
  )
}
