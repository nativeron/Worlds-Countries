import React from 'react';
import s from './planets.module.css';
import saturn from '../../img/saturn.png';
import jupiter from '../../img/jupiter.png';
import earth from '../../img/earth.png'
import { Link } from 'react-router-dom';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'



function Planets() {
    return (
        <div id={s.planets}>
            <Link to="/errorr">
                <div id={s.saturn}> 
                <img className={s.planets} src={saturn} />
                Go to saturn
               
                <div ><FaArrowLeft/>
                </div> 
                </div>
            </Link>
              <div id={s.earth} >
                    <img id={s.tierra} className={s.planets} src={earth}/>
                    <div id={s.text}>You are on earth</div> 
              </div>
            <Link to="/error">
              <div id={s.jupiter} >
                 Go to jupiter
                 <img className={s.planets} src={jupiter}/> 
            <div> <FaArrowRight/> </div> 
            
              </div></Link>
        
        </div>
    )
}


export default Planets;