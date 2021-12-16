import { useHistory } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddHourRange from '../../components/AddHourRange'
import AddTypeRestaurant from '../../components/AddTypeRestaurant'
import AddFoodType from "../../components/AddFoodType";
import AddOneToMenu from "../../components/AddOneToMenu"
import service from "../../api/service";

const API_URL = process.env.REACT_APP_API_URI;
export default function EditPageBusiness() {
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
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let hourRanges = []
    if(selectedHourRange){
      for(let el of selectedHourRange) {
        hourRanges.push(el.value)
      }
    }else{
      if(formState.timetable){
        for(let el of formState.timetable) {
          hourRanges.push(el)
        }
      }
    }

    let resType = []
    if(selectedResType){
      for(let el of selectedResType) {
        resType.push(el.value)
      }
    }else{
      if(formState.resType){
        for(let el of formState.resType) {
          resType.push(el)
        }
      }
    }
    let foodType = []
    if(selectedFoodType){
      for(let el of selectedFoodType) {
        foodType.push(el.value)
      }
    }else{
      if(formState.foodType){
        for(let el of formState.foodType) {
          foodType.push(el)
        }
      }
    }
    let menuStarters;
    if(starters){
        menuStarters = starters
    }else{
        menuStarters = []
    }
    let menuMain;
    if(main){
        menuMain = main
    }else{
        menuMain = []
    }
    let menuDeserts;
    if(deserts){
        menuDeserts = deserts
    }else{
        menuDeserts = []
    }
    
    axios
      .put(`${API_URL}/business/${id}/edit`, {formState, hourRanges, resType, foodType, menuStarters, menuMain, menuDeserts})
      .then((response) => {
        history.push("/:id/reservations") 
      })
      .catch(console.log);
  }

  const hoursSelected = []
  if(isLoading === false && formState.timetable ){
    formState.timetable.map((el)=>{
      hoursSelected.push({value:el, label: el})
    })
  }
  const resTypeSelected = []
  if(isLoading === false && formState.resType ){
    formState.resType.map((el)=>{
      resTypeSelected.push({value:el, label: el})
    })
  }
  const foodTypeSelected = []
  if(isLoading === false && formState.foodType ){
    formState.foodType.map((el)=>{
      foodTypeSelected.push({value:el, label: el})
    })
  }
  function removeStarter(e, index){
    e.preventDefault()
    const list = [...starters];
    list.splice(index, 1);
    setStarters(list);
}
function removeMain(e, index){
  e.preventDefault()
  const list = [...main];
  list.splice(index, 1);
  setMain(list);
}
function removeDesert(e, index){
  e.preventDefault()
  const list = [...deserts];
  list.splice(index, 1);
  setDeserts(list);
}
  
function handleInput(e) {  
  setFormState({...formState, [e.target.name]: e.target.value });
}

function handleFileInput(e){
  const pictureUploadForm = new FormData();
  pictureUploadForm
  .append("pictures", e.target.files[0]);
  
  service
  .uploadPictures(pictureUploadForm)
  .then(response => {
    let pictures
    if(!formState.pictures) pictures=[]
    else pictures = [...formState.pictures]
    pictures.push(response.secure_url)
    
    setFormState({...formState, pictures});
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };
  
  return (
    <>
    <div className="editRest__base">
      <h2 className="editRest__header">Edit Restaurant Profile</h2>

      <form className="editRest__container" onSubmit={handleSubmit}>
        <div className="editRest__fieldContainer">
          <label className="editRest__label" className="editRest__label"></label>
          <input
            className="editRest__input"
            type="text"
            name="name"
            onChange={handleInput} 
            value={formState.name}
            placeholder="Name"
          />
        </div>

        <div className="editRest__fieldContainer">
          <label className="editRest__label"></label>
          <input
            className="editRest__input"
            type="text"
            name="address"
            onChange={handleInput} 
            value={formState.address}
            placeholder="Address"
          />
        </div>

        <div className="editRest__fieldContainer">
          <label className="editRest__label">Restaurant Type</label>
          <div className="editRest__addTypeContainer editRest__addTypeContainer--dropdown">
            {isLoading === false && <AddTypeRestaurant selectedResType={selectedResType} setSelectedResType={setSelectedResType} restaurant={resTypeSelected}/>}
          </div>
        </div>

        <div className="editRest__fieldContainer">
          <label className="editRest__label">Food Type</label>
          <div className="editRest__addTypeContainer editRest__addTypeContainer--dropdown">
            {isLoading === false && <AddFoodType selectedFoodType={selectedFoodType} setSelectedFoodType={setSelectedFoodType} food={foodTypeSelected}/>}
          </div>
        </div>

        <div className="editRest__fieldContainer">
          <label className="editRest__label"></label>
          {isLoading === false && starters && starters.map((el, index)=>{
            return (
              <>
              <span>{el.menuStarters} </span><span> {el.price} euros</span><button onClick={(e) => removeStarter(e,index)}>Remove</button>
              <br></br>
              </>
            )
          })} 
        </div>

        <div className="editRest__fieldContainer editRest__fieldContainer--fullWidth">
          <AddOneToMenu addOne={starters} setAddOne={setStarters} name="menuStarters" />
        </div>

        <div className="editRest__fieldContainer">
          <label className="editRest__label">Main Course</label>
          {isLoading === false && main.map((el, index)=>{
            return (
              <>
              <span>{el.menuMain} </span><span> {el.price} euros</span><button onClick={(e) => removeMain(e,index)}>Remove</button>
              <br></br>
              </>
            )
          })}
        </div>

        <div className="editRest__fieldContainer editRest__fieldContainer--fullWidth">
          <AddOneToMenu addOne={main} setAddOne={setMain} name="menuMain"/>
        </div>

        <div className="editRest__fieldContainer">
           <label className="editRest__label">Deserts</label>
          {isLoading === false && deserts.map((el, index)=>{
            return (
              <>
              <span>{el.menuDeserts} </span><span> {el.price} euros</span><button onClick={(e) => removeDesert(e,index)}>Remove</button>
              <br></br>
              </>
            )
          })}
        </div>

        <div className="editRest__fieldContainer editRest__fieldContainer--fullWidth">
          <AddOneToMenu addOne={deserts} setAddOne={setDeserts} name="menuDeserts"/>
        </div>

        <div className="editRest__fieldContainer">
          <label className="editRest__label">Opening Times</label>
          <div className="editRest__addTypeContainer">
          {isLoading === false && <AddHourRange selectedHourRange={selectedHourRange} setSelectedHourRange={setSelectedHourRange} restaurant={hoursSelected}/>}
          </div>
        </div>
           
        <div className="editRest__fieldContainer">
          <label className="editRest__label">Images:</label>
          <input
            type="file"
            name="tables"
            onChange={handleFileInput} 
          />
        </div>
        
        <div className="editRest__fieldContainer">
          <label className="editRest__label" for="description">Description</label>
          <textarea name="description" value={formState.description} onChange={handleInput}  />
        </div>

        <div className="editRest__fieldContainer editRest__fieldContainer--fullWidth">
          <button classtype="editRest__submitButton">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
      }
