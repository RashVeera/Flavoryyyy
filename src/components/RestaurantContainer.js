import ResCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";

const ResContainer = () =>{
    const [listofrestaurants,setlistofrestaurants]=useState([]);
    const [filtereddata,setfiltereddata]=useState([]);
    const [toggle,settoggle]=useState(false)
    useEffect( ()=>{
        fetchdata();
    },[])


    const fetchdata= async ()=>{
        const data_from_api= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0568464&lng=80.2136567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        json_data=await data_from_api.json();
        setlistofrestaurants(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(listofrestaurants)
        console.log(filtereddata)
    }

    return  listofrestaurants.length===0? (<Shimmer/>): (
        <>
        <button className="filter-btn" onClick={()=>{
            settoggle(!toggle)
            if (toggle){
                const filtereddata=listofrestaurants.filter((res)=> res.info.avgRating > 4.0);
                setfiltereddata(filtereddata); 
            }
            else{
                setfiltereddata(listofrestaurants); 
            }
            
        }}> Top Rated Restaurants</button>
        
        
        <div className="res-container">
                  { filtereddata.map( (restaurant) => (
                         <ResCard key={restaurant.info.id} resData={restaurant} />
                  ))        
                   }
               </div>
               </>
    )
   }
   export default ResContainer;