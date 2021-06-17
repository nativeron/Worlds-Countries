import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sort, getActivities, populationSort, filter} from '../../actions/index';



export default function Filtrar(){
	const dispatch = useDispatch()

	useEffect(() => {
        dispatch(getActivities())
    }, [])

	const activities = useSelector(state => state.activities)
    const countries = useSelector(state => state.countries)

	let [selectedActivity, setSelectedActivity] = useState('')
	let [actToFilterBy, setActToFilterBy] = useState([])

	function click() {
		let  filtered= []
		countries.forEach((p)=>{
			p.Activities.map(a=> a.name === selectedActivity ? 
				filtered.push(p) : null
				)
		})
		dispatch(filter(filtered))
  	}

	  function resetAct(e){
		  dispatch(filter([]))
	  }
  	
	  function handleChangeAct(e){
		  setSelectedActivity(e.target.value)
	  }

	  function handleSubmit(e){
		  e.preventDefault()
		  setActToFilterBy([...actToFilterBy, selectedActivity])
	  }

	  function handleOrder(e){
		  dispatch(sort(e.target.value))
	  }
	  function handlePopulation(e){
		  dispatch(populationSort(e.target.value))
	  }

  	return(
  		<div >
			  <form onSubmit={handleSubmit}>
				<p>by activity</p>
				<select onChange={handleChangeAct} name="activities" value={selectedActivity}>
					<option>select</option>
					{activities.map((e)=>(
						<option value={e.name} key={e.id}>{e.name}</option>
	  				))}
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