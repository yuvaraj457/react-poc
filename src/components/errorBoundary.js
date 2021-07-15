import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {error:null,errorInfo:null}
    }
    componentDidCatch(error,errorInfo) {
        this.setState({
            error:error,
            errorInfo:errorInfo
        })
    }
    render(){
        if(this.state.errorInfo){
            return(
                <div>
                    <h2>Something Went Wrong.</h2>
                    {this.state.error && this.state.error.toString()}
                </div>
            )
        }
        return this.props.children;
    }
}

class CountBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    countHandle = ()=> {
        this.setState({
            count : this.state.count+1
        });
    }

    render(){
        if (this.state.count > 3){
            throw new Error('You Pressed More Than 3 Times');
        }
        return(
            <div>
                <p>Don't Click The Number More Than 3 Times</p>
                <button onClick={this.countHandle}>You clicked {this.state.count}</button>
            </div>
        )
    }
}

const ErrorCheck = ()=> {
    return(
        <div>
        <ErrorBoundary>
            <CountBoundary/>
        </ErrorBoundary>
        <ErrorBoundary>
            <CountBoundary/>
        </ErrorBoundary>
        </div>
    )
}
export default ErrorCheck;