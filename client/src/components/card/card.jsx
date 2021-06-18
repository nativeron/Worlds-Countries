import React from 'react';
import { Link } from 'react-router-dom';
import s from './card.module.css'

export function Card({flag, name, region, alpha3Code}) {
	return (
		<div class={s.card}>
			<div className="imgn">
				<img alt="flag" src={flag}className={s.flag}/>
			
			<div className="datos">
				<div className="nombre">
					<h1>{name}</h1>
					<h2>{region}</h2>
				</div>
				<Link to={`/countries/${alpha3Code}`}>
					<button className="detail">Country Detail</button>
				</Link>
			</div>
		</div></div>
	)
}

export default Card