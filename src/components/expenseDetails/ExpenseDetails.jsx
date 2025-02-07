import React from 'react'
import '../expenseDetails/expenseDetails.css'
import { Avatar } from '@mui/material'
export default function ExpenseDetails() {
  return (
    <div className='favUserContainer'>
        <div className="favUserContainerDetails">
            <Avatar/>
            <div className="ExpenseUserAndDetails">
                karthik
                <div className="ExpenseSpendAndPaid">
                    <span className='spent'>Spent :<span>+360</span></span>
                    <span className='spent'>paid :<span>-36055</span></span>
                </div>
            </div>
        </div>
        <button className='UserAddToFavButton1'>remove</button>
    </div>
  )
}
