import React from 'react';
import './pages.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

 <p className='addStyle'>To Add ClassRoom
     <span> <NavLink exact={true} to='/classRoomForm' className='addIcon'>
     <MdIcons.MdAddCircleOutline />
     </NavLink></span>
  </p>
  <table>
  <tr>
    <th>ClassRoom Name</th>
    <th>Actions </th>
  </tr>
  {classrooms.map(function(classroom,index){
     return (
     <tr key={index}>
          <td>{classroom.classRoomName}</td>
           <td> <button className='editButton'>
              <AiIcons.AiFillEdit />
              <span>Edit</span>
           </button>
           <button className='deleteButton'>
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