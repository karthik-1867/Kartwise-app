import React from 'react'
import '../createExpenseGroup/createExpense.css'
import FavUser from '../../components/favUser/FavUser'
import ExpenseDetails from '../../components/expenseDetails/ExpenseDetails'
import CreateExpenseAddUser from '../../components/createExpenseAddUser/CreateExpenseAddUser'
export default function CreateExpense() {
  return (
    <div className='ExpenseGroupContainer'>
      <div className="ExpenseGroupWrapper">
         <div className="ExpenseGroupLists">
          <div className="ExpenseListWrapper">
            <div className="ExpenseGroupList addition">
              <h1 className='ExpenseGroupTitle'>Bookmarked users view</h1>
              <ul className='ExpenseGroupListUl ad1'>
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

            <div className="ExpenseGroupList addition">
            <h1 className='ExpenseGroupTitle'>Create expense Group</h1>
            <h4 className='ExpenseGroupName'>Title</h4>
            <input type="text" placeholder='Enter group name' className='ExpenseGroupListInput'/>
            <h4>Upload image</h4>
            <input type="text" placeholder='Upload image' className='ExpenseGroupListInput'/>
            
              <ul className='ExpenseGroupListUl'>
                <li className='extra'>
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
                <li>
                <CreateExpenseAddUser/>
                </li>
              </ul>

              <button className='ExpenseGroupSubmit'>Submit</button>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}
