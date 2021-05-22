import React, { Component } from 'react'
import List from './List';

export default class MyList extends Component {
    render() {
        return (
            <div>
                Hello my friends this is my List
                <List data={this.props.data}/>
            </div>
        )
    }
}
