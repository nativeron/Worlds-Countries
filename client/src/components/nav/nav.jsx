import React from 'react';
import s from './nav.module.css'
import logo from '../../img/logolanding.png'
import { Link } from 'react-router-dom';
import world from '../../img/world.gif'




function Nav() {
    return (
        <div>
            <nav className={s.nav}>
                <Link to={'/'}>
                    <img alt="logo" src={logo} width='180px' />
                    <img alt="world" src={world} width='140px' />
                </Link> 
                
                <Link to={'/countries'}>
                    <h4 className={s.h4}>HOME </h4>
                </Link>
                <Link to={'/activity'}>
                    <h4 className={s.h4}>CREATE ACTIVITY</h4>
                </Link>
                <Link to={'/about'}> 
                   <h4 className={s.h4}>ABOUT</h4>
                </Link>
               
              
              
            </nav>
        </div>
    )
}


export default Nav;