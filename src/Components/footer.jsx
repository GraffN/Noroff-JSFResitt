import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
	return (
		
    	<div className='footer'>
			<div className='footer__content'>
				<div className='footer__title'>Pokedex</div>
				<div className='footer__links'>
				<Link to='/' className='footer__links--size'>Home</Link>
				<Link to='/Contact' className='footer__links--size'>Contact</Link>
				</div>
			</div>
			

			<div className='footer__copyrights'><p>2019 Jørgen Graff</p></div>

		</div>
		

    
  );
}

export default Footer;
