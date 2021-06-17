import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCountries, sort, populationSort} from '../../actions/index'
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

	// const [searchCountry, setSearchCountry] = useState("")
	// const [filterCountry, setFilterCountry] = useState("")
	

	const paises = countries.slice(conteoinicial, conteofinal)
	const hola=[]
	var chau=[]

	// function handleDispatchOrder(e) {
		
	// 	if (e.target.value==='AZ' || 'ZA'){
	// 	dispatch(sort(e.target.value))
	// 	}
	// 	if (e.target.value==='POP_ASC' || 'POP_DES'){
	// 		dispatch(populationSort(e.target.value))
	// 	}

	// 	  }
	
	// function handleSubmit(e) {
    //     e.preventDefault();
		
	// }


	useEffect(() => {
		dispatch(getCountries())
	}, [])

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

			 {/* <div>
				<input type="text" placeholder="search" onChange={(e)=>{setSearchCountry(e.target.value)}}></input>
			</div>  */}
			{/* <div>
				<Filtrar/>
			</div> */}
{/* <form onSubmit={handleSubmit}>
			<div>
				<div>
				
				</div>
			<select onChange={handleDispatchOrder}>
				    <option>Order Alphabetically</option>
				    <option value="AZ">Ascendant</option>
				    <option value="ZA">descendant</option>
				 </select>
			</div>
			<div>
			<select onChange={handleDispatchOrder}>
				    <option>Order Por population</option>
				    <option value="POP_ASC">Ascendant</option>
				    <option value="POP_DES">descendant</option>
				 </select>
			</div>
			<button type='submit'>submit</button>
			</form> */}

            {/* <div className={s.country}>
			
			
                {  searchCountry ? countries.filter((val)=>{
					if(val.name.toLowerCase().includes(searchCountry.toLowerCase())){
						hola.push(val)
						chau = hola.slice(conteoinicial,conteofinal)
					}
				}) :<p></p>
			}{searchCountry ? chau.map( (pais,index) => 
				<Card name={pais.name} region={pais.region} flag={pais.flag} alpha3Code={pais.alpha3Code} key={index}/>
			)
				: 
				
					paises.map( (pais,index) => 
                    <Card name={pais.name} region={pais.region} flag={pais.flag} alpha3Code={pais.alpha3Code} key={index}/>
                )
				}
            </div>
         */}   


			<div className="paginationBtns">
					<button onClick={() => setNumpag(numpag - 1)}>backward</button>
			        <button>{numpag}</button>
			        <button onClick={() => setNumpag(numpag + 1)}>forward</button>
		        </div>
 


        </div>


			
			
    )
};

