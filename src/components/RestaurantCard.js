import { CDN_URL } from "../utils/constant";
const ResCard = (props) =>{
    const {resData}=props;
    const {
        cloudinaryImageId,costForTwo,cuisines,name,avgRating,locality
    }=resData?.info
    return (
        <div className="res-card">
            <img className="res-card-food" src={CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{avgRating}</h3> 
            <h5>{cuisines.join(" , ")}</h5>
            <h5>{locality.charAt(0).toUpperCase() + locality.slice(1)}</h5>
        </div>
    )
}

export default ResCard;