import { useHistory } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddHourRange from '../../components/AddHourRange'
import AddTypeRestaurant from '../../components/AddTypeRestaurant'
import AddFoodType from "../../components/AddFoodType";
import AddOneToMenu from "../../components/AddOneToMenu"


const API_URL = process.env.REACT_APP_API_URI;

const EditPageBusiness = () => {
  const { id } = useParams();
  const history = useHistory();
  const [formState, setFormState] = useState({});
  const [selectedHourRange, setSelectedHourRange] = useState()
  const [selectedResType, setSelectedResType] = useState()
  const [selectedFoodType, setSelectedFoodType] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [starters, setStarters] = useState()
  const [main, setMain] = useState()
  const [deserts, setDeserts] = useState()

  useEffect( ()=>{
    const getBusiness = async () =>{
      try{
        const allBusiness = await axios.get(`${API_URL}/business`)
        setFormState(allBusiness.data.data.find(el=> el._id===id))
        setIsLoading(false)
        if(formState.menuStarters) {

          setStarters(formState.menuStarters)
        }
        if(formState.menuMain){
          setMain(formState.menuMain)
        }
        if(formState.menuDeserts){
          setDeserts(formState.menuDeserts)
        }
      }
      catch(error){
        console.log(error)
      }
    }
    getBusiness()
  },[])

  useEffect( ()=>{
      if(formState.menuStarters) {
        setStarters(formState.menuStarters)
      }
      if(formState.menuMain){
        setMain(formState.menuMain)
      }
      if(formState.menuDeserts){
        setDeserts(formState.menuDeserts)
      }
  },[formState])
  
  const handleSubmit= async (e)=> {
    try{

      e.preventDefault();
      let hourRanges = []
      if(selectedHourRange){

        let orderedHourRange = selectedHourRange.map((el)=> el.value.split("-")[0].split(":")[0]).sort((a,b)=>a-b)
        hourRanges = orderedHourRange.map((el)=>`${el}:00`)
      
      }else{
        if(formState.timetable){
          hourRanges = formState.timetable.map((el)=>el)
        }
      }
      let resType = []
      if(selectedResType){
        resType = selectedResType.map((el)=>el.value)
      }else{
        if(formState.resType){
          resType = formState.resType.map((el)=>el)
        }
      }
      let foodType = []
      if(selectedFoodType){
        foodType = selectedFoodType.map((el)=>el.value)
      }else{
        if(formState.foodType){
          foodType = formState.foodType.map((el)=>el)
        }
      }
      let menuStarters;
      starters ? menuStarters = starters : menuStarters = []
      
      let menuMain;
      main ? menuMain = main : menuMain = []
      
      let menuDeserts;
      deserts ? menuDeserts = deserts : menuDeserts = []
      
      const editBusiness = await axios
      .put(`${API_URL}/business/${id}/edit`, {formState, hourRanges, resType, foodType, menuStarters, menuMain, menuDeserts})
      history.push("/") //path where to go when you click submit
    }
    catch(error){
      console.log(error)
    }
  }

  const handleInput = (e) => {  
    setFormState({...formState, [e.target.name]: e.target.value });
  }

  const hoursSelected = []
  if(isLoading === false && formState.timetable ){
    formState.timetable.map((el)=>{
      return hoursSelected.push({value:el, label: el})
    })
  }
  const resTypeSelected = []
  if(isLoading === false && formState.resType ){
    formState.resType.map((el)=>{
      return resTypeSelected.push({value:el, label: el})
    })
  }
  const foodTypeSelected = []
  if(isLoading === false && formState.foodType ){
    formState.foodType.map((el)=>{
      return foodTypeSelected.push({value:el, label: el})
    })
  }
  const removeStarter = (e, index)=>{
    e.preventDefault()
    const list = [...starters];
    list.splice(index, 1);
    setStarters(list);
}
const removeMain = (e, index) => {
  e.preventDefault()
  const list = [...main];
  list.splice(index, 1);
  setMain(list);
}
const removeDesert = (e, index) => {
  e.preventDefault()
  const list = [...deserts];
  list.splice(index, 1);
  setDeserts(list);
}
  
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
          {isLoading === false && <AddTypeRestaurant selectedResType={selectedResType} setSelectedResType={setSelectedResType} restaurant={resTypeSelected}/>}
        </div>

        <label>Food Type</label>
        <div>
          {isLoading === false && <AddFoodType selectedFoodType={selectedFoodType} setSelectedFoodType={setSelectedFoodType} food={foodTypeSelected}/>}
        </div>

        <label>Starters</label>
        {isLoading === false && starters && starters.map((el, index)=>{
          return (
            <>
            <span>{el.menuStarters} </span><span> {el.price} euros</span><button onClick={(e) => removeStarter(e,index)}>Remove</button>
            <br></br>
            </>
          )
        })}
           <AddOneToMenu addOne={starters} setAddOne={setStarters} name="menuStarters"/>
        
          <label>Main Course</label>
            {isLoading === false && main.map((el, index)=>{
             return (
            <>
            <span>{el.menuMain} </span><span> {el.price} euros</span><button onClick={(e) => removeMain(e,index)}>Remove</button>
            <br></br>
            </>
          )
        })}
           <AddOneToMenu addOne={main} setAddOne={setMain} name="menuMain"/>
        
           <label>Deserts</label>
            {isLoading === false && deserts.map((el, index)=>{
            return (
            <>
            <span>{el.menuDeserts} </span><span> {el.price} euros</span><button onClick={(e) => removeDesert(e,index)}>Remove</button>
            <br></br>
            </>
          )
        })}
           <AddOneToMenu addOne={deserts} setAddOne={setDeserts} name="menuDeserts"/>

          {isLoading === false && <AddHourRange selectedHourRange={selectedHourRange} setSelectedHourRange={setSelectedHourRange} restaurant={hoursSelected}/>}
           
        <label for="description">Description</label>
        <textarea name="description" value={formState.description} onChange={handleInput} maxLength="200"/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default EditPageBusiness
