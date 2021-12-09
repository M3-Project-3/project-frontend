import { useState } from 'react';
//import { Input } from 'antd';

export default function SearchBar(props) {
    
    const [search, setSearch] = useState("")

    function handleInput(event){

        setSearch(event.target.value)
        props.search(event.target.value)
    }
    return(
        <div>

        <form className="Search">

                <input placeholder="Search" type="text" value={search || ""}  onChange={handleInput} />
                 <button type="submit">search</button>

        </form>

      </div>
    )


}
