import { useState } from 'react';

const SearchBar = (props) => {
    
    const [string, stringState] = useState("")

    const handleSearch = (event) => {

        stringState(event.target.value)
        props.filter(event.target.value)
    }
    return(
        <div>
        <input className='searchBar' type="search" value={string} placeholder='Search by name, type of food, ambience...'  name="search" onChange={handleSearch}/>
      </div>
    )
}

export default SearchBar
