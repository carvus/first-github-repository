import React from "react";

class Hours extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value: this.props.days
        }

        this.changeValue = this.changeValue.bind( this );
    }

    changeValue(e){ 
        this.setState({value: e.target.value})
        this.props.hoursChange(e.target.value);
    }

    componentWillReceiveProps( newProps ) {
        this.setState( { value: newProps.days} )
    }

  render() {
    const { id, name, label, type } = this.props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input onInput={ this.changeValue } value={this.state.value * 24} type={type} name={name} id={id}/>
      </div>
    );
  }
}

export default Hours;
