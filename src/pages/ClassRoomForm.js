import React from 'react'



class StudentForm extends React.Component{

  render(){
  return(
  <div className='studentForm'>
    <h1>Add Grade</h1>
    <form  method="post">
            <label>Grade Name:</label>
            <input type="text" name="GradeName" PLACEHOLDER="Enter Grade Name" />
            <input type="submit" name="AddGrade" value="Add" className="button" />
    </form>
  </div>
   )
 }
}
export default StudentForm;