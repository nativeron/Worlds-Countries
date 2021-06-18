import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries} from '../../actions/index'
import Card from '../card/card';
import s from './pagination.module.css'
import SearchBar from '../search/search';
import Filtrar from '../filter/filter'

export function Pagination({input, setInput}) {

	const dispatch = useDispatch()
	const countries = useSelector(state => state.countries)
	const filteredcountries = useSelector(state => state.filteredcountries)

	
	const [numpag, setNumpag] = useState(1)
	const group = 10
	const conteofinal = numpag * group
	const conteoinicial= conteofinal - group


	useEffect(() => {
		dispatch(getCountries())
	}, [dispatch])


	function displaycountries(array) {

		let countriestodisplay = array.filter((p)=> p.name.toLowerCase().includes(input.toLowerCase())).slice(conteoinicial,conteofinal)

		return countriestodisplay.length ? countriestodisplay.map((pais)=>{
			return(
				<Card name={pais.name} region={pais.region} flag={pais.flag} alpha3Code={pais.alpha3Code}/>
			)
		}) : <p>nohay</p>

	}

	return(
        <div className={s.container}>
			<div>
				<SearchBar setInput={setInput} input={input}/>
				<Filtrar/>
			</div>
			<div>
				{
				filteredcountries.length > 0 ? displaycountries(filteredcountries) : displaycountries(countries)
				}
			</div>

			<div className="paginationBtns">
				
					<button onClick={() => setNumpag(numpag - 1)}>backward</button>
			        <button>{numpag}</button>
			        <button onClick={() => setNumpag(numpag + 1)}>forward</button>
		        </div>
 
        </div>
    )
};

