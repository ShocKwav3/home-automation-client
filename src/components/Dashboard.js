import React, { Component } from "react";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.getSensorData()
  }

  render() {
  console.log("HOLA ", this.props.allState)
    return (
      <h1>Hello, world!</h1>
    );
  }
}


export default Dashboard;