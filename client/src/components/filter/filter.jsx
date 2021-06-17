import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sort, getActivities, populationSort, filter, filtroReg} from '../../actions/index';



export default function Filtrar(){
	const dispatch = useDispatch()

	useEffect(() => {
        dispatch(getActivities())
    }, [])

	const activities = useSelector(state => state.activities)
    const countries = useSelector(state => state.countries)

	let [selectedActivity, setSelectedActivity] = useState('')
	let [actToFilterBy, setActToFilterBy] = useState([])
	let [selectedRegion, setSelectedRegion] = useState('')
	let [regToFilterBy, setRegToFilterBy] = useState([])

	function click() {
		let  filtered= []
		countries.forEach((p)=>{
			p.Activities.map(a=> a.name === selectedActivity ? 
				filtered.push(p) : null
				)
		})
		countries.forEach((p)=>{
			if (p.region === selectedRegion)filtered.push(p)
		})
		dispatch(filter(filtered))
  	}

	  function resetAct(e){
		  dispatch(filter([]))
	  }
  	
	  function handleChangeAct(e){
		  setSelectedActivity(e.target.value)
	  }

	  function handleChangeReg(e) {
		  filtroReg(e.target.value)
		  setSelectedRegion(e.target.value)
		  console.log(e.target.value)
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
  		<div >
			  <form onSubmit={handleSubmit}>
				<p>by activity</p>
				<select onChange={handleChangeAct} name="activities" value={selectedActivity}>
					<option>any</option>
					{activities ? activities.map((e)=>(
						<option value={e.name} key={e.id}>{e.name}</option>
	  				)): <option>select</option>}
				</select>
				
				<p>by region</p>
				<select onChange={handleChangeReg} name="regions" value={selectedRegion}>
					<option>select</option>
					<option>Asia</option>
					<option>Americas</option>
					<option>Europe</option>
					<option>Oceania</option>
					<option>Africa</option>
					<option>Polar</option>
					<option value={''} >none</option>
				</select>

				<div>
					<button onClick={resetAct}>erase filter</button>
					<button onClick={()=>click() }>filter</button>
				</div>
			   </form>

			   <form>
					<p>order by</p>
					<select onChange={handleOrder}>
						<option value=''>select</option>
						<option value= 'AZ'>az</option>
						<option value= 'ZA'>ZA</option>
					</select>
			   </form>
		  	
			  <form>
				  <p>order by</p>
				  <select onChange={handlePopulation}>
					  <option value=''>select</option>
					  <option value= "POP_ASC">pop asc</option>
					  <option value="POP_DES">pop des</option>
				  </select>
			  </form>

  		</div>
	  )
}