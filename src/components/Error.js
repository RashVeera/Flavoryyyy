import { useRouteError } from "react-router-dom"
import Error_image from "../../images/Error-image.png"
import { Link } from "react-router-dom";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <>
       
        <div className="error-page">
        <img className="shortly" src={Error_image}/>
        <h1>We'll be back shortly</h1>
        <p>We are fixing a temporary glitch. Sorry for the inconvenience.</p>
        <button className="error-filter-button"><Link className="link" to="/">Go back</Link></button>
        </div>
        </>
    )
}

export default Error