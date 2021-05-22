import React, { Component } from 'react';
import styles from './css/Forms.module.css';

export default class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentInputValue: this.props.value
        }

        this.inputValue = React.createRef();
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue(e){
        this.setState(previosState=>({currentInputValue: e.target.value}));
        this.props.valueChange(e.target.value);
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log(this.inputValue.current.getAttribute("type"))
        },3000)
    }
    render() {
        const {label,type} =  this.props;
        return (
            <div>
                <label htmlFor="">{label}</label>
                <input ref={this.inputValue} className={styles.logInput} type={type} value={this.state.currentInputValue} onInput={this.changeValue}/>
            </div>
        )
    }
}
