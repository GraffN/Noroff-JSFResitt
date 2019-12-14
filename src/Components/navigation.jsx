import React from 'react';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <div>
    <div className='[ navigation ]'>
        <div className='[  ][ navigation__top ]'>
        </div>
        
        <div className='[  ][ navigation__bot ]'>
        </div>

        <div className='[  ][ navigation__skew ]'>
    
        </div>
        <Link to='/' className='navigation__links'>Home</Link>
        <Link to='/Contact' className='navigation__links'>Contact</Link>
    </div>
    
    </div>

    
  );
}

export default Navigation;
