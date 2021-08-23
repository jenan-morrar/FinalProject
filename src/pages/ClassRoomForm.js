import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';



class ClassRoomForm extends React.Component{

  render(){
  return(
  <div className='classroomForm'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <SiIcons.SiGoogleclassroom/>
           <span>ClassRooms</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/classroom' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/classroomForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>
  </div>
   )
 }
}
export default ClassRoomForm;