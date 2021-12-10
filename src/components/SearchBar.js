import { useState } from 'react';

export default function SearchBar({ query, filterByQuery}) {
    
    const [search, setSearch] = useState("")

    function handleInput(event){

        setSearch(event.target.value)
        search(event.target.value)
    }
    return(
        <div>

        <form className="Search">
                <input
                    value={query}
                    onChange={filterByQuery}
                    placeholder="Search for a restaurant here"
                />
        </form>
      </div>
    )
}
