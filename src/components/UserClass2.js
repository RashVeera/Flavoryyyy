import React from "react";

class UserClass2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
        // console.log("Child component")
    }

    componentDidMount(){
        // console.log("Child component did mount")
    }
    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{
             this.setState({count:this.state.count+1})}
        }>+</button> 
         <button onClick={()=>{
            if (this.state.count>0){
             this.setState({count:this.state.count-1})}}
        }>-</button>
            <h3>Name : {this.props.name}</h3>
            <h3>Location : {this.props.Location}</h3>
            {/* {console.log("Child render")} */}
            </>
        )
    }
}

export default UserClass2