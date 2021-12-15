import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;


const EditPageUser = () => {
    const { id } = useParams();

    const [formState, setFormState] = useState({})
    const history = useHistory();

    
  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const userEdit = await axios.put(`${API_URI}/user/${id}/edit`, formState)
      setFormState({})
      history.push("/")
    }
    catch(error){
      console.log(error)
    }
  }

  const handleInput = (e) => {
    setFormState({...formState, [e.target.name] : e.target.value} );   
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
    )}

export default EditPageUser