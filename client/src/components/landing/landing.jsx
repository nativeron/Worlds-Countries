import React from 'react';
import './landing.css'
import { Link } from 'react-router-dom';


 function Landing() {
    return (
        <div className="ContenedorLanding"> 
        <div id="container">
          <h1>Countries App</h1>
               
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
