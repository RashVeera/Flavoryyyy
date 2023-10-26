import { useState } from 'react';
import companylogo from '../../images/icons8-food-delivery-32.png';
import offers from '../../images/offers.png'
import search from '../../images/search.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () =>{
    const [btnName,setbtnName]=useState("Login")
    const state= useOnlineStatus()

    return (
        <div className="header">
            <Link to="/">
                <>
                <img className="logo" src={companylogo}/>
                <span className={ state?"dot-online":"dot-offline"}></span>
            </>
            </Link>
            {/* <div className="search">
               <img className="search-icon" src={search}/> 
               <div>Search</div>
            </div> */}
            <div className="nav-items">
                <ul>
                    <div className="search">
                        <img className="search-icon" src={search} /> <li>  Search</li></div>
                
                    <div className="search">
                        
                        <img className="search-icon" src={offers} /><Link className='links' to="/offers"><li>Offers</li></Link></div>
                        <Link className='links' to="/help"><li>Help</li></Link>
                    <Link  className='links' to="/about"><li>Rashika</li></Link>
                    <li>Cart</li>
                    <button className='filter-bt' onClick={()=>{
                        btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
                </div>
    
        </div>
    ) 
}

export default Header;