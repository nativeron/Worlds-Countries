import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCountry } from "../../actions";
import s from './detail.module.css'



function Detail() {
    
    const dispatch = useDispatch()
    const country = useSelector(state=> state.country)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])

    return(
        <div className={s.details}>
        <div className={s.container}>
            <h1>{country.name}</h1>
							<img className={s.flag} src={country.flag} />
							<h3>Alpha3Code: {country.alpha3Code}</h3>
							<p>Capital: {country.capital}</p>
							<p>Subregión: {country.subregion}</p>
							<p>Región: {country.region}</p>
							<p>Area: {country.area}km2 </p>
							<p>Population: {country.population} </p>

            <div>
            <h2> TOURIST ACTIVITIES </h2>
            
            { country.Activities && 
                    <div>
                        <h2> TOURIST ACTIVITIES </h2>
                        {country.Activities.map( cont => {
                            return(
                                <div >
                                    <div>
                                        <h3>Name: {cont.name}</h3>
                                        <h3>Season: {cont.season}</h3>
                                    </div>
                                    <div>
                                        <h3>Duration: {cont.duration}</h3>
                                        <h3>Difficulty: {cont.difficulty}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
                            
        </div></div>
    )

}

function mapStateToProps(state) {
    return{
        country: state.country
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getCountry: (alpha3code)=> dispatch(getCountry(alpha3code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)