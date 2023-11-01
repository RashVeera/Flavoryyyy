import React, { useEffect, useState } from "react";
import { lazy,Suspense } from "react";
import * as ReactDOM from 'react-dom/client';
import ResContainer from "./components/RestaurantContainer";
import Header from "./components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offers from "./components/Offers";
import Error from "./components/Error"
import { Provider } from "react-redux";
// import RestaurantMenu from "./components/RestaurantMenu";

import About from "./components/About";
import Shimmer from "./components/Shimmer";
import UserInfo from "./utils/UserInfo";
import appstore from "./utils/appstore";
import Cart from "./components/Cart"; 
const AppLayout= () =>{
    const [userName,setuserName]=useState("Dummy")
    useEffect(
        ()=>{
            const data={
                name:"Rashika Veera"
            }
            setuserName(data.name)
        } ,[] )
return (
    <Provider store={appstore}>
    <UserInfo.Provider value={{LoggedInUser:userName,setuserName}}>
    <div className="Applayout">
        <Header/>
        <Outlet/>
    </div>
    </UserInfo.Provider>
    </Provider>
)
}

const RestaurantMenu=lazy(()=>(import('./components/RestaurantMenu')))

const AppRoutes=createBrowserRouter([
   { path:'/',
    element:<AppLayout/>,
  children:[  {
     path:'/',
     element:<ResContainer/>        
    },
    {
        path:'/help',
        element:<Help/>,
        errorElement:<Error/>
    }, {
        path:'/about',
        element:<About/>,
        errorElement:<Error/>
    },
    {
        path:'/offers',
        element:<Offers/>,
        errorElement:<Error/>
    },
    {
        path:'/cart',
        element:<Cart/>,
        errorElement:<Error/>
    },
    {
        path:'/restaurant/:resId',
    element:
    <Suspense fallback={<Shimmer/>}><RestaurantMenu/></Suspense>
    ,
    errorElement:<Error/>
    }
],
    errorElement:<Error/>
}
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
 