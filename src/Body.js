import {RestaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";



function filterData(searchText,restaurants){
    return (
        restaurants.filter((r) =>
        r.data.name.includes(searchText)))
}

const Body =()=>{
    const [searchText,setsearchText] = useState("");
    const [restaurants,setrestaurants] =useState(RestaurantList);
    return(<>
   
    <div className="search-container">
        <input type="text" className="search-box" placeholder="search" value={searchText} onChange={(e)=>setsearchText(e.target.value)}>
        </input>
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchText,RestaurantList);
            setrestaurants(data)}
        } >search</button>
    </div>
        <div className="body"> 
            {
            restaurants.map((restaurant)=>{
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            })
        }
        </div>
    </>
    )
}

export default Body;