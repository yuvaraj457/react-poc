import React, {Component} from 'react';
class Signupform extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            comment : '',
            selectvalue : 'react'
        }
    }

    eventNameHandle = (event)=> {
        this.setState({
            username:event.target.value
        });
    }

    eventEmailHandle = (event)=> {
        this.setState({
            email:event.target.value
        });
    }

    eventCommentHandler = (event)=> {
        this.setState({
            comment:event.target.value
        })
    }

    eventSelectHandle = (event)=> {
        this.setState({
            selectvalue:event.target.value
        })
    }

    eventSubmitHandle = (event)=> {
        alert(`Hello ${this.state.username} are you wish to submit`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.eventSubmitHandle}> 
                <label>Name:
                    <input type='text'  value={this.state.username} onChange={this.eventNameHandle}/>
                </label>
                <br/>
                <label>Email: 
                    <input type='email' value={this.state.email} onChange={this.eventEmailHandle}/>
                </label>
                <br/>
                <label>Select Your Favourite:
                    <select value={this.state.selectvalue} onChange={this.eventSelectHandle}>
                        <option value='react'>React</option>
                        <option value='python'>Python</option>
                        <option value='java'>Java</option>
                        <option value='php'>PHP</option>
                    </select>
                </label>
                <br/>
                <label>Comments:
                    <textarea value={this.state.comment} placeholder='enter comment' onChange={this.eventCommentHandler}></textarea>
                </label>
                <br/>
                <label>Submit:
                    <input type='submit' />
                </label>
            </form>
        )
    }
}

export default Signupform;