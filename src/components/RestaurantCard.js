import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
const ResCard = (props) =>{
    const {resData}=props;
    const {
        cloudinaryImageId,costForTwo,cuisines,name,avgRating,areaName,locality
    }=resData?.info
    // console.log(resData)
    return resData==undefined? (<Shimmer/>) : (
    
        <div className="w-[250] h-[300] hover:scale-90 flex-col px-4 truncate  m-3 font-sans ">
            {/* {console.log(areaName)} */}
            <img className="w-[200] h-[150] self-center py-3 justify-self-center rounded-2xl" src={CDN_URL+cloudinaryImageId} />
            <h2 className="font-bold text-base " >{name}</h2>
            <h3>{avgRating}</h3> 
            <h5 className="text-sm text-slate-400 ">{cuisines.join(" , ")}</h5>
            <h5 className="">{(locality||areaName).charAt(0).toUpperCase() + (locality||areaName).slice(1).toLowerCase()} </h5>
        </div>
    )
}

export default ResCard;