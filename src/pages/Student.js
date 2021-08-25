import React from 'react';
import './pages.css'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { NavLink } from 'react-router-dom';

class Student extends React.Component{
constructor(props){
   super(props);
   this.state = {
   studentsList:[],
   items:{
   pk:null,
   studentName:'',
   birthdate:{},
   studentSubjects:{},
   studentGrade:{},
   },
   subjectsList:[],
   gradeList:[],
   }
   this.fetchStudents = this.fetchStudents.bind(this)
   this.fetchGrade = this.fetchGrade.bind(this)
   this.fetchSubject = this.fetchSubject.bind(this)
};

componentWillMount(){
this.fetchStudents()
this.fetchGrade()
this.fetchSubject()
}

deleteData(pk){
    fetch('http://127.0.0.1:8000/app/students/'+pk+'/' ,{
         method:'DELETE',
         body:JSON.stringify(this.state),
    })
    .then(response=>response)
    .then((data)=>{
       if(data){
          this.fetchStudents();
       }
    });
  }

fetchStudents(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/students/')
   .then(response => response.json())
   .then(data =>
   this.setState({studentsList:data}),
   console.log('data:',this.state.studentsList))
}
fetchGrade(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/grades/')
   .then(response => response.json())
   .then(data =>
   this.setState({gradeList:data}))
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
var students = this.state.studentsList
var grades = this.state.gradeList
var subjects = this.state.subjectsList

  return (
  <div className='student'>
  <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <FaIcons.FaUserGraduate/>
           <span>Students</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/student' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/studentForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>
   <table>
      <tr>
        <th>Student Name</th>
        <th>Student Birthday</th>
        <th>Student Subjects </th>
        <th>Student Grade </th>
        <th>Actions </th>
      </tr>
      {students.map((student,index)=>{
          return (
             <tr key={index}>
                <td>{student.studentName}</td>
                <td>{student.birthdate}</td>
                {subjects.map(function(subject,index){
                    if(subject.pk === parseInt(student.studentSubjects)){
                      return <td>{subject.subjectName}</td>
                    }else{
                      return null;
                   }
                })}
                {grades.map(function(grade,index){
                    if(grade.pk === student.studentGrade ){
                      return <td>{grade.gradeName}</td>
                    }else{
                      return null;
                   }
                })}
            <td>
            <NavLink to={'updateStudent/'+student.pk} className='editButton'>
           <AiIcons.AiFillEdit />
           <span>Edit</span>
           </NavLink>

           <button className='deleteButton' onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?'))this.deleteData(student.pk)}}>
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

export default Student;