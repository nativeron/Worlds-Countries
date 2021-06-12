import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../../actions/index'

export default function Form() {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries)

    const [errors, setErrors] = React.useState({

    }); // estado, donde mantenemos un objeto con los errores
    
    const [input, setInput] = React.useState({ //definiendo un sólo estado,  más control sobre él,
      name: '',             //pero ahora tenemos una sola funcion setInput que debe manejar todos los inputs.
      difficulty: '',          // si pasamos esta función a cualq input, podemos usar su atributo name para indicar
      season: '',
      duration: '',
      countries: '',
    });                       // el nombre de la propiedad en el estado.
                              
    useEffect(()=>{
        dispatch(getCountries())
    }, [])



    const handleInputChange = function(e) {
      setInput({
        ...input, // setInput pisaa el estado anterior.tenemos que pasarle también las propiedades viejas que tenia el estad
                  //usamos ...input,
        [e.target.name]: e.target.value
      });
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }

    const handlerSubmit = async (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/activity', input)
        .then (res=>{
            alert('todo bien!');
            setInput({
                name:'',
                difficulty:'',
                season:'',
                duration:'',
                countries:[]
            })
        })
        .catch(res=> alert(':('))
    }

    function handleSelect(e) {
        if (input.countries.includes(parseInt(e.target.value))) {
            alert('You already selected this temperament. Try again.')
        } else if (input.countries.length >= 3) {
            alert('You can select up to 3 temperaments.')
        } else {
            setInput((prev) => ({ ...prev, countries: [...prev.countries, parseInt(e.target.value)] }))
        }
    }

    function deleteTemp(e, t) {
        setInput((prev) => ({ ...prev, countries: prev.countries.filter(temp => temp !== parseInt(t)) }))
    }
    
      return (
        <form >
          <div id="frm"><div>
            <h1>Create activity</h1>                      
            <input  id= "name" className={errors.name && 'danger'}  //onChange pasa un evento a la función que le pasemos.
            type="text" placeholder='name' name="name" onChange={handleInputChange} value={input.name} />
            {errors.name && (<p className="danger">{errors.name}</p>)}
          </div>


          <div>
            <input id="difficulty" placeholder='difficulty' className={errors.difficulty && 'danger'} type="password" name="difficulty" value={input.difficulty} 
            onChange={handleInputChange} /> {errors.difficulty && (<p className="danger">{errors.difficulty}</p>)}
          </div>
         
          <div>
          <select name='season' onChange={handleInputChange} required>
                <option className='button'></option>
                <option value='summer' className='button'>summer</option>
                <option value='winter' className='button'>winter</option>
                <option value='autumn' className='button'>autumn</option>
                <option value='spring' className='button'>spring</option>
              </select>
          </div>

          <div>
            <input id="duration" placeholder='duration' className={errors.duration && 'danger'} type="number" min='1' name="duration" value={input.duration} 
            onChange={handleInputChange} /> {errors.duration && (<p className="danger">{errors.duration}</p>)}
          </div>

          <div>
                    <p>Temperaments</p>
                    <select name="countries" onChange={(e) => handleSelect(e)}  required value={input.countries}>
                        <option>
                            Select
                    </option>

                        {countries.map((e) => (
                            <option value={e.alpha3Code} key={e.alpha3Code}>{e.name}</option>)
                        )}
                    </select>
                </div>
                <div >
                    {
                        countries.map(t => (
                            <p id={t} >{getCountries(t)} <button type='button' onClick={(e) => deleteTemp(e, t)}>x</button></p>
                        ))
                    }
                </div>
            


          <div>
            <input id="button" type="submit" value="create" onChange={handleInputChange}/></div>
          </div>
        </form>
    
    
        
      )
    }
    
    
    export function validate(input) {   //funcion de valudacion
      let errors = {};
      if (!input.name) {
        errors.name = 'name is required';  //si no hay input
      }


      if(!input.difficulty){
        errors.difficulty= 'difficuly is required'
      }else if (!/(?=.*[0-9])/.test(input.difficulty)){ //al menos 1 numero en password
        errors.difficulty='Password is invalid'
      }
      

      if(!input.duration){
        errors.duration= 'Password is required'
      }else if (!/(?=.*[0-9])/.test(input.duration)){ //al menos 1 numero en password
        errors.duration='Password is invalid'
      }

    
      return errors;
    };