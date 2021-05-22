import React, { Component } from 'react';
import firstHOC from '../hocs/firstHOC';

class HOCTest extends Component {
    render() {
        return (
            <div className="hoc-test" style={{
                color: this.props.randomCol,
                fontSize: "40px"
            }}>
                <img style={{width: "200",height: "200px"}} src="dcxb2ey-72d7aecb-7584-4332-b81f-a02f7e185856.gif" alt="" />
                <p>tyom tyom</p>
            </div>
        )
    }
}

export default firstHOC(HOCTest);
