import { useRouteError } from "react-router-dom"
import Error_image from "../../images/Error-image.png"
import { Link } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <>
       
        <div className="flex-col  w-[800] mt-36 ml-[500]  p-5  gap-2 ">
        <img className="w-60 justify-items-center ml-[70]" src={Error_image}/>
        <h1 className="ml-[80] my-3 text-2xl font-bold">We'll be back shortly</h1>
        <p className="text-slate-500">We are fixing a temporary glitch. Sorry for the inconvenience.</p>
        <button className="bg-orange-500 p-3 ml-[150] mt-4 text-white"><Link className="link" to="/">Go back</Link></button>
        </div>
        </>
    )
}

export default Error