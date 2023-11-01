import { useDispatch } from "react-redux"
import cart, { addItem } from "../utils/cartslice"

const ResItem=({resData})=>{
    console.log(resData)
    const dispact=useDispatch()
    const handleItem=(item)=>{
        dispact(addItem(item))
    }
    return (
        <div>
    {   resData.map((ele)=>(
          <div key={ele.card.info.id}  className=" flex border-b border-b-stone-500 border-dashed m-3 py-3 px-2 ">
          <div className="flex-col w-10/12  ">
             <span className="font-semibold">{ele.card.info.name}</span>
             
             <p className="text-base">₹  { ele.card.info.price?ele.card.info.price/100:ele.card.info.defaultPrice/100 }</p>
       
             <p className="text-sm text-slate-400 py-2">{ele.card.info.description}</p>
            
             </div>
            
            <div className="relative w-2/12">
                <span className="absolute bg-black text-white left-7 font-sans text-sm bottom-0 rounded-lg px-2 py-1 " onClick={()=>handleItem(ele)}>Add +</span>
            <img className="w-full h-[100] justify-self-end p-1" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+ele.card.info.imageId}/>
            
            </div>
           
     
         </div>
     
       ))
    }
       </div>
    )
}

export default ResItem;