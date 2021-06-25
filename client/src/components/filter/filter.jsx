import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sort, getActivities, populationSort, filter, filtroReg} from '../../actions/index';
import s from './filter.module.css'


export default function Filtrar({numpag, setNumpag, input, setInput}){
	const dispatch = useDispatch()

	useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])        

	const activities = useSelector(state => state.activities)
    const countries = useSelector(state => state.countries)

	let [selectedActivity, setSelectedActivity] = useState('')
	let [actToFilterBy, setActToFilterBy] = useState([])

	let [selectedRegion, setSelectedRegion] = useState('')
	let [regToFilterBy, setRegToFilterBy] = useState([])

	// function click() {
	// 	let  filtered= []
	// 	countries.forEach((p)=>{
	// 		p.Activities.map(a=> a.name === selectedActivity ? 
	// 			filtered.push(p) : null
	// 			)
	// 	})
	// 	countries.forEach((p)=>{
	// 		if (p.region === selectedRegion)filtered.push(p)
	// 	})
	// 	dispatch(filter(filtered))
  	// }

	  function reset(e){
		  setNumpag(1)
		  setInput('')
		  dispatch(filter([]))
	  }
  	
	  function handleChangeAct(e){
		setNumpag(1)
		  setSelectedActivity(e.target.value)
		  let  filtered= []
		countries.forEach((p)=>{
			p.Activities.map(a=> a.name === selectedActivity ? 
				filtered.push(p) : null
				)
		})
		dispatch(filter(filtered))
	  }

	  function handleChangeReg(e) {
		  setNumpag(1)
		  dispatch(filtroReg(e.target.value))
		  setSelectedRegion(e.target.value)
	  }

	  function handleSubmit(e){
		  e.preventDefault()
		  setRegToFilterBy([...regToFilterBy, selectedRegion])
		  setActToFilterBy([...actToFilterBy, selectedActivity])
	  }

	  function handleOrder(e){
		  dispatch(sort(e.target.value, countries)) 
		  
	  }
	  
	  function handlePopulation(e){
		  
		  dispatch(populationSort(e.target.value, countries)) 
	  }

  	return(
  		<div className={s.container} > 
		  <div className={s.filter}>
			  <form  onSubmit={handleSubmit}>

				<select className={s.select} onChange={handleChangeAct} name="activities" value={selectedActivity}>
					<option> by activity</option>
				
					{ !activities.message ?  activities.map((e)=>(
						<option value={e.name} key={e.id}>{e.name}</option>
	  				)) : <p></p> }
				</select>
			
				<select className={s.select} onChange={handleChangeReg} name="regions" value={selectedRegion}>
					<option value="a" selected> by continent</option>
					<option>Asia</option>
					<option>Americas</option>
					<option>Europe</option>
					<option>Oceania</option>
					<option>Africa</option>
					<option>Polar</option>
					<option>None</option>
				
				</select>

				<div>
					 <button  className={s.button} onClick={reset}>erase filter</button>
					{/*<button className={s.button} onClick={()=>click() }>filter</button> */}
				</div>
			   </form>
			</div>	

			   <form >
					<select className={s.az} onChange={handleOrder}>
						<option value=''>by alphabet</option>
						<option value= 'AZ'>ascendant</option>
						<option value= 'ZA'>descendant</option>
					</select>
			   
				  
				  <select className={s.az} onChange={handlePopulation}>
					  <option value=''>by population</option>
					  <option value= "POP_ASC">ascendant</option>
					  <option value="POP_DES">descendant</option>
				  </select>
			  </form>

  		</div>
	  )
}