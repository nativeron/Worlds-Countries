import React from 'react';
import s from './landing.module.css'
import { Link } from 'react-router-dom';
import world from '../../img/world.gif';
import logo from '../../img/logolanding.png'

 function Landing() {
    return (
        <div> 
        <div className={s.container}>
          <img src={logo} width='400px'/>
               <img className={s.world}src={world} width='600px'/>
            
                <Link to={'/countries'}>
                    <button>ENTER </button>
            
            </Link>
            </div>
        </div>
        
    )
}

export default Landing;
