import React from 'react';
import './landing.css'
import { Link } from 'react-router-dom';
import world from '../../img/world.gif';
import logo from '../../img/logolanding.png'

 function Landing() {
    return (
        <div className="ContenedorLanding"> 
        <div id="container">
          <img src={logo} width='400px'/>
               <img src={world} width='600px'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
                <Link to={'/countries'}>
                    <button className="BotonLanding">Ingresar </button>
            
            </Link>
            </div>
        </div>
        
    )
}

export default Landing;
