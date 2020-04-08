import React, {Component} from "react";
class Error extends  Component{
    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }

    render() {
        if(this.state.hasError){
            return <h1> Oooooooops. I guess we encountered an error</h1>
        }
        return  this.props.children
    }

}

export default Error
