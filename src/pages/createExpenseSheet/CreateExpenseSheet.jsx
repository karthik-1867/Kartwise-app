import React from 'react'
import '../createExpenseSheet/createExpenseSheet.css'
import FavUser from '../../components/favUser/FavUser'
import ExpenseDetails from '../../components/expenseDetails/ExpenseDetails'
import CreateExpenseAddUser from '../../components/createExpenseAddUser/CreateExpenseAddUser'
export default function CreateExpense() {
  return (
    <div className='CreateExpenseSheetContainer'>
      <div className="CreateExpenseSheetWrapper">
         <div className="CreateExpenseSheetLists">
          <div className="ExpenseListWrapper">
            <div className="CreateExpenseSheetList addition1">
              <h1 className='CreateExpenseSheetTitle'>Choose group</h1>
              <ul className='CreateExpenseSheetListUl ad1'>
              <li >
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
                <li >
                <CreateExpenseAddUser/>
                </li>
                <li >
                <CreateExpenseAddUser/>
                </li>
                <li >
                <CreateExpenseAddUser/>
                </li>
                <li >
                <CreateExpenseAddUser/>
                </li>
                <li >
                <CreateExpenseAddUser/>
                </li>
              </ul>
            </div>

            <div className="CreateExpenseSheetList addition">
              <div className="CreateExpenseSheetInputWrapper">
                  <h1 className='CreateExpenseSheetTitle'>Create expense Group</h1>
                  <h4 className='CreateExpenseSheetName'>Title</h4>
                  <input type="text" placeholder='Enter group name' className='CreateExpenseSheetListInput'/>
                  <h4>Upload image</h4>
                  <input type="text" placeholder='Upload image' className='CreateExpenseSheetListInput'/>
                  <h4>Paid by</h4>
                  <input type="text" placeholder='paid by' className='CreateExpenseSheetListInput'/>
                  <div className="CreateExpenseSheetNameUserItem">
                    <h4>Karthik</h4>
                    <input type="text" placeholder='Expense' className='CreateExpenseSheetListInput'/>
                  </div>
                  <div className="CreateExpenseSheetNameUserItem">
                    <h4>Vittal</h4>
                    <input type="text" placeholder='Expense' className='CreateExpenseSheetListInput'/>
                  </div>
                  <div className="CreateExpenseSheetNameUserItem">
                    <h4>Krishna</h4>
                    <input type="text" placeholder='Expense' className='CreateExpenseSheetListInput'/>
                  </div>

              </div>
          
              <button className='CreateExpenseSheetSubmit'>Submit</button>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}
