import companylogo from '../../images/icons8-food-delivery-32.png';
import offers from '../../images/offers.png'
import search from '../../images/search.png';
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
                
                    <div className="search"><img className="search-icon" src={offers} /><li>Offers</li></div>
                    <li>Help</li>
                    <li>Rashika</li>
                    <li>Cart</li>
                </ul>
                </div>
    
        </div>
    ) 
}

export default Header;