import React from 'react'
import '../expenseCard/expenseCard.css'
import { Avatar } from '@mui/material'

export default function ExpenseCard() {
  return (
    <div className='expenseCardContainer'>
        <div className="expenseCardUserInfo">
            <Avatar className="expenseCardUserLogo"/>
            <div className="expenseCardUserDetails">
                karthik
                <div className="expenseCardExpenditure">
                    <span className='expenseCardExpenditurespent'> spent : 100 rs</span>
                    <span className='expenseCardExpenditurereceived'>received : 100 rs</span>
                </div>
            </div>
        </div>
        <div className="expenseCardButtons">
            <button className="expenseCardButton">Edit</button>
            <button className="expenseCardButton">Delete</button>
        </div>
    </div>
  )
}
