import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;


export default function EditPageUser() {
    const { id } = useParams();

    const [formState, setFormState] = useState({})
    const history = useHistory();

    
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${API_URI}/user/${id}/edit`, formState)
      .then((response) => {
        setFormState({})
        history.push("/")
      })
      .catch(console.log);
  }

  function handleInput(e) {
    if (e.target.type === "select-multiple"){
        let valueInput = e.target.valueInput
        let value = []
        for(let i=0; i < valueInput.length ; i++){
            if(valueInput[i].selected) value.push(valueInput[i].value)
        }
        setFormState({...formState, [e.target.name] : value} );
    }   
  }

    return(
        <div>
              <h2>Edit User Profile</h2>
              <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    onChange={handleInput} 
                    value={formState.name}
                    />

                    <label>Surname</label>
                    <input
                    type="text"
                    name="surname"
                    onChange={handleInput} 
                    value={formState.surname}
                    />

                    <label>Favourites</label>

                    <label>Picture</label>
                    <input
                    type="text"
                    name="picture"
                    onChange={handleInput} 
                    value={formState.picture}
                    />

              </form>

        </div>
    )
}