import React from 'react'
import "../home/home.css";
import User from '../../components/user/User';
import "../../scrollbar.css"
export default function Home() {
  return (
    <div className='HomeContainer'>
      <div className="HomeWrapper">
         
         <div className="HomeAllUsers">
          <h1>Global users</h1>
          <ul className='HomeList'>
            <li>
            <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/> <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/> <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/> <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/>
            </li>
          </ul>
         </div>
         <div className="HomeAllUsers">
          <h1>Added preview</h1>
          <ul className='HomeList'>
            <li>
            <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/> <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/> <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/> <User user={'karthik'} className='HomeListValue'/>
            <User user={'karthik'} className='HomeListValue'/>
            </li>
          </ul>
          <button className='HomeButton'>Submit</button>
         </div>
      </div>
    </div>
  )
}
