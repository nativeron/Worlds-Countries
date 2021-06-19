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

    function deleteTemp(e, t) {
        setInput((prev) => ({ ...prev, country: prev.country.filter(temp => temp !== t) }))
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
            <button className={s.button} ><FaArrowLeft/> </button>
            
            </Link>

          </div>
          <div className={s.container}>
            <div>
            <h1>Create activity</h1>
            <p>Name:</p>                      
            <input  id= "name"
            type="text" placeholder='name' name="name" onChange={handleInputChange} value={input.name} />
            {errors.name && (<p >{errors.name}</p>)}
          </div>


          <div>
            <p>Difficulty:</p>
            <input min='1' max='5' id="difficulty" placeholder='range between 1 - 5' type="number" name="difficulty" value={input.difficulty} 
            onChange={handleInputChange} /> {errors.difficulty && (<p >{errors.difficulty}</p>)}
          </div>
         
          <div>
            <p>Season:</p>
          <select name='season' onChange={handleInputChange} required>
                <option className='button'></option>
                <option value='summer' className='button'>summer</option>
                <option value='winter' className='button'>winter</option>
                <option value='autumn' className='button'>autumn</option>
                <option value='spring' className='button'>spring</option>
              </select>
          </div>

          <div>
            <p>Duration:</p>
            <input id="duration" placeholder='duration' type="number" min='1' name="duration" value={input.duration} 
            onChange={handleInputChange} /> {errors.duration && (<p >{errors.duration}</p>)}
          </div>

          <div>
                    <p>Countries:</p>
                    <select name="countries" onChange={(e) => handleSelect(e)}  required value={input.country}>
                        <option>
                            Select
                    </option>

                        {countries.map((e) => (
                            <option value={e.alpha3Code} >{e.name}</option>)
                        )}
                    </select>
                </div>
                <div >
                    {   
                        input.country.map(x => (
                            <p>{getOptions(x)} <button type='button' onClick={(e) => deleteTemp(e, x)}>x</button></p>
                        ))
                    }
                </div>
            


          <div>
            <button type='submit'>CREATE</button>
                </div>
          </div>
        </form>
    
    
        
      )
    }
    

    export function validate(input) {   //funcion de valudacion
      let errors = {};
      if (!input.name) {
        errors.name = 'name is required';  //si no hay input
      }
      if(!input.season){
        errors.season= 'season is required'
      }
      
    
      return errors;
    };