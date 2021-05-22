import React, { Component } from "react";
import themeContext from "../contexts/MyContext";

export default class ListItems extends Component {
  render() {
    return (
      <themeContext.Consumer>
          {theme=><li style={{color: theme}}>{this.props.body}</li>}
      </themeContext.Consumer>
    );
  }
}
