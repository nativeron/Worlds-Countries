import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../../actions/index'
import s from './form.module.css'
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

export default function Form() {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)

    const [errors, setErrors] = useState({}); 
    const [input, setInput] = useState({ 
      name: '',             
      difficulty: '',       
      season: '',
      duration: '',
      country: [],
    });                      
                              
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    const handleInputChange = function(e) {
      setInput({
        ...input, 
        [e.target.name]: e.target.value
      });
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }

    const handlerSubmit = async (e) =>{
        e.preventDefault()
        if (!errors.name){
        await axios.post('http://localhost:3001/activity', input)
        .then (res=>{
            setInput({
                name:'',
                difficulty:'',
                season:'',
                duration:'',
                country:[]
            })
            alert('activity was added successfully');
        })
        .catch(res=> alert('something went wrong'))}
        else{
            alert('something went wrong')
        }
    }

    function handleSelect(e) {
       setInput((prev) => ({ ...prev, country: [...prev.country, e.target.value] }))
    }

    function deleteCountry(e, c) {
        setInput((prev) => ({ ...prev, country: prev.country.filter(countries => countries !== c) }))
    }
    
    function getOptions(arr) {
        let names = [];
        countries.filter((x)=>{
            if (x.alpha3Code===arr){
                names.push(x.name)
            }
        })
        return names;
    }

      return (
        <form className={s.form} onSubmit={handlerSubmit}>
          <div className={s.back}>
            <Link to={'/countries'}>
              <FaArrowLeft className={s.arrow}/>             
            </Link>
          </div>

          <div className={s.container}>
            <div>
              <h1>Create tourist activity</h1>
              <label for="name">Name:</label>  <br/>                   
              <input  id= "name" className={s.input}
                type="text" placeholder='What is this activity called?' name="name" 
                onChange={handleInputChange} value={input.name} />
                {errors.name && (<p className={s.p}>{errors.name}</p>)}
          </div>

          <div>
          <label for="duration">Duration:</label>  <br/> 
            <input className={s.input} id="duration" placeholder='How many minutes does it last?' 
              type="number" min='1' name="duration" value={input.duration} 
              onChange={handleInputChange} /> 
          </div>

          <div>
          <label for="countries">Countries:</label>  <br/> 
            <select id="countries" className={s.input} name="countries" onChange={(e) => handleSelect(e)}  required value={input.country}>
               <option> In which countries is it carried out? </option>
                  {countries.map((e) => ( 
                  <option value={e.alpha3Code}>  {e.name}  </option>
                  ))}
            </select>
          </div>

          <div className={s.countries}>
              { input.country.map(x => (
                <div className={s.close}>
                  <p>{getOptions(x)} 
                    <button className={s.button} type='button' onClick={(e) => deleteCountry(e, x)}>x </button>
                  </p>
                </div>
                ))}
          </div>
          
          <div>
          <label for="season">Season:</label>  <br/> 
            <select id="season" className={s.input} name='season' onChange={handleInputChange} required>
                <option className='button'>'In which season does this activity take place?'</option>
                <option value='summer' className='button'>summer</option>
                <option value='winter' className='button'>winter</option>
                <option value='autumn' className='button'>autumn</option>
                <option value='spring' className='button'>spring</option>
            </select>
          </div>
        
          <div>
          <label for="difficulty">Difficulty:</label>  <br/> 
            <input className={s.input} min='1' max='5' id="difficulty" placeholder='range between 1 - 5' 
              type="number" name="difficulty" value={input.difficulty} 
              onChange={handleInputChange} /> 
          </div>

          <div>
            <button className={s.create} type='submit'>CREATE</button>
          </div>
        </div>
        </form>
      )
    }
    
    export function validate(input) {   //funcion de valudacion
      let errors = {};
      if (!input.name) {
        errors.name = 'name is required'; 
      }
      if(!input.season){
        errors.season= 'season is required'
      }
          
      return errors;
    };