import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Subject from './pages/Subject';
import Classroom from './pages/Classroom';
import Grade from './pages/Grade';
import GradeForm from './pages/GradeForm';
import ClassRoomForm from './pages/ClassRoomForm';
import SubjectForm from './pages/SubjectForm';
import TeacherForm from './pages/TeacherForm';
import StudentForm from './pages/StudentForm';
import UpdateGrade from './pages/UpdateGrade';
import UpdateClassroom from './pages/UpdateClassroom';
import UpdateSubject from './pages/UpdateSubject';
import UpdateTeacher from './pages/UpdateTeacher';
import UpdateStudent from './pages/UpdateStudent';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about'  component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path='/post'  component={Post} />
          <Route path='/student'  component={Student} />
          <Route path='/teacher'  component={Teacher} />
          <Route path='/subject'  component={Subject} />
          <Route path='/classroom'  component={Classroom} />
          <Route path='/grade'  component={Grade} />
          <Route path='/gradeForm'  component={GradeForm} />
          <Route path='/classRoomForm'  component={ClassRoomForm} />
          <Route path='/subjectForm'  component={SubjectForm} />
          <Route path='/teacherForm'  component={TeacherForm} />
          <Route path='/studentForm'  component={StudentForm} />
          <Route path='/updateGrade/:id'  component={UpdateGrade} />
          <Route path='/updateClassroom/:id'  component={UpdateClassroom} />
          <Route path='/updateSubject/:id'  component={UpdateSubject} />
          <Route path='/updateTeacher/:id'  component={UpdateTeacher} />
          <Route path='/updateStudent/:id'  component={UpdateStudent} />

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
