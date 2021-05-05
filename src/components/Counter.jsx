import react, { Component } from "react";
import styles from "./Counter.module.css";
class HtmlElem2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,    
    };
    setInterval(()=>{
      this.setState(previosState=>{
          return {number: previosState.number+1}
      })
    },1000)
  }
  render() {
    return (
      <div className={styles.main}>
        <p className="p1">{this.state.number}</p>
      </div>
    );
  }
}

export default HtmlElem2;
