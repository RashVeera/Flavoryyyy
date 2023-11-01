import UserClass from "./UserClass";
import React from "react";
import UserClass2 from "./UserClass2";
import UserInfo from "../utils/UserInfo";
class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("Parent constructor")
    }


    componentDidMount(){
        // console.log("Parent Component did mount")
    }

    
    componentDidUpdate(){
        // console.log("Parent  update")
    }

    componentWillUnmount(){
        // console.log(" Parent  unmounted")
    }
    render(){
        // console.log("Parent Render")
        return (
            <>
            <div>This is a sample Food ordering application</div>
            <UserInfo.Consumer>
            {
        ({LoggedInUser})=>(
            <h1>{LoggedInUser}</h1>
        )
            }
            </UserInfo.Consumer>
            <UserClass name="Rashika" Location="Chennai"/>
            </>
            
        )
    }
}

export default About;