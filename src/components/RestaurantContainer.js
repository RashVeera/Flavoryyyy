import ResCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const ResContainer = () =>{
    const [listofrestaurants,setlistofrestaurants]=useState([]);
    const [filtereddata,setfiltereddata]=useState([]);
    const [types,settypes]=useState('');
    const [toggle,settoggle]=useState(true)
    const [filterbtn,setfilterbtn]=useState('filterbtn')

    const onlinestate=useOnlineStatus();
    

    useEffect( ()=>{
        fetchdata();
    },[])

    if (onlinestate===false)
       return  (
        
        <div className="container-offline">
        <h2 className="offline-header">You are offline.</h2>
        <p className="offline-comments">
        <p>Try: </p>
            <li>Turning off airplane mode</li> 
            <li>Turning on mobile data Or Wi-Fi</li> 
            <li>Checking the signal in your area</li> 
          
        </p>

        </div>

    
        )

      


    const fetchdata= async ()=>{
        const data_from_api= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035713261544618&lng=80.19712787121533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        json_data=await data_from_api.json();
        // console.log(json_data)
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
                }} onKeyDown={ (e)=>{
                    if (e.code=="Enter"){
                        // console.log(types)
                        const searchfilter=listofrestaurants.filter( (restaurants)=>(
                            restaurants.info.name.toLowerCase().includes(types.toLowerCase())))
                            setfiltereddata(searchfilter)
                            // settoggle(!toggle)
                            // setfilterbtn('filterbtn')
                    }
                    // console.log(e)
                }

                } placeholder="search"/> 

        {/* <button className="search-filter" onClick={
            ()=>{
          
                       
            ))
         
            }
        }> Search</button> */}
        
        <div className="res-container">
                  { filtereddata.map( (restaurant) => (
                     <Link className="links" key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> 
                      <ResCard key={restaurant.info.id} resData={restaurant} />
                      </Link>  
                  ))        
                   }
               </div>
               </>
    )
   }
   export default ResContainer;