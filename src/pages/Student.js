import React from 'react';
import './pages.css'


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
   <table>
      <tr>
        <th>Student Name</th>
        <th>Student Birthday</th>
        <th>Student Subjects </th>
        <th>Student Grade </th>
      </tr>
      {students.map(function(student,index){
          return (
             <tr key={index}>
                <td>{student.studentName}</td>
                <td>{student.birthdate}</td>
                {subjects.map(function(subject,index){
                    if(subject.pk == student.studentSubjects){
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
             </tr>
          )
      })}
   </table>
 </div>
  );
}
}

export default Student;