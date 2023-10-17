import resList from "../utils/mockData";
import ResCard from "./RestaurantCard";
import { useState } from "react";
const ResContainer = () =>{
    const [listofrestaurants,setlistofrestaurants]=useState(resList);
    // {console.log(listofrestaurants);}
    return (
<>
<button className="filter-btn" onClick={()=>{
    const filtereddata=listofrestaurants.filter((res)=> res.info.avgRating > 4);
    // console.log(filtereddata);
    setlistofrestaurants(filtereddata); 
}}> Top Rated Restaurants</button>


<div className="res-container">


          { listofrestaurants.map( (restaurant) => (
                 <ResCard key={restaurant.info.id} resData={restaurant} />
          ))        
           }
       </div>
       </>
    )
   }
   export default ResContainer;