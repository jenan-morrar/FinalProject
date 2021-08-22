import React from 'react';
import './pages.css'


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
   }
   this.fetchTask = this.fetchTask.bind(this)
};

componentWillMount(){
this.fetchTask()
}

fetchTask(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/teachers/')
   .then(response => response.json())
   .then(data =>
   this.setState({TeacherList:data}),
   console.log('data:',this.state.TeacherList))
}
render(){
 var teachers = this.state.TeacherList
  return (
    <div className='teacher'>
          <table>
  <tr>
    <th>Teacher Name</th>
    <th>Teacher Subjects</th>
  </tr>
  {teachers.map(function(teacher,index){
     return (
     <tr key={index}>
          <td>{teacher.teacherName}</td>
          <td>{teacher.teacherSubjects}<br /></td>
     </tr>
     )
   })}
</table>
    </div>
  );
  }
}

export default Teacher;