import React, { Component } from 'react'

export default function(ParamComp){ 
    return class newComp extends Component {
        getrundomNumber(min,max){
            return Math.round(Math.random() * (max - min) + min);
        }
        getRandomColor(){
            return `rgb(${this.getrundomNumber(1,255)}, ${this.getrundomNumber(1,255)}, ${this.getrundomNumber(1,255)})`
        }
        render() {
            return <ParamComp randomCol={this.getRandomColor()} {...this.props}/>
        }
    }
}
