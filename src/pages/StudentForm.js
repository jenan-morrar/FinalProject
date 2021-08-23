import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

class StudentForm extends React.Component{

  render(){
  return(
  <div className='studentForm'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <FaIcons.FaUserGraduate/>
           <span>Students</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/student' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/studentForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>

<div class="formContainer">
  <form>
    <label for="studentName"> <FaIcons.FaUserGraduate className='icon'/> Student Name</label>
    <input type="text" id="studentName" name="studentName" placeholder="Student name.." />

    <label for="birthday"><MdIcons.MdDateRange className='icon'/>Student Birthday:</label>
    <br/>
    <input type="date" id="birthday" name="birthday"/>
    <br/><br/>

    <label for="studentGrade"> <MdIcons.MdGrade className='icon'/> Student Grade</label>
    <select id="studentGrade" name="studentGrade">
      <option value="grade1">grade1</option>
      <option value="grade2">grade2</option>
      <option value="grade3">grade3</option>
    </select>

    <label for="studentSubject"> <GiIcons.GiMaterialsScience className='icon'/> Student Subjects</label>
    <select id="studentSubject" name="studentSubject">
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
export default StudentForm;