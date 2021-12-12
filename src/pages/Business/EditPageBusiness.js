import { useHistory } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddHourRange from '../../components/AddHourRange'


export default function EditPageBusiness() {
  const { id } = useParams();
  const [count, setCount] = useState([" "])
  const [formState, setFormState] = useState({});
  const history = useHistory();
  const [selected, setSelected] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  
  
  
  useEffect(()=>{
    axios.get("http://localhost:5005/business")
    .then(allBusiness => {
      setFormState(allBusiness.data.data.find(el=> el._id===id))
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  },[])
  //make this dynamic
  
  function increment(e){
    e.preventDefault()
    const newArr = count.slice()
    newArr.push(" ")
    setCount(newArr)
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    let hourRanges = []
    for(let el of selected) hourRanges.push(el.value)
    axios
      .put(`http://localhost:5005/business/${id}/edit`, {formState, hourRanges})
      .then((response) => {
        history.push("/") //path where to go when you click submit
      })
      .catch(console.log);
  }

  function handleInput(e) {
    
    if (e.target.type === "select-multiple"){
      let options = e.target.options
        let value = []
        for(let i=0; i < options.length ; i++){
            if(options[i].selected) {
             
              value.push(options[i].value)
            }
          }
         
          setFormState({...formState, [e.target.name]: value});
        
        
    }else{
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }

  const hoursSelected = []
  if(isLoading === false && formState.timetable ){
    formState.timetable.map((el)=>{
      hoursSelected.push({value:el, label: el})
    })
  }
  
  
  const optionsFoodType = [
    "American",
    "Argentinian",
    "British",
    "Brunch",
    "Catalan",
    "Chinese",
    "European",
    "German",
    "Greek",
    "Indian",
    "Korean",
    "Lebanese",
    "Mediterranean",
    "Mexican",
    "Moroccan",
    "Pizzeria",
    "Seafood",
    "Spanish",
    "Thai",
    "Traditional",
    "Turkish",
    "Vegetarian",
    "Vegan",
    "Vietnamese"
  ]

  return (
    <>
   
   
    <div>
      <h2>Edit Restaurant Profile</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.name}
        />


        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.address}
        />

        <label>Restaurant Type</label>
        <div>
          <select name="resType" value={formState.value} onChange={handleInput} multiple>
            <option value="fineDining">Fine Dining</option>
            <option value="casual">Casual</option>
            <option value="familyFriendly">Family Friendly</option>
            <option value="foodFood">Fast Food</option>
            <option value="cafe">Cafe</option>
            <option value="buffet">Buffet</option>
            <option value="foodTruck">Food Truck</option>
            <option value="popUp">Pop Up</option>
            <option value="Sports Bar">Sports Bar</option>
            <option value="Bistro">Bistro</option>
            <option value="diner">Diner</option>
            <option value="themeRestaurant">Themed Restaurant</option>
          </select>
        </div>

        <label>Food Type</label>
        <div>
          <select
            name="foodType"
            value={formState.value}
            onChange={handleInput}
            multiple
            defaultValue={formState.value}
          >
          {isLoading === false && optionsFoodType.map((el=>{
            <option value={el} selected>{el}</option>
            if(formState.foodType.includes(el)){
              
              return <option value={el} selected>{el}</option>
            }else{
              
              return <option value={el}>{el}</option>
            }
          }))}

          </select>
        </div>

        <label>Starters</label>
        <input
          type="text"
          name="menuStarters"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.menuStarters}
        />

        <label>Main Course</label>
        <input
          type="text"
          name="menuMain"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.menuMain}
        />

        <label>Desert</label>
        <input
          type="text"
          name="desert"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.menuDeserts}
        />

        <label>Price Range</label>
        <input
          type="text"
          name="priceRange"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.priceRange}
        />
          {isLoading === false && <AddHourRange selected={selected} setSelected={setSelected} restaurant={hoursSelected} url={id}/>}
           
          
        <button onClick={(e)=>increment(e)}>Add one</button>
        <label>Tables</label>
        <input
          type="text"
          name="tables"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.tables}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}
