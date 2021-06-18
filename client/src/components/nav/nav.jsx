import React from 'react';
import s from './nav.module.css'
import logo from '../../img/logolanding.png'
import { Link } from 'react-router-dom';



function Nav() {
    return (
        <div>
            <nav className={s.nav}>
                <Link to={'/'}>
                    <img alt="logo" src={logo} width='180px' />
                </Link>
                <Link to={'/countries'}>
                    <h4 className={s.h4}>Home </h4>
                </Link>
                <Link to={'/activity'}>
                    <h4 className={s.h4}>Create activity </h4>
                </Link>
                <Link to={'/about'}> 
                   <h4 className={s.h4}>About</h4>
                </Link>
               
              
              
            </nav>
        </div>
    )
}


export default Nav;