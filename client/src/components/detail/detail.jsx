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

    useEffect(() => { //despues de renderizarse hace
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
							<p><span>alpha3Code:</span> {country.alpha3Code}</p>
							<p><span>Capital:</span> {country.capital}</p>
							<p><span>Subregión:</span> {country.subregion}</p>
							<p><span>Región:</span> {country.region}</p>
							<p><span>Area: </span>{country.area}km2 </p>
							<p><span>Population:</span> {country.population} </p>

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