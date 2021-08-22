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
   }
   this.fetchTask = this.fetchStudents.bind(this)

};

componentWillMount(){
this.fetchStudents()
}

fetchStudents(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/students/')
   .then(response => response.json())
   .then(data =>
   this.setState({studentsList:data}),
   console.log('data:',this.state.studentsList))
}

render(){
var students = this.state.studentsList
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
          <td>{student.studentSubjects}<br/></td>
          <td>{student.studentGrade}</td>
     </tr>
     )
   })}
</table>
    </div>
  );
}
}

export default Student;