import React from 'react';
import './pages.css'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

class Grade extends React.Component {

constructor(props){
   super(props);
   this.state = {
   gradeList:[],
   items:{
   pk:null,
   gradeName:'',
   },
   }
   this.fetchGrade = this.fetchGrade.bind(this)
};

componentWillMount(){
this.fetchGrade()
}

fetchGrade(){
   console.log('Fetching..')
   fetch('http://127.0.0.1:8000/app/grades/')
   .then(response => response.json())
   .then(data =>
   this.setState({gradeList:data}))
}
render(){
var grades = this.state.gradeList
  return (
    <div className='grade'>
  <table>
  <tr>
    <th>Grade Name</th>
    <th>Actions</th>
  </tr>
   {grades.map(function(grade,index){
     return (
     <tr key={index}>
          <td>{grade.gradeName}</td>

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

export default Grade;