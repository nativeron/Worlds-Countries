import React from 'react'
import s from './footer.module.css';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import extr from '../../img/extr.png'

function Footer() {
    return (
        <footer className={s.container}>
                <div>
                    <a href="https://www.linkedin.com/in/natalia-veron/" target="_blank"><AiFillLinkedin className={s.icon}/></a>
               </div>
               <div>
                   <a href="https://github.com/nativeron" target="_blank"><AiFillGithub className={s.icon}/></a>
                   </div>
                <div>
                    <img src={extr} width='100'/>
                </div>
        </footer>
    )
}

export default Footer