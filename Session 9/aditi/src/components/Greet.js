import React, { Component } from 'react'

class Greet extends Component{
    render(){
        return <h1>Hi, I'm {this.props.name}</h1>
    }
}

export default Greet