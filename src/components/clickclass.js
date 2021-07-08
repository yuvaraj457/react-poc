import React, {Component} from 'react'
class Clickclass extends Component{
    clickhandle(){
        console.log('Clicked by class method')
    }
    render(){
        return(
            <div><button onClick={this.clickhandle}>Click Me 2</button></div>
        )
    }
}

export default Clickclass