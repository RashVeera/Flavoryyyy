import { useContext, useState } from 'react';
import companylogo from '../../images/icons8-food-delivery-32.png';
import offers from '../../images/offers.png'
import search from '../../images/search.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserInfo from '../utils/UserInfo';
import { useSelector } from 'react-redux';
const Header = () =>{
    const [btnName,setbtnName]=useState("Login")
    const state= useOnlineStatus()
    const {LoggedInUser}= useContext(UserInfo)
    console.log(LoggedInUser)
    cartItem=useSelector((appstore)=>appstore.cart.items)
    return (
        <div className="flex items-center shadow-md my-2 p-2 bg-white z-20  font-sans sticky top-0 justify-between"> 
            <Link to="/">
                <>
                <img className="w-12" src={companylogo}/>
                <span className={ state?"dot-online":"dot-offline"}></span>
            </>
            </Link>
            {/* <div className="search">
               <img className="search-icon" src={search}/> 
               <div>Search</div>
            </div> */}
            <div className="nav-items">
                <ul className='flex items-center'>
                    <div className="search flex">
                        <li>  Search</li>
                        </div>
                
                    <div className="search flex items-center px-3">
                        
                        <Link className='links' to="/offers"><li >Offers</li></Link></div>
                        <Link className='px-2' to="/help"><li>Help</li></Link>
                    <Link  className='px-2' to="/about"><li>Rashika</li></Link>
                    <Link  className='px-2' to="/cart"><li className='px-2'>Cart-{cartItem.length}</li></Link> 
                    <button className='px-2' onClick={()=>{
                        btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                    }}>{btnName}</button>
                    <li className='font-bold'>{LoggedInUser}</li>
                </ul>
                </div>
    
        </div>
    ) 
}

export default Header;