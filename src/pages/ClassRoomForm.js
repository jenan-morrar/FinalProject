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

<div class="formContainer">
  <form>
    <label for="classroomName"> <SiIcons.SiGoogleclassroom className='icon'/> Classroom Name</label>
    <input type="text" id="classroomName" name="classroomName" placeholder="Classroom name.." />

    <input type="submit" value="Submit" />

  </form>
</div>
  </div>
   )
 }
}
export default ClassRoomForm;