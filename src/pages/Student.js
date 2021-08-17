import React from 'react';
import './pages.css'


function Student() {
  return (
    <div className='student'>
           <table>
  <tr>
    <th>Student Name</th>
    <th>Student Birthday</th>
    <th>Student Subjects </th>
    <th>Student Grade </th>
  </tr>
  <tr>
    <td>name</td>
    <td>birthdate</td>
    <td>subject</td>
    <td>grade</td>
  </tr>
</table>
    </div>
  );
}

export default Student;