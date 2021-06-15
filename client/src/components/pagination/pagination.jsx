import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCountries, sort, populationSort} from '../../actions/index'
import Card from '../card/card';
import s from './pagination.module.css'
//import Filtrar from '../filter/filter'

export function Pagination() {
	
	const dispatch = useDispatch()
	const countries = useSelector(state => state.countries)

	const [numpag, setNumpag] = useState(1)
	const group = 10
	const conteofinal = numpag * group
	const conteoinicial= conteofinal - group

	const [searchCountry, setSearchCountry] = useState("")
	const [filtrados, setfiltrados] = useState("")

	const paises = countries.slice(conteoinicial, conteofinal)
	const hola=[]
	var chau=[]

	function handleDispatchOrder(e) {
		
		if (e.target.value==='AZ' || 'ZA'){
		dispatch(sort(e.target.value))
		console.log(sort(e.target.value))
		}
		if (e.target.value==='POP_ASC' || 'POP_DES'){
			dispatch(populationSort(e.target.value))
		}

		  }
	
	
	function handleSubmit(e) {
        e.preventDefault();
		
		setSearchCountry(e.target.value)

	}


	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return(
		

        <div className={s.container}>
			
			<div>
				<input type="text" placeholder="search" onChange={(e)=>{setSearchCountry(e.target.value)}}></input>
			</div>
			{/* <div>
				<Filtrar/>
			</div> */}
<form onSubmit={handleSubmit}>
			<div>
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
			<button onChange={(e)=>{setSearchCountry(e.target.value)}} type='submit'>submit</button>
			</form>

            <div className={s.country}>
				{
					filtrados ? <p>si hay</p> : <p>no hay</p>
				}
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
            


			<div className="paginationBtns">
					<button onClick={() => setNumpag(numpag - 1)}>backward</button>
			        <button>{numpag}</button>
			        <button onClick={() => setNumpag(numpag + 1)}>forward</button>
		        </div>



        </div>


			
			
    )
};



function mapStateToProps(state) {
	return {
		countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getCountries: () => dispatch(getCountries()),
		sort: (a, b) => dispatch(sort(a, b)),
		populationSort: (a,b) => dispatch(populationSort(a,b))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)