import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries} from '../../actions/index'
import Card from '../card/card';
import s from './home.module.css'
import SearchBar from '../search/search';
import Filtrar from '../filter/filter'
import {FaArrowLeft} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import loading from '../../img/alien5.png'
import Footer from '../footer/footer';


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
		}) : <img alt="loading" src={loading}/> 

	}

	return(

		
        <div className={s.container}>
			
			<div className={s.search}>
				<SearchBar setInput={setInput} input={input}/>
				<Filtrar/>
			</div>
			<div className={s.pag}>
			<div>
				{
				numpag===1 ? <button className={s.buttond} disable={true}><FaArrowLeft className={s.arrow}/></button> :
				<button className={s.button} onClick={() => setNumpag(numpag - 1)}><FaArrowLeft className={s.arrow}/></button>
			}
				
			</div>

			<div className={s.cards}>
			
				{
				filteredcountries.length > 0 ? displaycountries(filteredcountries) : 
				displaycountries(countries)
				}
			</div>
			<div>
				{console.log(displaycountries(countries).length)}
				{displaycountries(countries).length<10 || numpag===25? <button className={s.buttond} disabled={true}><FaArrowRight className={s.arrow}/></button>:
				<button className={s.button} onClick={() => setNumpag(numpag + 1)}><FaArrowRight className={s.arrow}/></button>
				}
				
				
			</div>
					        		        
		  </div>
				<Footer/>
        </div>
    )
};

