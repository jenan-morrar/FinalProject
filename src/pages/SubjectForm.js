import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';

class SubjectForm extends React.Component{

  constructor(){
    super();
    this.state={
       subjectName:'',
       classRoomName:{
       classRoomName:'',
       },
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
        fetch('http://127.0.0.1:8000/app/subjects/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState={
       subjectName:'',
       classRoomName:{
       classRoomName:'',
       },
    }
    }

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

<div className="formContainer">
  <form>
    <label> <GiIcons.GiMaterialsScience className='icon'/> Subject Name</label>
    <input type="text" id="subjectName" name="subjectName" value={this.state.subjectName} onChange={this.changeHandler} placeholder="Enter Subject Name.." />

    <label> <SiIcons.SiGoogleclassroom className='icon'/> Subject Classroom</label>
    <input type="text" id="classRoomName" name="classRoomName" value={this.state.classRoomName.classRoomName} onChange={this.changeHandler} placeholder="Enter Subject Classroom.."/>

    <input type="submit" onClick={()=> {if (window.confirm('Are you sure you wish to add this item?'))this.submitForm()}} />

  </form>
</div>
  </div>
   )
 }
}
export default SubjectForm;