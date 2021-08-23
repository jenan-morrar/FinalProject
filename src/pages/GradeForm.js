import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import { NavLink } from 'react-router-dom';



class GradeForm extends React.Component{

  render(){
  return(
  <div className='gradeForm'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <BsIcons.BsFileEarmarkText/>
           <span>Grades</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/grade' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/gradeForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>

<div class="formContainer">
  <form>
    <label for="gradeName"> <BsIcons.BsFileEarmarkText className='icon'/> Grade Name</label>
    <input type="text" id="gradeName" name="gradeName" placeholder="Grade name.." />

    <input type="submit" value="Submit" />

  </form>
</div>
  </div>
   )
 }
}
export default GradeForm;