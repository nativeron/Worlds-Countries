import React from 'react';
import { Link } from 'react-router-dom';
import s from './card.module.css'

export function Card({flag, name, region, alpha3Code}) {
	return (
		<div class={s.card}>
			
			<Link to={`/countries/${alpha3Code}`}>
			<div className="imgn">
				<img alt="flag" src={flag}className={s.flag}/>
			</div>
			</Link>
			<div >
				<div className="name">
					{name}
				<div className={s.region}>{region}</div>
				</div>
			</div>
			
		</div>
	)
}

export default Card