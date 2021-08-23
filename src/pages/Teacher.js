import React from 'react';
import './pages.css'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';


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

fetchTeacher(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/teachers/')
   .then(response => response.json())
   .then(data =>
   this.setState({TeacherList:data}),
   console.log('data:',this.state.TeacherList))
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
      <table>
        <tr>
          <th>Teacher Name</th>
          <th>Teacher Subjects</th>
          <th> Actions</th>
        </tr>
      {teachers.map(function(teacher,index){
          return (
             <tr key={index}>
                <td>{teacher.teacherName}</td>
                {subjects.map(function(subject,index){
                     if(subject.pk == teacher.teacherSubjects){
                        return <td>{subject.subjectName}</td>
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

export default Teacher;