import React from "react";
import * as ReactDOM from 'react-dom/client';
import ResContainer from "./components/RestaurantContainer";
import Header from "./components/Header";

import Bodies from "./components/Bodies";

const AppLayout= () =>{
return (
    <div className="Applayout">
        <Header/>
        <ResContainer/>
    </div>
)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
 