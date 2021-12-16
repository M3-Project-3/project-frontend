import { useHistory } from "react-router-dom";
import { useParams} from "react-router-dom";
import { useState, useEffect  } from "react";
import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;


const EditPageUser = () => {
    const { id } = useParams();

    const [formState, setFormState] = useState({
    
    })
    const history = useHistory();

    useEffect(() => {
      axios
          .get(`${API_URI}/user/${id}`)
          .then((response) => {
        
              setFormState(response.data)
          })
  }, [] );
    
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URI}/user/${id}/edit`, formState)
      .then((response) => {
        setFormState({})
        history.push(`/${id}/profile`)
      })
      .catch(console.log);
  }

  const handleInput = (e) => {
    setFormState({...formState, [e.target.name] : e.target.value} );   
  }

    return(
      <div className="loginPage__container">
          <div className="loginPage__titleContainer">
            <h2 className="loginPage__title">Update your profile!</h2>
          </div>
          <div className="loginPage__form">
              <form onSubmit={handleSubmit}>
               
                    <input
                    
                    type="text"
                    name="name"
                    onChange={handleInput} 
                    value={formState.name}
                    />

               
                    <input
                    type="text"
                    name="surname"
                    onChange={handleInput} 
                    value={formState.surname}
                    />


                    <button>Update</button>


              </form>
              </div>

        </div>
    )
}

export default EditPageUser