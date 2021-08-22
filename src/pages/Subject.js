import React from 'react';
import './pages.css'


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
   }
   this.fetchSubject = this.fetchSubject.bind(this)
};

componentWillMount(){
this.fetchSubject()
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
var subjects = this.state.subjectsList
  return (
    <div className='subject'>
        <table>
  <tr>
    <th>Subject Name</th>
    <th>Subject ClassRoom</th>
  </tr>
    {subjects.map(function(subject,index){
     return (
     <tr key={index}>
          <td>{subject.subjectName}</td>
          <td>{subject.classRoomName}</td>
     </tr>
     )
   })}
</table>
    </div>
  );
  }
}

export default Subject;