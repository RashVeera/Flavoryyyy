import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
const ResCard = (props) =>{
    const {resData}=props;
    const {
        cloudinaryImageId,costForTwo,cuisines,name,avgRating,areaName,locality
    }=resData?.info
    // console.log(resData)
    return resData==undefined? (<Shimmer/>) : (
    
        <div className="res-card">
            {/* {console.log(areaName)} */}
            <img className="res-card-food" src={CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{avgRating}</h3> 
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{(locality||areaName).charAt(0).toUpperCase() + (locality||areaName).slice(1)} </h5>
        </div>
    )
}

export default ResCard;