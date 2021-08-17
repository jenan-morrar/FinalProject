import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
   const style = {
        color: '#eb5a5a'
    }
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
        <ul className='navbar-content'>
               <li>
                 <Link to='#' className='menu-bars'>
                     <FaIcons.FaBars onClick={showSidebar} />
                  </Link>
              </li>

              <li >
                 <NavLink  exact={true} to='/' className='icon'  activeStyle={style}>
                     <AiIcons.AiFillHome />
                     <span>Home</span>
                  </NavLink>
              </li>

              <li >
                  <NavLink to='/about' className='icon' activeStyle={style}>
                     <AiIcons.AiFillQuestionCircle />
                     <span>About Us</span>
                  </NavLink>
              </li>

              <li >
                 <NavLink to='/contact' className='icon'  activeStyle={style}>
                     <FaIcons.FaEnvelopeOpenText />
                     <span>Contact Us</span>
                  </NavLink>
              </li>

              <li>
                 <NavLink to='/post' className='icon'  activeStyle={style}>
                     <FaIcons.FaRegNewspaper />
                     <span>Posts</span>
                  </NavLink>
              </li>
          </ul>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
    </>
  );
}

export default Navbar;