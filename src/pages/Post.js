import React from 'react';
import './pages.css'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'


function Post() {
  return (
    <div className='post'>
        <div className="container2">
            <img src={image2} alt="background Image1" />
            <div className="centered">
                <p>We Have SUMMER CAMP Next month, the Registration will start at Tuesday 9/9/2021 .</p>
            </div>
        </div>
        <br />
        <br />
        <div className="container2">
            <img src={image3} alt="background Image3" />
            <div className="centered">
                <p>We Have Running Competition Next week, the Registration will start tomorrow 8/8/2021 .</p>
            </div>
        </div>
    </div>
  );
}

export default Post;