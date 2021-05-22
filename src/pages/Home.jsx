import React from 'react';
import themeContext from '../contexts/MyContext';
import MyList from './MyList';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color: "lightblue"
        }

        this.changeTheme = this.changeTheme.bind(this);
    }
    changeTheme(){
        this.setState(prState=>{return {color: prState.color === "lightblue" ? "blue" : "lightblue"}});
    }
    render(){
        const data = ["text","text","text","yeshyo text","yeshyo odin text"];
        const Provider = themeContext.Provider;
        return(
            <div className="content-divs">
                <button onClick={this.changeTheme}>Change page theme</button>
                <Provider value={this.state.color}>
                    <MyList data={data}/>
                </Provider>
            </div>
        )
    }
}

export default Home;