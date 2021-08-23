import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
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
  </div>
   )
 }
}
export default SubjectForm;