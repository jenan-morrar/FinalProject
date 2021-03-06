import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

class TeacherForm extends React.Component{

  constructor(){
    super();
    this.state={
       teacherName:'',
       teacherSubjects:{
       subjectName:'',
       }
    }
    this.changeHandler=this.changeHandler.bind(this);
    this.submitForm=this.submitForm.bind(this);
  }

  // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        fetch('http://127.0.0.1:8000/app/teachers/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState={
       teacherName:'',
       teacherSubjects:{
       subjectName:'',
       }
    }
    }

  render(){
  return(
  <div className='TeacherForm'>
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

<div className="formContainer">
  <form>
    <label> <FaIcons.FaUserTie className='icon'/> Teacher Name</label>
    <input type="text" id="teacherName" name="teacherName" value={this.state.teacherName} onChange={this.changeHandler} placeholder="Enter Teacher Name.."/>

    <label> <GiIcons.GiMaterialsScience className='icon'/> Subject Name</label>
    <input type="text" id="teacherSubjects" name="teacherSubjects" value={this.state.teacherSubjects.subjectName} onChange={this.changeHandler} placeholder="Enter Teacher Subject.."/>

    <input type="submit" onClick={()=> {if (window.confirm('Are you sure you wish to add this item?'))this.submitForm()}} />

  </form>
</div>
  </div>
   )
 }
}
export default TeacherForm;