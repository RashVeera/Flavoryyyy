import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import Shimmer from "./Shimmer";
import arrow from "../../images/down-arrow.png";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu =() =>{
   
    const {resId}=useParams();
    restaurantInfo=useRestaurantMenu(resId)

    const [showindex,setshowindex]=useState(null)
    if (restaurantInfo==null){
        return <Shimmer/>
    }

    let {itemCards} = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    let {title}=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card ;
    
    // console.log(restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
    let {cards}=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    const Itemtype_cards=cards.filter((card_category)=>(
        card_category.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))

    // console.log(Itemtype_card)
    if (itemCards==undefined){
        itemCards=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards;
        title=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].title;
    }
    const {name,areaName,cuisines}=restaurantInfo?.data?.cards[0]?.card?.card?.info;
    const {message}=restaurantInfo?.data?.cards[0]?.card?.card?.info?.feeDetails;
    
    return ( <>
    <div className=" w-[750] ml-96 p-5 font-sans">
        <div className=" h-55 border-b border-b-stone-500 border-dashed py-4">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-slate-500 text-sm">{cuisines.join(", ")}</p>
        <p className="text-slate-500 text-sm">{areaName}</p>
        <span className="text-slate-500 text-sm ">{message}</span>
        </div>
        <div>

      {  Itemtype_cards.map((category,index)=>(
             <RestaurantCategory key={category.card.card.title}
              data={category} 
              showItems={index===showindex?true:false} 
              setshowindex={()=>showindex===index?setshowindex(null):setshowindex(index)} />
        ))
      }
      </div>

 
</div>
            </>
        ) 
}  

    

export default RestaurantMenu