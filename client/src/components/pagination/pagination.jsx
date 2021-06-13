import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCountries} from '../../actions/index'
import Card from '../card/card';
import s from './pagination.module.css'

export function Pagination() {
	
	const dispatch = useDispatch()
	const countries = useSelector(state => state.countries)

	const [numpag, setNumpag] = useState(1)
	const group = 10
	const conteofinal = numpag * group
	const conteoinicial= conteofinal - group

	const [searchCountry, setSearchCountry] = useState("")
	const paises = countries.slice(conteoinicial, conteofinal)
	const hola=[]
	var chau=[]
	
	
	useEffect(() => {
		dispatch(getCountries())
	}, [])

	return(
		

        <div className={s.container}>
			<div>
				<input type="text" placeholder="search" onChange={(e)=>{setSearchCountry(e.target.value)}}></input>
			</div>
            <div className={s.country}>
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)