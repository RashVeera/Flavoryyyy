import UserClass from "./UserClass";
import React from "react";
import UserClass2 from "./UserClass2";
class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent component")
    }
    componentDidMount(){
        console.log("Parent Component did mount")
    }
    render(){
        return (
            <>
            <div>This is a sample Food ordering application</div>
            <UserClass name="Rashika" Location="Chennai"/>
            <UserClass name="Rashika2" Location="Chennai2"/>
            <UserClass2 name="Rashika2" Location="Chennai2"/>
            </>
            
        )
    }
}

export default About;