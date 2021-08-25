import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

class UpdateTeacher extends React.Component{

  constructor(){
    super();
    this.state={
       teacherName:'',
       teacherSubjects:{}
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
        fetch('http://127.0.0.1:8000/app/teachers/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    fetchTeacher(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/app/teachers/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                teacherName:data.teacherName,
            });

            //To Fetch Subject Room
            console.log('data:',data)
            console.log('id:',data.teacherSubjects)
           fetch('http://127.0.0.1:8000/app/subjects/'+data.teacherSubjects)
           .then(response => response.json())
           .then((data)=>{
           this.setState({
           teacherSubjects:data,
      });
    });
  });
}
    componentDidMount(){
        this.fetchTeacher();
    }

  render(){
  return(
  <div className='updateTeacher'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <FaIcons.FaUserTie/>
           <span>Teachers</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/teacher' className='icon'>
           <FaIcons.FaListUl/>
           <span>List</span>
        </NavLink>
     </li>
     <li >
        <NavLink to='/teacherForm' className='icon'>
           <MdIcons.MdAddCircle />
           <span>Add</span>
        </NavLink>
     </li>
</ul>

<div className="formContainer">
  <form>
    <label> <FaIcons.FaUserTie className='icon'/> Teacher Name</label>
    <input type="text" id="teacherName" name="teacherName" value={this.state.teacherName} onChange={this.changeHandler} />

    <label> <GiIcons.GiMaterialsScience className='icon'/> Subject Name</label>
    <input type="text" id="teacherSubjects" name="teacherSubjects" value={this.state.teacherSubjects.subjectName} onChange={this.changeHandler} />

    <input type="submit" onClick={()=> {if (window.confirm('Are you sure you wish to edit this item?'))this.submitForm()}}/>

  </form>
</div>
  </div>
   )
 }
}
export default UpdateTeacher;