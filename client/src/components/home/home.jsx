import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries} from '../../actions/index'
import Card from '../card/card';
import s from './home.module.css'
import SearchBar from '../search/search';
import Filtrar from '../filter/filter'
import { BiLeftArrow } from 'react-icons/bi'
import {BiRightArrow } from 'react-icons/bi'

export function Home({input, setInput}) {

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
			<div className={s.search}>
				<SearchBar setInput={setInput} input={input}/>
				<Filtrar/>
			</div>
			<div className={s.pag}>
			<div><button onClick={() => setNumpag(numpag - 1)}><BiLeftArrow/></button></div>
			<div className={s.cards}>
				{
				filteredcountries.length > 0 ? displaycountries(filteredcountries) : displaycountries(countries)
				}
			</div>
			<div><button onClick={() => setNumpag(numpag + 1)}><BiRightArrow/></button></div>
			<div className="paginationBtns">
			</div>	
					
			        
			        
		        </div>
 
        </div>
    )
};

