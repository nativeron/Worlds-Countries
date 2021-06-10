import React from 'react'
import style from "./search.css";


function Search({ input, setInput }) {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} >
                <div>
                    <input
                        type="text"
                        value={input}
                        placeholder="Type to search automatically!"
                        onChange={(e) => setInput(e.target.value)}>
                    
                    </input>
                    <div>
                        <i></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
