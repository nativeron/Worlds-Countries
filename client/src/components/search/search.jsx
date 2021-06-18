import React from 'react'
import s from './search.module.css'

function SearchBar({ input, setInput }) {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} >
                <div >
                    <input
                        type="text"
                        value={input}
                        placeholder="Find a country"
                        onChange={(e) => setInput(e.target.value)}
                       
                    ></input>
                    <div >
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
