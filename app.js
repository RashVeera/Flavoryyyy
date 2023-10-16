import React from "react";
import * as ReactDOM from 'react-dom/client';
import search from './images/search.png'
import companylogo from './images/icons8-food-delivery-32.png'
import food from './images/Lunchbox.webp'
const Header = () =>{
    return (
        <div className="header">
            <img className="logo" src={companylogo}/>
            {/* <div className="search">
               <img className="search-icon" src={search}/> 
               <div>Search</div>
            </div> */}
            <div className="nav-items">
                <ul>
                    <div className="search"><img className="search-icon" src={search} /> <li>  Search</li></div>
                
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Rashika</li>
                    <li>Cart</li>
                </ul>
                </div>
    
        </div>
    ) 
}

const ResCard = () =>{
    return (
        <div className="res-card">
            <img className="res-card-food" src={food} />
            <h2>LunchBox</h2>
            <h3>4.3</h3>
            <span>Biryani, North Indian, Vadapalani 2.0 km</span>
        </div>
    )
}
const ResContainer = () =>{
 return (
    <div className="res-container">
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
        <ResCard/>
    </div>
 )
}

const Bodies = () => {
 return (
    <div className="body-content">
        <ResContainer/>
    </div>
 )
}

const AppLayout= () =>{
return (
    <div className="Applayout">
        <Header/>
        <Bodies/>
    </div>
)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
 