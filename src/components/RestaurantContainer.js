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
  
        setlistofrestaurants(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json_data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
  


    return  listofrestaurants.length===0? (<Shimmer/>): (
        <div className="mx-3">
            <div className="flex my-4 gap-10">
        <button className="px-3 bg-slate-300  font-sans rounded-lg" style={{filterbtn}}  onClick={()=>{
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
            
        }}> Top-rated Restaurants</button>

<input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-12.5 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" value={types} onChange={(e)=>{
                    settypes(e.target.value)                 
                }} onKeyDown={ (e)=>{
                    if (e.code=="Enter"){
                        const searchfilter=listofrestaurants.filter( (restaurants)=>(
                            restaurants.info.name.toLowerCase().includes(types.toLowerCase())))
                            setfiltereddata(searchfilter)
                         
                    }
   
                }

                }  placeholder="Filter Restaurants..."/>




        </div>
        <div className="flex gap-3 ml-10 flex-wrap">
                  { filtereddata.map( (restaurant) => (
                     <Link className="links" key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> 
                      <ResCard key={restaurant.info.id} resData={restaurant} />
                      </Link>  
                  ))        
                   }
               </div>
               </div>
    )
   }
   export default ResContainer;