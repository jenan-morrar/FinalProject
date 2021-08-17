import React from 'react';
import './Header.css';
import logo from '../images/logo.png'

function Header (){

  return(
     <div className='header'>
    <header class="headerpart">
        <div class="container" id="header">
            <div class="image">
                <img src={logo} alt="Logo" height="200" width="200" />
            </div>
            <div class="text">
                <p id="headerInfo">Al-QUDS <br /> HIGH SCHOOL </p>
            </div>
        </div>
    </header>
</div>

  )
}

export default Header;