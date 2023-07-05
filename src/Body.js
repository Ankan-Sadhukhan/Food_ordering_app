import {RestaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";

const Body =()=>(
    <div className="body">{
        RestaurantList.map((restaurant)=>{
            return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
        })
    }
    </div>
    
)

export default Body;