import { CDN_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
const ResEachcompcard = (props) =>{
    const {resData}=props;
    // const {
        
    // }=resData?.info
    console.log(resData)
    return resData==undefined? (<Shimmer/>) : (
    
        <></>
    )
}

export default ResEachcompcard;