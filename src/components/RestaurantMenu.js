import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import Shimmer from "./Shimmer";
import arrow from "../../images/down-arrow.png";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu =() =>{
   
    const {resId}=useParams();
    restaurantInfo=useRestaurantMenu(resId)


    if (restaurantInfo==null){
        return <Shimmer/>
    }

    let {itemCards} = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    let {title}=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card ;
    
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

   <h3 className="font-bold text-lg my-4">{title}</h3>

{
itemCards.map((ele)=> (
    
    <div key={ele.card.info.id}  className="  flex border-b border-b-stone-500 border-dashed m-4 py-4 ">
     <div className="flex-col w-[700]  ">
        <span className="font-semibold">{ele.card.info.name}</span>

        <p className="text-base">{ "₹ " + ele.card.info.price/100 }</p>
  
        <p className="text-sm text-slate-400 py-2">{ele.card.info.description}</p>
       
        </div>
       
 
        <img className="w-[100] h-[100] justify-self-end p-1" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+ele.card.info.imageId}/>
       

    </div>

    
))

}
</div>
            </>
        ) 
}  

    

export default RestaurantMenu