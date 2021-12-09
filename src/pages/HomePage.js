import SearchBar from '../components/SearchBar'
import {useState} from "react";
import restaurants from "../restaurants.json"

const randomIdNumber = ()=> Math.floor(Math.random()*10000)
restaurants.forEach(restaurant =>(restaurant._id = randomIdNumber()))

function HomePage() {
  const [restaurantsList, setRestaurantsList] = useState(restaurants)
  const [searchList, setSearchList] = useState(restaurants)

  function searchRestaurants(searchSpace){
    setSearchList(
      restaurantsList.filter(food=>food.name.toLowerCase().includes(searchSpace.toLowerCase()))
    )
  
}

  return (
    <div>
      <h1>Home Page</h1>

      <SearchBar search={searchRestaurants} />

    </div>
  );
}

export default HomePage;