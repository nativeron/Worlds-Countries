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
			<div >
				<div>
					<p className="info">{name}</p>
					<p className="info">{region}</p>
				</div>
			</div>
			</Link>
		</div>
	)
}

export default Card