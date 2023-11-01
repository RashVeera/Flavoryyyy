import { useDispatch, useSelector } from "react-redux"
import ResItem from "./RestaurantItem"
import appstore from "../utils/appstore"
import  { clearCaRT } from "../utils/cartslice";
import EmptyCart from "./EmptyCart";

const Cart =() =>{
    const items=useSelector((appstore)=>appstore.cart.items)
    const dispatch=useDispatch()
    const clearItems=()=>{
        dispatch(clearCaRT())
    }
return (
    <div className="w-6/12 ml-96 ">
    {items.length==0 && (<EmptyCart/>) || 
        <>
    <h1 className="text-center">Cart Items</h1>
    
    <div className="relative block">
    <button className="bg-black text-white rounded-md p-1  right-5 block absolute top-7 " onClick={clearItems}>Clear Cart</button>
    </div>
    
    <div className="mt-20 ">
        
    <ResItem  resData={items} />
    </div>
    </>
}
    </div>
)
}

export default Cart