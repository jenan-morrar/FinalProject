import React from 'react';
import './pages.css';
import image1 from '../images/image1.jpg';


function Home() {
  return (
    <div className='home'>
        <div className="container2">
            <img src={image1} alt="background Image1" id="backgroundImage" />
            <div className="centered">
                <p>Education is not the learning of facts, but tranning of the mind to think.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;