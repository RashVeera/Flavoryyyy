import ResCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";

const ResContainer = () =>{
    const [listofrestaurants,setlistofrestaurants]=useState([]);
    const [filtereddata,setfiltereddata]=useState([]);
    const [types,settypes]=useState('');
    const [toggle,settoggle]=useState(true)
    const [filterbtn,setfilterbtn]=useState('filterbtn')
    useEffect( ()=>{
        fetchdata();
    },[])


    const fetchdata= async ()=>{
        const data_from_api= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0568464&lng=80.2136567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        json_data=await data_from_api.json();
        setlistofrestaurants(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return  listofrestaurants.length===0? (<Shimmer/>): (
        <>
        <button className={filterbtn} onClick={()=>{
            settoggle(!toggle)
            if (toggle){
                const filtereddata=listofrestaurants.filter((res)=> res.info.avgRating > 4.0);
                setfiltereddata(filtereddata); 
            setfilterbtn('apply-filterbtn')
            }
            else{
                setfiltereddata(listofrestaurants); 
                setfilterbtn('filterbtn')
            }
            
        }}> Top Rated Restaurants</button>


<input type="text" className="searchs" value={types} onChange={(e)=>{
                    settypes(e.target.value)
                }} placeholder="search"/> 

        <button className="search-filter" onClick={
            ()=>{
          
               const searchfilter=listofrestaurants.filter( (restaurants)=>(
                restaurants.info.name.toLowerCase().includes(types.toLowerCase())
                
            ))
            setfiltereddata(searchfilter);
            settoggle(!toggle)
            }
        }> Search</button>
        
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