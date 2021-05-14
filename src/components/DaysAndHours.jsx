import React from 'react';
import Input from './Input';
import Hours from './Hours';

class DaysAndHours extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            days: 0
        }
        this.daysChange = this.daysChange.bind(this);
        this.hoursChange = this.hoursChange.bind(this);    
    }
    daysChange(norValue){ 
        this.setState({days: norValue});
    }
    hoursChange(norValue){
        this.setState({days: norValue / 24});
    }
    render(){
        return(
            <div>
                <Input onChange={this.daysChange} days={this.state.days} type="text" name="days" label="Days" id="days"></Input>
                <Hours hoursChange={this.hoursChange} days={this.state.days} type="text" name="hours" id="hours" label="Hours"></Hours>
            </div>
        )
    }
}

export default DaysAndHours;