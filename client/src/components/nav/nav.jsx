import React from 'react';
import './nav.css'
import logo from '../../img/logonav.png'
import { Link } from 'react-router-dom';



function Nav() {
    return (
        <div>
            <nav className="Nav">
                <Link to={'/'}>
                    <img src={logo} width='180px' />
                </Link>
                <Link to={'/activity'}>
                    <h4 className='H3'>Create Activity </h4>
                </Link>
                <Link to={'/about'}> 
                   <h4>About</h4>
                </Link>
               
              
              
            </nav>
        </div>
    )
}


export default Nav;