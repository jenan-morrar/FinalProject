import React from 'react';
import './pages.css'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { NavLink } from 'react-router-dom';

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

 deleteData(pk){
    fetch('http://127.0.0.1:8000/app/grades/'+pk+'/' ,{
         method:'DELETE',
         body:JSON.stringify(this.state),
    })
    .then(response=>response)
    .then((data)=>{
       if(data){
          this.fetchGrade();
       }
    });
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

     <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <MdIcons.MdGrade />
           <span>Grades</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/grade' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/gradeForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>

  <table>
  <tr>
    <th>Grade Name</th>
    <th>Actions</th>
  </tr>
   {grades.map((grade,index)=>{
     return (
     <tr key={index}>
          <td>{grade.gradeName}</td>

          <td>
           <NavLink to={'updateGrade/'+grade.pk} className='editButton'>
           <AiIcons.AiFillEdit />
           <span>Edit</span>
           </NavLink>
           <button className='deleteButton' onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?')) this.deleteData(grade.pk)}}>
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