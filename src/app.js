import React from "react";
import * as ReactDOM from 'react-dom/client';

import Header from "./components/Header";

import Bodies from "./components/Bodies";

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
 