import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';

class SubjectForm extends React.Component{

  render(){
  return(
  <div className='subjectForm'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <GiIcons.GiMaterialsScience/>
           <span>Subjects</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/subject' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/subjectForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>

<div class="formContainer">
  <form>
    <label for="subjectName"> <GiIcons.GiMaterialsScience className='icon'/> Subject Name</label>
    <input type="text" id="subjectName" name="subjectName" placeholder="Subject name.." />

    <label for="subjectClassroom"> <SiIcons.SiGoogleclassroom className='icon'/> Subject Classroom</label>
    <select id="subjectClassroom" name="subjectClassroom">
      <option value="class1">class1</option>
      <option value="class2">class2</option>
      <option value="class3">class3</option>
    </select>

    <input type="submit" value="Submit" />

  </form>
</div>
  </div>
   )
 }
}
export default SubjectForm;