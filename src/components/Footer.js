import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import logo from '../images/logo.png'

function Footer (){

  return(
     <div className='footer'>
      <footer id="footerPart">
		<img src={logo} alt="Logo" width="120" height="120" className="aligning" />
		<div id="footerInfo" className="aligning">
			<p><span className="FontSize">Address:</span><br />Main street/ Damascus Gate<br />Jerusalem<br />Palestine<br /><br /><span class="FontSize">Mail Address:</span><br />Al-Quds@yahoo.com
				<br /><br />Copyrigth
				&copy; 2021 Al-Quds High School
			</p>
		</div>
        <div className="aligning" id='socialIcon'>
            <SocialIcon url="https://linkedin.com" className='socialIcon'/>
            <SocialIcon url="https://facebook.com" className='socialIcon'/>
            <SocialIcon url="https://twitter.com" className='socialIcon'/>
            <SocialIcon url="https://instagram.com" className='socialIcon'/>
        </div>
	</footer>
     </div>

  )
}

export default Footer;