import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';



class ClassRoomForm extends React.Component{

  constructor(){
    super();
    this.state={
       classRoomName:'',
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
        fetch('http://127.0.0.1:8000/app/classrooms/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState={
       classRoomName:'',
    }
    }

  render(){
  return(
  <div className='classRoomForm'>
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
    <label for="classRoomName"> <SiIcons.SiGoogleclassroom className='icon'/> Classroom Name</label>
    <input type="text" id="classRoomName" name="classRoomName" value={this.state.classRoomName} onChange={this.changeHandler} placeholder="Enter Classroom Name.."/>

    <input type="submit" onClick={()=> {if (window.confirm('Are you sure you wish to add this item?'))this.submitForm()}} />

  </form>
</div>
  </div>
   )
 }
}
export default ClassRoomForm;