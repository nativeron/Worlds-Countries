import React from 'react'
import s from './search.module.css'
import { BiSearchAlt } from 'react-icons/bi'

function SearchBar({ input, setInput, numpag, setNumpag }) {

function change(e){
    setInput(e)
    setNumpag(1)
}

    
    return (
        <div >
            <form className={s.form} onSubmit={(e) => e.preventDefault()} >
                <div className={s.container}>
                    <input
                        className={s.input}
                        type="text"
                        value={input}
                        placeholder="Find a country"
                        onChange={(e) => change(e.target.value)}
                    ></input>
                    
                        <BiSearchAlt className={s.icon}/>
                    
                </div>
            </form>
        </div>
    )
}

export default SearchBar
