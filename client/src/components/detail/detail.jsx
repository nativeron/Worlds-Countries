import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCountry } from "../../actions";
import s from './detail.module.css'
import {FaArrowLeft} from "react-icons/fa"
import {Link} from 'react-router-dom'



function Detail() {
    
    const dispatch = useDispatch()
    const country = useSelector(state=> state.country)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])

    return(
        <div className={s.details}>
            <div className={s.back}>
            <Link to={'/countries'}>
              <FaArrowLeft className={s.arrow}/>             
            </Link>
          </div>
        <div className={s.container}>
            <h1>{country.name}</h1>
							<img alt="flag" className={s.flag} src={country.flag} />
							<h3>Alpha3Code: {country.alpha3Code}</h3>
							<p>Capital: {country.capital}</p>
							<p>Subregión: {country.subregion}</p>
							<p>Región: {country.region}</p>
							<p>Area: {country.area}km2 </p>
							<p>Population: {country.population} </p>

            <div>
                       
            { country.Activities && 
                    <div>
                        <h2> TOURIST ACTIVITIES </h2>
                        {country.Activities.length ? country.Activities.map( cont => {
                            return(
                                <div >
                                    <div>
                                        <h3>{cont.name}</h3>
                                        <p>Season: {cont.season}</p>
                                    </div>
                                    <div>
                                        <p>Duration: {cont.duration} min</p>
                                        <p>Difficulty: {cont.difficulty}</p>
                                    </div>
                                </div>
                            )
                        }) : <p>You didn't add activities in this country</p>}
                    </div>
                }
            </div>
                            
        </div></div>
    )

}



export default Detail