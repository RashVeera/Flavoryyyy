import { useState } from "react"
import ResItem from "./RestaurantItem"
import down_arrow from "../../images/down-arrow.png";
import { useState } from "react"


const RestaurantCategory =({data,showItems,setshowindex}) =>{

   
    const handleClick=()=>{
        setshowindex()
    }
    return (
 
    <div className="shadow ">
    <div className="flex justify-between m-3 p-2 hover:cursor-pointer" onClick={handleClick}>
        
        <span className="font-bold">{data.card.card.title} ({data.card.card.itemCards.length})</span>
        <span ><img className="w-4 h-4" src={down_arrow}/></span>
    </div>
 
     { showItems &&  <ResItem resData={data.card.card.itemCards}/>}
  
    </div>
    )
}

export default RestaurantCategory