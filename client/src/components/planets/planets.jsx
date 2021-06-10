import React from 'react';
import './planets.css';
import saturn from '../../img/saturn.png';
import jupiter from '../../img/jupiter.png';
import earth from '../../img/earth.png'
import { Link } from 'react-router-dom';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'



function Planets() {
    return (
        <div id="planets">
            <Link to="/error">
                <div id="saturn">
                    <div class="arrow"><FaArrowLeft/>
                </div> 
                Go to saturn
                <img class="planets" src={saturn} />
                </div>
            </Link>
              <div id="earth" >
                    <img id="tierra" class="planets" src={earth}/>
                    <div id="text">You are on earth</div> 
              </div>
            <Link to="/error">
              <div id="jupiter" >
                 Go to jupiter
                 <img class="planets" src={jupiter}/> 
            <div class="arrow"> <FaArrowRight/> </div> 
            
              </div></Link>
        
        </div>
    )
}


export default Planets;