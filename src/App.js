import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Subject from './pages/Subject';
import Classroom from './pages/Classroom';
import Grade from './pages/Grade';


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
          <Route path='/dashboard'  component={Dashboard} />
          <Route path='/student'  component={Student} />
          <Route path='/teacher'  component={Teacher} />
          <Route path='/subject'  component={Subject} />
          <Route path='/classroom'  component={Classroom} />
          <Route path='/grade'  component={Grade} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
