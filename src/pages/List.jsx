import React, { Component } from 'react';
import ListItems from './ListItems';

export default class List extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map((el,i)=><ListItems body={el} key={i}/>)}
            </ul>
        )
    }
}
