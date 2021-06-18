import React from 'react';
import s from './landing.module.css'
import { Link } from 'react-router-dom';
import world from '../../img/world.gif';
import logo from '../../img/logolanding.png'

 function Landing() {
    return (
        <div> 
        <div className={s.container}>
          <img alt="logo" src={logo} width='400px'/>
               <img alt="world" className={s.world}src={world} width='600px'/>
            
                <Link to={'/countries'}>
                    <button className={s.button} >ENTER </button>
            
            </Link>
            </div>
        </div>
        
    )
}

export default Landing;
