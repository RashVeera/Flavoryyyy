import React from "react";
import { lazy,Suspense } from "react";
import * as ReactDOM from 'react-dom/client';
import ResContainer from "./components/RestaurantContainer";
import Header from "./components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offers from "./components/Offers";
import Error from "./components/Error"
// import RestaurantMenu from "./components/RestaurantMenu";

import About from "./components/About";
import Shimmer from "./components/Shimmer";
const AppLayout= () =>{
return (
    <div className="Applayout">
        <Header/>
        <Outlet/>
    </div>
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
 