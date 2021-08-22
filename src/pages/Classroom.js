import React from 'react';
import './pages.css'


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
   this.fetchTask = this.fetchTask.bind(this)
};

componentWillMount(){
this.fetchTask()
}

fetchTask(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/classrooms/')
   .then(response => response.json())
   .then(data =>
   this.setState({classroomList:data}))
}

render(){
var classrooms = this.state.classroomList
console.log('room',classrooms)
  return (
    <div className='classroom'>
<table>
  <tr>
    <th>ClassRoom Name</th>
  </tr>
  {classrooms.map(function(classroom,index){
     return (
     <tr key={index}>
          <td>{classroom.classRoomName}</td>
     </tr>
     )
   })}
</table>
    </div>
  );
}
}

export default Classroom;