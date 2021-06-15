import React from 'react'
import { connect, useSelector } from 'react-redux';

import {sort, ZA, AZ} from '../../actions/index'


export function Filtrar(){
    const countries = useSelector(state => state.countries)

	function handleDispatchOrder(event) {
    if (event.target.value === AZ || event.target.value === ZA) {
      		sort(event.target.value, countries)
    	}
  	}
  	

  	return(
  		<div >

		  		<select  onChange={handleDispatchOrder}>
				    <option>Order Alphabetically</option>
				    <option value={AZ}>Ascendant</option>
				    <option value={ZA}>descendant</option>
				 </select>

				{/* <select className="population" onChange={handleDispatchHab}>
				    <option>Order by Habitants</option>
				    <option value={HASD}>Ascendant</option>
				    <option value={HDES}>descendant</option>
				 </select> */}
			

  		</div>
  	)
}

function mapStateToProps(state){
	return {
		countries: state.countries

	}
}

function mapDispatchToProps(dispatch){
	return {
		sort: (a, b) => dispatch(sort(a, b)),
	}}

export default connect(mapStateToProps,mapDispatchToProps)(Filtrar)