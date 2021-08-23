import React from 'react';
import './pages.css'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { NavLink } from 'react-router-dom';

class Teacher extends React.Component {
constructor(props){
   super(props);
   this.state = {
   TeacherList:[],
   items:{
   pk:null,
   teacherName:'',
   teacherSubjects:{},
   },
   subjectsList:[],
   }
   this.fetchTeacher = this.fetchTeacher.bind(this)
   this.fetchSubject = this.fetchSubject.bind(this)
};

componentWillMount(){
this.fetchTeacher()
this.fetchSubject()
}

 deleteData(pk){
    fetch('http://127.0.0.1:8000/app/teachers/'+pk+'/' ,{
         method:'DELETE',
         body:JSON.stringify(this.state),
    })
    .then(response=>response)
    .then((data)=>{
       if(data){
          this.fetchTeacher();
       }
    });
  }

fetchTeacher(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/teachers/')
   .then(response => response.json())
   .then(data =>
   this.setState({TeacherList:data}))
}
fetchSubject(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/subjects/')
   .then(response => response.json())
   .then(data =>
   this.setState({subjectsList:data}),
   console.log('data:',this.state.subjectsList))
}
render(){
 var teachers = this.state.TeacherList
 var subjects = this.state.subjectsList

  return (
    <div className='teacher'>

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
        <NavLink  to='/teacherForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>
      <table>
        <tr>
          <th>Teacher Name</th>
          <th>Teacher Subjects</th>
          <th> Actions</th>
        </tr>
      {teachers.map((teacher,index)=>{
          return (
             <tr key={index}>
                <td>{teacher.teacherName}</td>
                {subjects.map(function(subject,index){
                     if(subject.pk === parseInt(teacher.teacherSubjects)){
                        return <td>{subject.subjectName}</td>
                     }else{
                        return null;
                     }
                })}

                <td> <button className='editButton'>
              <AiIcons.AiFillEdit />
              <span>Edit</span>
           </button>
           <button className='deleteButton' onClick={()=>this.deleteData(teacher.pk)}>
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

export default Teacher;