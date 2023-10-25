import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:'Dummy',
                Location:'Dummy',
            }
        }
         console.log(this.props.name+"Child constructor")
    }

    async componentDidMount(){
       const data= await fetch("https://api.github.com/users/RashVeera");
       const data_json=await data.json();
       console.log("child did mount"+data_json)
       this.setState({
        userInfo:data_json
       })
    }

    componentDidUpdate(){
        console.log("child did update")
    }

    componentWillUnmount(){
        console.log("child has unmounted")
    }
    render(){
        console.log("Child Render")
        const {name,location}=this.state.userInfo;
        return (
        <>
        
            <h3>Name : {name}</h3>
            <h3>Location : {location}</h3>
          
            </>
        )
    }
}

export default UserClass