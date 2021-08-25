import React from 'react';
import './pages.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';
import { NavLink } from 'react-router-dom';

class Classroom extends React.Component {
constructor(props){
   super(props);
   this.state = {
   classroomList:[],
   items:{
   pk:null,
   classRoomName:'',
   },
   }
   this.fetchClassroom = this.fetchClassroom.bind(this)
};

componentWillMount(){
this.fetchClassroom()
}
 deleteData(pk){
    fetch('http://127.0.0.1:8000/app/classrooms/'+pk+'/' ,{
         method:'DELETE',
         body:JSON.stringify(this.state),
    })
    .then(response=>response)
    .then((data)=>{
       if(data){
          this.fetchClassroom();
       }
    });
  }

fetchClassroom(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/classrooms/')
   .then(response => response.json())
   .then(data =>
   this.setState({classroomList:data}))
}

render(){
var classrooms = this.state.classroomList

 return (
<div className='classroom'>
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
  <table>
  <tr>
    <th>ClassRoom Name</th>
    <th>Actions </th>
  </tr>
  {classrooms.map((classroom,index)=>{
     return (
     <tr key={index}>
          <td>{classroom.classRoomName}</td>
           <td>
           <NavLink to={'updateClassroom/'+classroom.pk} className='editButton'>
           <AiIcons.AiFillEdit />
           <span>Edit</span>
           </NavLink>
           <button className='deleteButton' onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?'))this.deleteData(classroom.pk)}}>
              <AiIcons.AiFillDelete />
              <span>Delete</span>
           </button> </td>
     </tr>
     )
   })}
</table>
    </div>
  );
}
}

export default Classroom;