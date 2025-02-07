import React from 'react'
import '../fav/fav.css'
import User from '../../components/user/User'
import FavUser from '../../components/favUser/FavUser'
import ExpenseDetails from '../../components/expenseDetails/ExpenseDetails'

export default function Fav() {
  return (
    <div className='favContainer'>
      <div className="favWrapper">
         <div className="favLists">
          <div className="favListWrapper">
          <div className="favList">
            <h1 className='favListTitle'>Bookmarked users view</h1>
            <ul className='favListUl'>
              <li>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
                <FavUser className='favItems'/>
              </li>
            </ul>
          </div>

          <div className="favList">
          <h1 className='favListTitle'>Quick expense access</h1>
            <ul className='favListUl'>
              <li>
              <ExpenseDetails/>
              <ExpenseDetails/>
              <ExpenseDetails/>
              <ExpenseDetails/><ExpenseDetails/>

              <ExpenseDetails/>
              </li>
            </ul>
          </div>
          </div>
         </div>

        <div className="favDetails">
          <div className="favDetailsWrapper">
              <h1 className='favDetailsTitle'>Quick expense summary</h1>
              <div className="TotalSpent">
                  <span className='spentTitle'>Total spent</span>
                  <span className='totalSpent'>5600 RS</span>
              </div>
              <div className="TotalSpent">
                  <span className='spentTitle'>Total received</span>
                  <span className='totalReceived'>560 RS</span>
              </div>
              <div className="TotalSpent">
                  <span className='spentTitle'>Total Group</span>
                  <span className='totalGroup'>5 groups</span>
              </div>
              <div className="TotalSpent">
                  <span className='spentTitle'>Total Expense Group</span>
                  <span className='totalGroup'>4 groups</span>
              </div>
          </div>
         </div>
      </div>
    </div>
  )
}
