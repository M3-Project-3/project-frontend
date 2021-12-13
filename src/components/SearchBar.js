import { useState } from 'react';

export default function SearchBar(props) {
    
    const [string, stringState] = useState("")

    function handleSearch(event){

        stringState(event.target.value)
        props.filter(event.target.value)
    }
    return(
        <div>
        <input className='Search' type="search" value={string} placeholder='Search by name, food type, ambience...'  name="search" onChange={handleSearch}/>
      </div>
    )
}
