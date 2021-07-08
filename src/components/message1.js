import React,{ Component } from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : "Hello World",
            count : 0
        }
    }

    change(){
        this.setState({
            message:"Hello Yuvaraj"
        });
    }

    increament(){
        this.setState({
            count : this.state.count+1
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                    <button onClick={()=>this.change()}>Click Change</button>
                <h2>{this.state.count}</h2>
                    <button onClick={()=>this.increament()}>Click Me</button>
            </div>
        );
    }
}
export default Message;

