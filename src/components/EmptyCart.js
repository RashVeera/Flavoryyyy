import { Link } from "react-router-dom"
import empty from "../../images/2xempty_cart_yfxml0.webp"
const EmptyCart =() =>{
    return (
        <>
            <img className="w-80 ml-56 mt-36" src={empty}/>

           <span className="m-2 p-1 block text-center font-bold text-gray-600 text-lg">Your cart is empty</span>
           <span className="block m-1 text-center text-xs text-gray-400">You can go to home page to view more restaurants</span>
           <button className="bg-orange-500 p-3 ml-[260] mt-4  text-white"><Link className="link" to="/">SEE RESTAURANTS NEAR YOU</Link></button>
           </>



      
    )
}

export default EmptyCart