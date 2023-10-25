import { useEffect,useState } from "react";
const useRestaurantMenu = (resId) =>{
    const [restaurantInfo,setrestaurantInfo]=useState(null)
    
    useEffect(()=>{
        fetchMenu();
    },[]) 

    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.035713261544618&lng=80.19712787121533&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json_data=await data.json();
        setrestaurantInfo(json_data);
        console.log(restaurantInfo);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;