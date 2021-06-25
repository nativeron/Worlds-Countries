import s from './errorr.module.css'
import {FaArrowLeft} from "react-icons/fa"
import {Link} from 'react-router-dom'
import cow from '../../img/giphy.gif'
import beach from '../../img/beach.png'
function Errorcompo() {
    return(
        <div>
        <div className={s.j}>
            <Link to='/countries'>
            <div>
            <FaArrowLeft className={s.arrow}/>
            </div>
            </Link>
        
            <div className={s.container}>
                <img className={s.cow} alt="cow" src={cow}/>
            <p className={s.p}>there are no countries on this planet ... yet</p>
        
            </div>
           
        </div>
         <div className={s.info}>
                
                Did you know?
                Saturn is a planet that could float on water due to its low density.
        
            </div>
        </div>
    )
}

export default Errorcompo