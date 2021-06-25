import s from './error.module.css'
import {FaArrowLeft} from "react-icons/fa"
import {Link} from 'react-router-dom'
import cow from '../../img/cow.jpg'
import burger from '../../img/burger.png'
function Errorcomp() {
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
            <p className={s.p}>Oops! It seems there are no countries on this planet, </p>
            <p className={s.p}>come back tomorrow!</p>
            </div>
           
        </div>
         <div className={s.info}>
                <img className={s.brg} alt="brg" src={burger}/>
                Did you know?
                Jupiter is so big that all the planets in the solar system could fit inside it.
            </div>
        </div>
    )
}

export default Errorcomp