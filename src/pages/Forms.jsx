import React, { Component } from 'react'
import Input from './Input';
import styles from './css/Forms.module.css';

export default class Forms extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e){
        e.preventDefault();
        console.log(
            {
                username: this.state.username,
                password: this.state.password
            }
        ) 
    }
    changeValue(type,value){
      this.setState({[type]: value})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm} action="" className={styles.form}>
                    <Input  valueChange={(newValue)=>this.changeValue("username",newValue)} value={this.state.username} type="text" label="Username"/>   
                    <Input valueChange={(newValue)=>this.changeValue("password",newValue)} value={this.state.password} type="password" label="Password"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
