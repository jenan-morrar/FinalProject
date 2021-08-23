import React from 'react';
import './pages.css'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';


class Subject extends React.Component {
constructor(props){
   super(props);
   this.state = {
   subjectsList:[],
   subjectItems:{
   pk:null,
   subjectName:'',
   classRoomName:{},
   },
   classroomList:[],
   }
   this.fetchSubject = this.fetchSubject.bind(this)
   this.fetchClassroom = this.fetchClassroom.bind(this)

};

componentWillMount(){
this.fetchSubject()
this.fetchClassroom()

}

fetchSubject(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/subjects/')
   .then(response => response.json())
   .then(data =>
   this.setState({subjectsList:data}),
   console.log('data:',this.state.subjectsList))
}

fetchClassroom(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/classrooms/')
   .then(response => response.json())
   .then(data =>
   this.setState({classroomList:data}))
}

render(){
var subjects = this.state.subjectsList
var classrooms = this.state.classroomList

  return (
  <div className='subject'>
        <table>
  <tr>
    <th>Subject Name</th>
    <th>Subject ClassRoom</th>
    <th>Actions</th>
  </tr>
    {subjects.map(function(subject,index){
     return (
     <tr key={index}>
          <td>{subject.subjectName}</td>
          {classrooms.map(function(classroom,index){
                 if(classroom.pk === subject.classRoomName ){
                   return <td>{classroom.classRoomName}</td>
                  }else{
                    return null;
                  }
           })}

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

export default Subject;