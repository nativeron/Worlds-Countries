import React from 'react'


function Search({ input, setInput }) {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} >
                <div>
                    <input
                        type="text"
                        value={input}
                        placeholder="Type to search"
                        onChange={(e) => setInput(e.target.value)}>
                    
                    </input>
                  
                </div>
            </form>
        </div>
    )
}

export default Search
