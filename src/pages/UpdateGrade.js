import React from 'react'
import './pages.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { NavLink } from 'react-router-dom';

class UpdateGrade extends React.Component{

  constructor(){
    super();
    this.state={
       gradeName:'',
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
        fetch('http://127.0.0.1:8000/app/grades/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    fetchGrade(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/app/grades/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                gradeName:data.gradeName,
            });
        });
    }
    componentDidMount(){
        this.fetchGrade();
    }

  render(){
  return(
  <div className='updateGrade'>
      <ul className='pagesNavbar'>
     <li >
        <NavLink to='#' className='icon'>
           <MdIcons.MdGrade/>
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

<div className="formContainer">
    <label> <MdIcons.MdGrade className='icon'/> Grade Name</label>
    <input type="text" id="gradeName" name="gradeName" value={this.state.gradeName} onChange={this.changeHandler} />

    <input type="submit"  onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?'))this.submitForm()}} />
</div>
  </div>
   )
 }
}
export default UpdateGrade;