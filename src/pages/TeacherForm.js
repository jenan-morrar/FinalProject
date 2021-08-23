import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import { NavLink } from 'react-router-dom';



class TeacherForm extends React.Component{

  render(){
  return(
  <div className='teacherForm'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <FaIcons.FaUserTie/>
           <span>Teachers</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/teacher' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/teacherForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>

<div class="formContainer">
  <form>
    <label for="teacherName"> <FaIcons.FaUserTie className='icon'/> Teacher Name</label>
    <input type="text" id="teacherName" name="teacherName" placeholder="Teacher name.." />

    <label for="teacherSubject"> <GiIcons.GiMaterialsScience className='icon'/> Teacher Subjects</label>
    <select id="teacherSubject" name="teacherSubject">
      <option value="sub1">sub1</option>
      <option value="sub2">sub2</option>
      <option value="sun3">sub3</option>
    </select>

    <input type="submit" value="Submit" />

  </form>
</div>
  </div>
   )
 }
}
export default TeacherForm;