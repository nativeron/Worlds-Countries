import React from 'react'



function SearchBar({ input, setInput }) {

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} >
                <div >
                    <input
                        type="text"
                        value={input}
                        placeholder="Type to search automatically!"
                        onChange={(e) => setInput(e.target.value)}
                       
                    ></input>
                    <div >
                        <i class="fa fa-search" ></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
