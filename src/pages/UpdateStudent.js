import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

class UpdateStudent extends React.Component{

  constructor(){
    super();
    this.state={
       studentName:'',
       birthdate:null,
       studentSubjects:{},
       studentGrade:{},
    }
    this.changeHandler=this.changeHandler.bind(this);
    this.submitForm=this.submitForm.bind(this);
  }

  // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/app/students/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    fetchStudent(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/app/students/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                studentName:data.studentName,
                birthdate:data.birthdate,
            });

            //To Fetch Grade Room
           fetch('http://127.0.0.1:8000/app/grades/'+data.studentGrade)
           .then(response => response.json())
           .then((data)=>{
           this.setState({
           studentGrade:data,
      });
    });
           //To Fetch Subject Room
           fetch('http://127.0.0.1:8000/app/subjects/'+data.studentSubjects)
           .then(response => response.json())
           .then((data)=>{
           this.setState({
           studentSubjects:data,
      });
    });
  });
}
    componentDidMount(){
        this.fetchStudent();
    }

  render(){
  return(
  <div className='updateStudent'>
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

<div class="formContainer">
  <form>
    <label for="studentName"> <FaIcons.FaUserGraduate className='icon'/> Student Name</label>
    <input type="text" id="studentName" name="studentName" value={this.state.studentName} onChange={this.changeHandler} />

    <label for="birthday"><MdIcons.MdDateRange className='icon'/>Student Birthday:</label>
    <br/>
    <input type="date" id="birthdate" name="birthdate" value={this.state.birthdate} onChange={this.changeHandler}/>
    <br/><br/>

    <label > <MdIcons.MdGrade className='icon'/> Student Grade</label>
    <input type="text" id="studentGrade" name="studentGrade" value={this.state.studentGrade.gradeName} onChange={this.changeHandler} />

    <label > <GiIcons.GiMaterialsScience className='icon'/> Student Subjects</label>
    <input type="text" id="studentSubjects" name="studentSubjects" value={this.state.studentSubjects.subjectName} onChange={this.changeHandler} />

    <input type="submit" onClick={()=> {if (window.confirm('Are you sure you wish to edit this item?'))this.submitForm()}}/>

  </form>
</div>
  </div>
   )
 }
}
export default UpdateStudent;