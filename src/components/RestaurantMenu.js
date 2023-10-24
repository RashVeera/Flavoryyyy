import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import Shimmer from "./Shimmer";
import arrow from "../../images/down-arrow.png";
import { useParams } from "react-router-dom";
const RestaurantMenu =() =>{
    const [restaurantInfo,setrestaurantInfo]=useState(null)
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]) 

    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.035713261544618&lng=80.19712787121533&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json_data=await data.json();
         setrestaurantInfo(json_data)
    }

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
    <div className="restaurant-menu-card">
        <div className="res-menu-details">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
        <span>{message}</span>
        </div>

   <h3>{title}</h3>

{
itemCards.map((ele)=> (
    <div className="item-parent">
     <div className="res-menu-items">

        <span className="item-name">{ele.card.info.name}</span>

        <p className="item-price">{ "₹ " + ele.card.info.price/100 }</p>
  
        <p className="item-description">{ele.card.info.description}</p>
       

        </div>
    <div className="image-item">
        <img className="image-item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+ele.card.info.imageId}/>
    </div>
   
    </div>
))

}
</div>
            </>
        ) 
}  

    

export default RestaurantMenu